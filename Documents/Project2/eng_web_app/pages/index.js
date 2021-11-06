import { useEffect } from "react";
import Head from "next/head";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3J1eGlmaXh1ciIsImEiOiJja3MwaTF3dnAwYWE2MndwZTdyYTk3MjduIn0.MtG_HqT6LlC9o12xHj9W-A";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 3,
    });
  });
  // const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/mapbox/streets-v11",
  // });
  return (
    <div className="">
      <Head>
        <title>EngApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col bg-red-300 h-screen">
        <div id="map" className=" bg-red-500 flex-1"></div>
        <div className="flex-1">Start</div>
      </div>
    </div>
  );
}
