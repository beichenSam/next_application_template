"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "antd";

const Page = () => {
  const t = useTranslations("global");
  console.log("t", t("text"));
  return <Button type="primary">{t("text")}</Button>;
};

export default Page;
