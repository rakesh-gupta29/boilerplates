import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/organisms/header";
import { AppProps } from "next/app";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextauth-boilerplate",
  description: "nextauth-boilerplate travel app",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${pjs.className} page-wrapper flex flex-col`}>
      <Component {...pageProps} />
    </div>
  );
}
