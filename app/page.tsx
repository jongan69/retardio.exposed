"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import RainingMoneyBackground from "./components/three/RainingMoney";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Footer } from "./components/footer";

const nfttokenAddress = `GrRjEpwHbLE1KY3uxtAMU4ravHfbMGzWEL8HcERPb3Ad` // Prob using weird endpoint of api
const coinMintAddres = `6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx`

export default function Home() {
  const [floorPrice, setFloorPrice] = useState<any>();
  const [tokenPrice, setTokenPrice] = useState<any>();

  const fetchFloorPrice = async (tokenAddress: string) => {
    const response = await fetch(`/api/floor`, { method: "POST", body: JSON.stringify({ tokenAddress }) });
    const price = (await response.json())?.uiFormmatted;
    return price;
  };
  
  const fetchTokenPrice = async (tokenAddress: string) => {
    const response = await fetch(`/api/quote`, { method: "POST", body: JSON.stringify({ "outputMint": tokenAddress }) });
    const price = (await response.json())?.uiFormmatted;
    return price;
  };

  useEffect(() => {
    const fp = fetchFloorPrice(nfttokenAddress);
    const tp = fetchTokenPrice(coinMintAddres);
    if(fp) setFloorPrice(fp);
    if (tp) setTokenPrice(tp);
  }, [nfttokenAddress, coinMintAddres]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex z-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">Retardio.exposed</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://raydium.io/swap/?inputMint=sol&outputMint=6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx&referrer=AMSi7nsBbYVVETPu5rXuC9KgabyXWc1thtfX3L7pSVqd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy my shit
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="https://assets.coingecko.com/coins/images/35759/standard/RETARDIO_LOGO-200x200.png?1709726267"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="flex flex-col">
         <code className="font-mono font-bold">Cousin Floor Price: {floorPrice}</code>
         <br/>
         <code className="font-mono font-bold">Retardio Price: {tokenPrice}</code>
         </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://retardio.xyz/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            N{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            In-depth information about RETARDIO.
          </p>
        </a>

        <a
          href="https://www.sniper.xyz/collection/retardio_cousins"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            I{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about RETARDIO&nbsp;art!
          </p>
        </a>

        <a
          href="https://x.com/retardiosolana"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            G{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Ong Im fucking the shit out of my cousin rn
          </p>
        </a>

        <a
          href="https://remilia.ly/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            G{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Cousins of cousins (real)(maybe(?))(jk yeah still real)
          </p>
        </a>
      </div>

      <div className="relative z-[-1] flex flex-col items-center mt-24">
        <h2 className="mb-3 text-3xl font-semibold">
          Features of Retardio{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <ul className="mt-6 text-center max-w-[30ch] text-sm opacity-50">
          <li className="mb-4">✔️ Very Secure</li>
          <li className="mb-4">✔️ Very Strokable</li>
          <li className="mb-4">✔️ Pretty Retarded</li>
          <li className="mb-4">✔️ Niggmaxxing</li>
          <li className="mb-4">✔️ Canceled af</li>
          <li className="mb-4">
            <Link href="">
            ✔️ Open Sauce
            </Link>
            </li>
        </ul>
      </div>
      <Footer opensourced="lockin.sol" opensourcedlink="https://github.com/jongan69" poweredby="Retards" poweredbylink="https://solscan.io/token/AJXrZ5VZTvsyXRS9yPsLeST5VwNPpoVvdW17aAruoQ8G"/>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Canvas>
          <RainingMoneyBackground />
        </Canvas>
      </div>
    </main>
  );
}
