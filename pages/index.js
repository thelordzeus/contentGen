import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import GptResponse from "@/components/GptResponse";
import BottomBar from "@/components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className="bg-black h-screen">
        <Head>
          <title>ContentGen</title>
          <meta
            name="description"
            content="A ChatGPT powered writer which writes your linkidn posts for you."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <GptResponse />
        
      </div>
    </>
  );
}
