"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "antd";
import { useRequest } from "ahooks";

const Page = () => {
  const t = useTranslations("global");

  const { data, run } = useRequest(
    () => {
      return fetch("/api/articles/aaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      manual: true,
      onSuccess: (res) => {
        console.log("res", res);
      },
    }
  );

  const handleClick = () => {
    run();
  };

  return (
    <Button type="primary" onClick={handleClick}>
      {"dashboard" + t("welcome")}
    </Button>
  );
};

export default Page;
