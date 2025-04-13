import Layout from "@/components/Layout";
import React from "react";
import { useMessages } from "next-intl";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function BasicLayout({ children }: Readonly<Props>) {
  return <Layout curActive="/dashboard">{children}</Layout>;
}
