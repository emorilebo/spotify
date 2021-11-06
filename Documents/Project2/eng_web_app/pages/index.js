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

      <div className="flex flex-col  h-screen">
        <Map />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <img className="h-16" src="logo_black.png" alt="" />
            <div className="flex items-center">
              <div className="mr-4 w-15 text-sm">Godfrey Lebo</div>
              <img
                className="h-12 rounded-full border border-grey-200 p-px"
                src="profile.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
