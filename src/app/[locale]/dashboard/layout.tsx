import Layout from "@/components/Layout";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function BasicLayout({ children }: Readonly<Props>) {
  return <Layout curActive="/dashboard">{children}</Layout>;
}
