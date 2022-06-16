import Head from 'next/head'

import styles from '../styles/Home.module.css'

import React from "react";
import Script from 'next/script';

import { Slider } from '../components/Slider';
import { Navbar } from '../components/Navbar';
import { SkillCard } from '../components/SkillCard';
import { BreedBond } from '../components/BreedBond';
import { Landing } from '../components/Landing';
import { Screenshoots } from '../components/Screenshoots';


const listSlime = [
  "/assets/images/randomslimes_001.png",
  "/assets/images/randomslimes_002.png",
  "/assets/images/randomslimes_003.png",
  "/assets/images/randomslimes_004.png",
  "/assets/images/randomslimes_005.png",
  "/assets/images/randomslimes_006.png",
  "/assets/images/randomslimes_007.png",
  "/assets/images/randomslimes_008.png",
  "/assets/images/randomslimes_009.png",
  "/assets/images/randomslimes_010.png",
  "/assets/images/randomslimes_011.png",
  "/assets/images/randomslimes_012.png",
  "/assets/images/randomslimes_013.png",
  "/assets/images/randomslimes_014.png",
  "/assets/images/randomslimes_015.png",
  "/assets/images/randomslimes_016.png",
  "/assets/images/randomslimes_017.png",
  "/assets/images/randomslimes_018.png",
  "/assets/images/randomslimes_019.png",
  "/assets/images/randomslimes_020.png",
];

