import Image from "next/image";
import { Roboto } from "next/font/google";
import { Permanent_Marker } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['500']
});

const permanent = Permanent_Marker({
  subsets: ["latin"],
  weight: ['400']
});
//  <main className="w-full h-screen !bg-cover">
export default function Home() {
  return (
    <main className={roboto.className}>

      <div
        className={`fixed top-0 left-0 flex w-full h-14 justify-between items-center gap-4  bg-opacity-80 backdrop-filter backdrop-blur-sm transition-all duration-300 z-10 bg-gray-dark-3`}
      >
        <div className="flex items-center gap-4 md:gap-12">
          <a href="#top">
            <Image
              src="/Head.png"
              className="w-[228px] h-[40px] cursor-pointer"
              width={228}
              height={40}
              alt="addInfoToImage"
            />
          </a>
          <span>
            {' '}
            <a href="#pro">
              {' '}
              <span className="p-2 bg-primary-default rounded-[40px] w-[242px] md:w-[196px] hover:bg-primary-light active:bg-primary-dark">
                {' '}
                Pro 49{' '}
              </span>
            </a>{' '}
            <span className="p-2"> </span>
            <a href="#elite">
              <span className="p-2 bg-primary-default rounded-[40px] w-[242px] md:w-[196px] hover:bg-primary-light active:bg-primary-dark">
                {' '}
                Elite 99
              </span>
            </a>
          </span>
        </div>
        <span className="p-2">
          {' '}
          <a href={`https://t.me/TradingToolCrypto`} target="_blank">
            <button className="md:flex flex-col hidden bg-primary-default rounded-[40px] w-[242px] md:w-[196px] items-center justify-center hover:bg-primary-light active:bg-primary-dark">
              <span>
                {' '}
                <Image
                  src="/telegram-white-icon.svg"
                  className="w-10 p-1"
                  width={40}
                  height={40}
                  alt="addInfoToImage"
                />
              </span>
            </button>
          </a>
        </span>
      </div>


      {/** Download  */}
      <div className="flex flex-col items-center xl:flex-row justify-between w-[360px] md:w-[1280px] relative mt-9 md:mt-[67px]">
        <Image
          src="/K.png"
          className="w-full md:w-[684px] md:h-[581px] xl:absolute -right-32"
          width={684}
          height={581}
          alt="addInfoToImage"
        />
        <div
          id="top"
          className="flex flex-col justify-center w-[92%] md:w-[567px] md:h-[581px] mt-9"
        >
          <p className="text-[33px] md:text-[50px]">Level Up with</p>
          <p className="text-[33px] md:text-[50px] text-primary-default font-Permanent">
            <span className={permanent.className}> Metatrader 5 </span>
           
          </p>
          <p className="text-[33px] md:text-[50px]">and get Alpha</p>
          <div className="text-[18px] md:w-[477px] mt-3">
            <p className="mb-4 md:mb-0">
              TradingToolCrypto is an open, robot framework,
              <br className="hidden md:block" />
              and toolset for all levels of traders that
              <br className="hidden md:block" />
              <span>elevate your trading success. Requires Windows</span>
              <span>
                <a
                  href={`https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=www.metatrader5.com&utm_campaign=download`}
                  target="_blank"
                >
                  <Image
                    src="/windows-white.svg"
                    className="w-[24px] h-[24px] cursor-pointer"
                    width={24}
                    height={24}
                    alt="addInfoToImage"
                  />
                </a>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-12 md:flex-row md:items-center">
            <a
              href={`https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=www.metatrader5.com&utm_campaign=download`}
              target="_blank"
            >
              <button className="md:flex flex-col hidden bg-primary-default rounded-[40px] w-[242px] md:w-[196px] h-[48px] items-center justify-center">
                <p className="font-[500] text-[16px]">Download MT5</p>
              </button>
            </a>
            <a
              href={`https://github.com/TradingToolCrypto/MT5-TradingToolCrypto/archive/refs/heads/master.zip`}
              target="_blank"
            >
              <button className="w-[242px] md:w-[196px] h-[48px] justify-center items-center text-black font-medium bg-white rounded-full">
                <p className="font-[500] text-[16px]">Download TTC</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/** backtest */}

      <div className="flex flex-col xl:flex-row justify-between items-center w-[360px] md:w-[1280px] relative my-[120px] md:mt-[241px] md:mb-[321px] bg-gray-dark-3">
        <Image
          src="/charts.png"
          className="w-full md:w-[471px] md:h-[415px] xl:absolute right-0"
          width={471}
          height={415}
          alt="addInfoToImage"
        />
        <div className="flex flex-col justify-end w-[90%] md:w-[684px] h-[260px]">
          <p className="text-[36px] font-bold mb-6">
            Chart and backtest  <span className={permanent.className}>
              <span className="text-primary-default"> anything </span>
               </span>
          </p>
        
          <div className="text-[18px] md:w-[530px]">
            <p className="mb-3 md:mb-0">
              Combine the power of MT5 with 20+ of the most popular crypto
              currency exchanges.
            </p>
            <p>
              Supports all indicators and automated trading on selected exchanges.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:mt-12">
           
          </div>
        </div>
      </div>

      {/** DEX */}
      <div className="flex flex-col xl:flex-row items-center justify-between w-[360px] md:w-[1280px] relative mb-[80px] md:mb-[297px] ">
        <Image src="/api.png"
          className="w-full md:w-[505px] md:h-[488px]"
          width={505}
          height={488}
          alt="addInfoToImage"

        />
        <div
          id="pro"
          className="flex flex-col justify-center w-[90%] md:w-[684px] xl:w-[550px] h-[460px]"
        >
          <p className="text-[36px] font-bold mb-6">
            Connect directly to CEX and DEX with  <span className={permanent.className}>
              <span className="text-primary-default"> unlimited </span>
               </span> api connectivity
          </p>
          <p className="text-[18px] m:w-[530px]">
            -- Trade without any 3rd party slowing you down.{' '}
            <br className="hidden md:block" /> -- Order books, Open Interest, and historical data.
            <br className="hidden md:block" /> -- Manual, sem-auto, and robot.
            ready.
            <br className="hidden md:block" /> -- Multi-charts, indicators, and
            custom timeframes.
          </p>
          <div className="flex items-center gap-4 mt-12">
          
          </div>
        </div>
      </div>

      {/** Elite  */}

      <div className="flex flex-col xl:flex-row items-center justify-between w-[360px] md:w-[1280px] relative mb-[80px] md:mb-[297px] bg-gray-dark-3">
        <Image
          src="/elite.png"
          className="w-full md:w-[471px] md:h-[415px] xl:absolute right-0"
          width={471}
          height={415}
          alt="addInfoToImage"
        />
        <div
          id="elite"
          className="flex flex-col justify-end w-[90%] md:w-[684px] h-[260px]"
        >
          <p className="text-[36px] font-bold mb-6">
            Get Exclusive Access with  <span className={permanent.className}> Elite </span>
          </p>
          <div className="text-[18px] md:w-[530px]">
            <p className="mb-3 md:mb-0">
              Unlock proprietary algorithms, trading room, and support.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:mt-12">
          
          </div>
        </div>
      </div>

      {/** Sign Up  */}

      <div className="flex flex-col xl:flex-row items-center justify-between w-[360px] md:w-[1280px] relative mb-[80px] md:mb-[297px]  p-2">
        <div className="flex flex-col w-full md:w-[550px] justify-center items-center xl:w-full h-[750px] md:h-[460px] pb-5">
          <p className="text-[56px] font-bold text-center p-2">
            No Registration required.
          </p>
          <p className="text-[18px] text-center">
            <span className="font-bold"> Privacy focused.</span>{' '}
            <span className="text-[18px] md:w-[550px]">
              Destktop PC, Metatrader and Crypto is all you need. Trading platform
              is self hosted, connects via api to exchanges, and you own the data.
            </span>
          </p>
          <p className="text-[36px] font-bold text-center">
            <a
              href={`https://github.com/TradingToolCrypto/MT5-TradingToolCrypto/archive/refs/heads/master.zip`}
              target="_blank"
              className="w-8"
            >
              <button
                className=" mt-12 md:flex flex-col hidden bg-primary-default rounded-[40px] w-[242px] md:w-[196px] h-[48px] items-center justify-center"

              >
                <p className="font-[500] text-[16px]">Download .zip</p>
              </button>
            </a>
          </p>
          <p className="text-[36px] font-bold text-center">
            <a
              href={`https://github.com/TradingToolCrypto/TradingTool-Wiki/wiki`}
              target="_blank"
              className="w-8"
            >
              <button
                className=" mt-12 md:flex flex-col hidden bg-secondary-default rounded-[40px] w-[242px] md:w-[196px] h-[48px] items-center justify-center"

              >
                <p className="font-[500] text-[16px]">Docs</p>
              </button>
            </a>
          </p>
        </div>
      </div>

      {/** Sell it  */}
      <div className="flex justify-center w-full xl:w-[1280px] relative mb-[171px] bg-gray-dark-3">
        <Image
          src="/last/tl.png"
          className="hidden xl:block w-[246px] h-[208px] absolute left-0 top-0"
          width={246}
          height={208}
          alt="addInfoToImage"
        />
        <Image
          src="/last/br.png"
          className="hidden xl:block w-[250px] h-[194px] absolute right-0 bottom-0"
          width={250}
          height={194}
          alt="addInfoToImage"
        />
        <Image
          src="/last/tr.png"
          className="hidden xl:block w-[197px] h-[129px] absolute right-0 top-0"
          width={197}
          height={129}
          alt="addInfoToImage"
        />
        <Image
          src="/last/bl.png"
          className="hidden xl:block w-[167px] h-[80px] absolute left-0 bottom-0"
          width={167}
          height={80}
          alt="addInfoToImage"
        />
        <Image
          src="/last/tl-m.png"
          className="xl:hidden w-[286px] h-[123px] absolute left-0 top-0"
          width={286}
          height={123}
          alt="addInfoToImage"
        />
        <Image
          src="/last/br-m.png"
          className="xl:hidden w-[210px] h-[193px] absolute right-0 bottom-0"
          width={210}
          height={193}
          alt="addInfoToImage"
        />
        <div className="flex flex-col w-full md:w-[550px] justify-center items-center xl:w-full h-[750px] md:h-[460px] pb-5">
          <p className="text-[36px] font-bold text-center p-20">
            <ul>
              <li>
                {' '}
                Activate{' '}
                <span className="font-normal font-Permanent text-secondary-default">
                <span className={permanent.className}> Pro </span>
                </span>{' '}
                or{' '}
                <span className="font-normal font-Permanent text-primary-default">
                <span className={permanent.className}> Elite </span>
                </span>{' '}
              </li>
              <li className="text-[26px]">Download historical data</li>
              <li className="text-[26px]">Enter api keys to begin trading</li>
            </ul>
          </p>
          <p className="text-[36px] font-bold text-center p-2">
            <ul>
              <li>
                Go{' '}
                <span className="font-normal font-Permanent text-secondary-default">
                <span className={permanent.className}> Elite </span>
                </span>{' '}
                and{' '}
                <span className="font-normal font-Permanent text-primary-default">
                <span className={permanent.className}> Unlock </span>
                </span>{' '}
              </li>
              <li className="text-[26px]">Proprietary Algos,</li>
              <li className="text-[26px]">Alpha Group, </li>
              <li className="text-[26px]">and support. </li>
            </ul>
          </p>
        </div>
      </div>

      {/** Footer  */}

      <div className="flex justify-center w-full  pt-6 pb-5 h-[607px] sm:h-[372px]">
        <div className="flex justify-between w-[90%] xl:w-[1280px] relative">
          <Image
            src="/footer/tr.svg"
            className="w-[102px] h-[95px] absolute right-0 top-0 z-10"
            width={102}
            height={95}
            alt="addInfoToImage"
          />
          <Image
            src="/footer/bl.svg"
            className="w-[122px] h-[247px] absolute left-0 bottom-0 z-10"
            width={122}
            height={247}
            alt="addInfoToImage"
          />
          <Image
            src="/footer/br.svg"
            className="hidden md:block w-[345px] h-[162px] absolute right-0 bottom-0 z-10"
            width={345}
            height={162}
            alt="addInfoToImage"
          />
          <div className="flex flex-col w-full md:w-[576px] justify-between z-20">
            <div>
              <Image
                src="/Head.png"
                className="w-[200px] h-[34px] mb-[37px] sm:mb-[45px]"
                width={200}
                height={34}
                alt="addInfoToImage"
              />
              <div className="sm:hidden block z-20 mb-[55px] sm:mb-0">

              </div>
              <div className="flex flex-wrap w-[300px] sm:w-[411px] justify-between gap-x-[140px] gap-y-6">
                <p className="text-[15px] font-bold w-[140px]">
                  <a
                    href="https://youtube.com/@RealTradingTool"
                    target="_blank"
                    className="mt-8 sm:mt-0 text-[15px] font-bold w-[140px]"
                  >
                    Youtube
                  </a>
                </p>
                <a
                  href="https://github.com/TradingToolCrypto/"
                  target="_blank"
                  className="text-[15px] font-bold w-[131px]"
                >
                  Github
                </a>

                <button

                  className="flex w-[191px] h-[48px] items-center justify-center bg-primary-default rounded-[40px] w-[242px] md:w-[196px] h-[48px]"

                >
                  <a
                    href="https://github.com/TradingToolCrypto/TradingTool-Wiki/wiki"
                    target="_blank"
                    className="text-[15px] font-bold w-[131px]"
                  >
                    See documentation
                  </a>
                </button>
              </div>
            </div>
            <p className="text-[16px] font-normal">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className=" hidden sm:block z-20">
            <div className="flex gap-6 items-center">
              <a href={`https://x.com/RealTradingTool`} target="_blank" className="w-6">
                <Image src="/twitter.svg" alt="X" className="w-9 md:w-[54px]"
                  width={54}
                  height={54}


                />
              </a>
              <a
                href={`https://t.me/TradingToolCrypto`}
                target="_blank"
                className="w-8"
              >
                <Image
                  src="/telegram-white-icon.svg"
                  alt="telegram"
                  className="w-9 md:w-[54px]"
                  width={54}
                  height={54}

                />
              </a>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
