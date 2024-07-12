'use client'

import Image from "next/image";
import RetroGrid from './../components/magicui/retro-grid';
import GridPattern from './../components/magicui/animated-grid-pattern';
import { AnimatedSubscribeButton } from './../components/magicui/animated-subscribe-button';
import { useEffect, useState } from "react";
import { isAllowed, setAllowed, getUserInfo } from '@stellar/freighter-api';
import { Button } from "@/components/ui/button";
import VelocityScroll from './../components/magicui/scroll-based-velocity';
import AnimatedShinyText from './../components/magicui/animated-shiny-text';


const walletConnetButtonProps = {
  buttonColor: "white", 
  buttonTextColor: "black",
  subscribeStatus: false,
  initialText: "Wallet Connect",
  changeText: "Connected"
}

const textRevealProps = {
  text: "Habit Tracker on Chain with the staking functionailty",
}

const shinyTextProps = {
  children: "✨ Introducing StakedHabit in Beta",
  shimmerWidth: 500,
}

export default function Home() {

  function handleConnectClick() {
    console.log("hiii")
  }


  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const getPk = async (): Promise<string | null> => {
    try {
      const { publicKey } = await getUserInfo();
      return publicKey;
    } catch (error) {
      console.error('Error getting public key:', error);
      return null;
    }
  };

  const handleConnect = async () => {
    try {
      await setAllowed();
      const pk = await getPk();
      if (pk) setPublicKey(pk);
    } catch (error) {
      console.error('Error connecting:', error);
    }

    if(publicKey){
      setPublicKey(null);
    }

    if(!publicKey){
      try {
        await setAllowed();
        const pk = await getPk();
        if (pk) setPublicKey(pk);
      } catch (error) {
        console.error('Error connecting:', error);
      }
    }
  };

  useEffect(() => {
    const checkFreighterStatus = async () => {
      if (await isAllowed()) {
        const pk = await getPk();
        if (pk) {
          setPublicKey(pk);
        } else {
          setIsLocked(true);
        }
      }
    };

    checkFreighterStatus();
  }, []);

  // if (isLocked) {
  //   return <div>Freighter is locked.<br/>Sign in & refresh the page.</div>;
  // }



  return (
    <div>
      <div>
        <GridPattern />
      </div>
        <div className="flex justify-end my-8 mx-10">
          <button className="border border-black text-black text-xl bg-white px-4 py-2 rounded" onClick={handleConnect}>
            {publicKey ? "Disconnect" : "Connect"}
          </button>
          {/* <p>{publicKey}</p> */}
      </div>
      <div className=" flex justify-center text-xl">
        <AnimatedShinyText {...shinyTextProps} className="border rounded-full inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"/>
      </div>
      <div className="my-24 font-extrabold text-9xl">
        <VelocityScroll {...textRevealProps}/>
      </div>

    </div>
  );
}

