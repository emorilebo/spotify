import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EngApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col bg-red-300 h-screen">
        <div className=" bg-red-500 flex-1">Map</div>
        <div className="flex-1">Start</div>
      </div>
    </div>
  );
}
