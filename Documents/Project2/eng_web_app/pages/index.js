import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EngApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        <div className="bg-red-500">Map</div>
        <div className="">Start</div>
      </div>
    </div>
  );
}
