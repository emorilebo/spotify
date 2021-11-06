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
        <div className="flex-1 p-4">
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
          {/* Action Buttons */}
          <div className="flex">
            <div className="flex flex-col  justify-center  rounded-lg bg-gray-200 flex-1 m-1 h-32 items-center transform hover:scale-105 transition text-xl">
              <img
                className="h-3/5"
                src="https://i.ibb.co/cyvcpfF/uberx.png"
                alt=""
              />
              Ride
            </div>
            <div className="flex flex-col  justify-center  rounded-lg bg-gray-200 flex-1 m-1 h-32 items-center transform hover:scale-105 transition text-xl">
              <img
                className="h-3/5"
                src="https://i.ibb.co/n776JLm/bike.png"
                alt=""
              />
              Wheels
            </div>
            <div className="flex flex-col  justify-center  rounded-lg bg-gray-200 flex-1 m-1 h-32 items-center transform hover:scale-105 transition text-xl">
              <img
                className="h-3/5"
                src="https://i.ibb.co/5RjchBg/ubershedule.png"
                alt=""
              />
              Reserve
            </div>
          </div>
          <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8">
            Where to?
          </div>
        </div>
      </div>
    </div>
  );
}
