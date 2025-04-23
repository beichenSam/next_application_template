import React from "react";
import "./globals.css";
import "@/lib/db";
type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return children;
}
