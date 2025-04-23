import mongoose from "mongoose";

interface Comment {
  user: string;
  content: string;
  createdAt: Date;
  photo?: string;
}

export interface Articles extends mongoose.Document {
  title: string;
  excerpt: string;
  detail: string;
  createTime: Date;
  updateTime: Date;
  slug: string;
  comments?: Comment[];
}

// 声明 Model 接口（含静态方法）
interface ArticlesModel
  extends mongoose.Model<Articles, {}, ArticlesInstanceMethods> {
  findArticleBySlug(slug: string): Promise<Articles | null>;
  setCommonAttribute(): Promise<void>;
}

interface ArticlesInstanceMethods {
  setCommonAttribute(slug: string): Promise<void>;
}

const ArticlesSchema = new mongoose.Schema<
  Articles,
  ArticlesModel,
  ArticlesInstanceMethods
>(
  {
    slug: {
      type: String,
      required: [true, "Need slug."],
    },
    title: {
      type: String,
      required: [true, "Please give a title for this article."],
    },
    excerpt: {
      type: String,
    },
    detail: {
      type: String,
      required: [true, "Need detail."],
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    updateTime: {
      type: Date,
    },
    comments: {
      type: [
        {
          user: { type: String, required: true },
          content: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
          photo: { type: String, default: "" },
        },
      ],
      default: [], // 初始为空数组,
    },
  },
  {
    statics: {
      findArticleBySlug(slug: string) {
        return this.findOne({ slug }).exec();
      },
    },
    methods: {
      async setCommonAttribute() {
        if (!this.comments) {
          this.comments = []; // 确保数组存在
        }
        await this.save();
      },
    },
  }
);

export default (mongoose.models.Article as ArticlesModel) ||
  mongoose.model<Articles, ArticlesModel>("Article", ArticlesSchema);
