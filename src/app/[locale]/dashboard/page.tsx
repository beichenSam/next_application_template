"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "antd";

const Page = () => {
  const t = useTranslations("global");
  return <Button type="primary">{"dashboard" + t("welcome")}</Button>;
};

export default Page;
