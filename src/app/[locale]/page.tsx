"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "antd";
import { Link } from "@/i18n/navigation";

const Page = () => {
  const t = useTranslations("global");
  return (
    <Link href={"/dashboard"}>
      <Button type="primary">{t("welcome")}</Button>
    </Link>
  );
};

export default Page;
