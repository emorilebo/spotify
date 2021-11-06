import { useEffect } from "react";
import Head from "next/head";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EngApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col bg-red-300 h-screen">
        <Map />
        <div className="flex-1">Start</div>
      </div>
    </div>
  );
}
