import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "index" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default function BasicLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
