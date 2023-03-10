import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";

export default function Home(props) {

  const router = useRouter();
  useEffect(() => {
    
    setTimeout(() => {
      router.push({ pathname: "/auth", query: { name: "/auth" } }, "/auth");
    }, 2000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center w-screen h-screen bg-wh">
          <Image
            alt="logo"
            src={"/assets/images/logo-full.svg"}
            width={"400"}
            height={"150"}
          />
        </div>
      </main>
    </>
  );
}