export default function Home() {
  return (
    <div >
      <Script src="https://kit.fontawesome.com/242f1006be.js" crossorigin="anonymous"></Script>
      <Head>
        <title>Slime Haven</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <div className='bg-home mx-auto flex justify-center items-center'>
          {/* <img className='p-28' src='/assets/images/slime-home.png' alt=''/> */}
          <Landing/>

        </div>

        <Screenshoots/>

        <div className='bg-about relative flex justify-center items-center '>
          <div className='flex justify-center items-center pb-12 sm:pb-28 mb-12'>
            {/* <div className='font-poppins text-2xl p-8'>
              <span className='text-white text-6xl font-bold -mb-6 flex'>“</span>
              <div className='text-white pr-8 '>
                <span className='color-title font-bold pr-3'>SLIME HEAVEN</span> 
                is a free to play pet raising simulator with
              </div>
              <div className='text-white pl-0 sm:pl-8 flex'><div>adorable colourful slimes for you to
                <span className='color-title font-bold pl-3'>BREED AND BOND WITH!</span><span className='text-white text-6xl font-bold'>“</span></div>
              </div>
            </div> */}

            <div className='font-poppins text-2xl p-8'>
              {/* <span className='text-white text-6xl font-bold -mb-6 flex'>“</span> */}
              <div className='text-white pr-8 '>
                <span className='color-title font-bold pr-3'><span className='text-white text-6xl font-bold'>“</span>SLIME HEAVEN</span> 
                is a free to play pet raising simulator with
              </div>
              {/* <span className='text-white text-6xl font-bold -mt-6 flex justify-end'>“</span> */}
              <div className='text-white pl-0 sm:pl-8 flex'><div>adorable colourful slimes for you to
                <span className='color-title font-bold pl-3'>BREED AND BOND WITH!</span><span className='text-white text-6xl font-bold pl-12 sm:p-0'>“</span></div>
              </div>
            </div>
          </div>
          <div className='absolute right-0 sm:right-6 bottom-0'>
            <img className='' src='/assets/images/slime-bone.png' alt=''/>
          </div>
        </div>
        

        <div className='flex justify-center items-center flex-col'>
          <h1 className='title-text py-4 color-title font-cp text-center'>PLAY TO EARN</h1>

          <div className='py-8 px-4 md:p-8 w-5/6'>
            <div className='grid grid-custom-col mx-auto container gap-8'>

              <div className='grid justify-items-end items-center'>
                <img src='/assets/images/LOCA.png' alt=''/>
                <div className='text-right'>
                  <h1 className='title-text color-title font-cp '>LOVE CAKE (LOCA)</h1>
                  <span className='desc-text flex justify-center items-center flex-col'>
                    <p className='font-poppins'>A premium currency used for  essential 
                    activities within Slime  Haven! Use it to breed your slimes, Buy Slimes from the marketplace And many more! 
                    You can obtain these from  fulfilling daily quests!</p>
                  </span>
                </div>
              </div>

              <div className='grid items-end justify-center'>
                <img src='/assets/images/line.png' alt=''/>
              </div>

              <div className=''>
                <img src='/assets/images/CREO_1.png' alt=''/>
                <div className='text-left'>
                  <h1 className='title-text color-title font-cp '>Creo Engine (CREO)</h1>
                  <span className='desc-text flex justify-center items-center flex-col'>
                    <p className='font-poppins'>A core currency of the creo engine ecosystem. 
                    You can convert your love cakes 
                    into Creo to cash out and earn income!</p>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h1 className='title-text color-title font-cp text-center'>Rogue Turn Based Strategy!</h1>
          <img src='/assets/images/bg-rogue.png' alt=''/>
        </div>

        <SkillCard/>

        <BreedBond/>

        <div className='bg-flabed'>
          <div className='py-2 md:py-12 container mx-auto flex flex-wrap justify-center items-center'>
            <div className='w-full md:w-1/2'>
              <img className='p-12' src='/assets/images/fabled-slime.png' alt=''/>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-center'>
                <h1 className='title-text py-4  color-title font-cp'>FABLED SLIMES</h1>
                <img className='p-12' src='/assets/images/fabled-desc.png' alt=''/>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center font-cp flex flex-col justify-center items-center'>
          <h1 className='title-text py-4  color-title '>CreoPlay Cross Interoperability!</h1>
          <img className='pb-4' src='/assets/images/creoplay.png' alt=''/>

          {/* <h1 className='title-text py-4  color-title font-cp'>Creoverse Cross Interoperability!</h1> */}
          <span className='desc-text flex justify-center items-center flex-col'>
            <p className='w-full sm:w-3/5 font-poppins px-8 sm:px-0'>Your slimes can be used within Evermore Knights as assistants in battle! Your slimes aren’t just lovely pets, but they’re travellers in-between worlds of all shapes and sizes! The Creoverse opens a 
            lot of possibilities for you and your adorable little friends!</p>
          </span>
        </div>
        <img  src='/assets/images/bg-creoverse.png' alt=''/>

        <div className='text-center font-cp'>
          <h1 className='title-text py-4  color-title '>Get your first SLIME and start fighting!</h1>
          <span className='desc-text flex justify-center items-center flex-col px-8 sm:px-0'>
            <p className='w-full sm:w-3/5 '>You need to have at least FOUR SLIMES to start the game in SLIME HAVEN. You could get it in various ways :</p>
            <p>(1).purchasing on NFT market<br/>(2).purchase from other players<br/>(3).purchase SLIME eggs.</p>
          </span>
        </div>

        <Slider list={listSlime} id={1}/>

        {/* partner */}
        <div className='grid grid-cols-2 sm:grid-cols-4 justify-items-center'>
          <img src='/assets/images/nomina.png' alt=""/>
          <img src='/assets/images/muse.png' alt=""/>
          <img src='/assets/images/creo.png' alt=""/>
          <img src='/assets/images/polygon.png' alt=""/>
        </div>
      </main>

      <footer className="bg-footer">
          <div className="container text-white flex flex-col flex-wrap px-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
            <div className="container mx-auto flex flex-wrap w-full py-8">

              <div className="inline-flex justify-center items-center w-full px-4  mt-7  lg:w-1/3 md:w-1/3">
                <div className="footer-left">
                  <img src="/assets/images/slime-logo-footer.png" alt=""/>
                </div>
              </div>

              <div className="w-full px-4 font-poppins mt-7 lg:w-1/3 md:w-1/3 flex justify-center items-center text-center">
                <span>©2022 Nomina. All Rights Reserved.</span>
              </div>
            
              <div className="w-full px-4 mt-7 lg:w-1/3 md:w-1/3 text-center flex justify-center items-center">
                <div className="grid grid-cols-3 gap-8">
                  <a href="https://www.instagram.com/evermoreknights.official/" rel="noreferrer" target="_blank" className="btn-footer">
                    <i className="fa-brands fa-instagram fa-lg"></i></a>
                  
                  <a href="https://discord.gg/creoengine" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-brands fa-discord"></i></a>

                  <a href="https://t.me/CreoEngineChannel" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-solid fa-paper-plane"></i></a>
                </div>

              </div>
            </div>
          </div>
          
      </footer>
    </div>
  )
}
