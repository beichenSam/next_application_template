import React from "react";
import Head from "next/head";
import Header from "./Header";

interface props {
  children: React.ReactNode;
}

const layout = ({ children }: props) => {
  return (
    <div className="w-full">
      {/* <Head>HOME</Head> */}
      <Header />
      {children}
    </div>
  );
};

export default layout;
