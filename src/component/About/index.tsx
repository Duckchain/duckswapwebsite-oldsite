// import { useEffect, useRef, useState } from "react"

export const About = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:h-screen w-full justify-center md:justify-between md:px-32 bg-[#f0b42c]" id="about">

                <div className="order-2 lg:order-1 mt-8 md:mt-0">
                    {/* <div className="md:gif-holder"> */}
                    <div className="mt-4 md:mt-0 text-center order-2 md:order-1">
                        <img src="/nest-coin.gif" alt="" className="md:w-[455px] w-[400px] h-[400px] md:h-[455px] object-cover" />
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center order-1 lg:order-2">
                    <div className="text-center lg:text-left flex flex-col items-center justify-center md:justify-start md:items-start gap-5">
                        <p className="text-big">
                            About
                        </p>
                        <div className="flex flex-col justify-start">
                            <p className="font-freckle text-4xl leading-10">
                                📢 Introducing Duckcoin (Duck BSC) - The Ultimate Payment Meme Coin!
                            </p>
                            <p className="">Join the Duckies worldwide in embracing the people's cryptocurrency, Duckcoin! As a decentralized, open-source peer-to-peer digital currency, Duckcoin embodies the friendly, curious, and intelligent nature of Duckies, creating a vibrant DeFi community. <br /> <br />

                                Experience a world of entertainment and wealth by joining the Duckie's community today! Duckcoin offers incredible utilities that will leave you amazed:   <br />
                                🌟 Duckswap: Dive into the ultimate decentralized exchange (DEX) with staking, farming, and a cutting-edge Crosschain bridge. Say goodbye to high fees and security concerns—Duckswap leverages Layerzero and Axelar infrastructure for seamless and safe crosschain movement of assets. <br />

                                🌟 Lottery: Get your quackers ready for thrilling lotteries, offering you a chance to win amazing prizes and make your wallet soar.  <br />

                                🌟 Payments: Simplify your transactions with Duckcoin's payment system, allowing you to send and receive funds effortlessly.  <br />

                                🌟 Wallets and Games: Explore a range of secure wallets and engaging games designed to enhance your Duckcoin experience. 💥The NFT ticketing platform brings huge usecase for NFTs holders around the 🌎 world.<br /><br />

                                The Duckswap Bridge is live and waiting for you! <a href="https://duckcoin.xyz">https://duckcoin.xyz/</a>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-5 pb-4">
                            <h2 className="font-freckle w-[328px] md:w-[540px]">
                                New token in town. Fair presale, Fair tax. $Duck Memes rule.
                            </h2>
                            <p>
                                In Duck we Trust. Let's have fun and enjoy the party!
                            </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start py-3 mb-3">
                            <a href="#" className="btn btn-primary mr-2">Buy Now</a>
                            <a href="#" className="btn btn-primary">Chart</a>
                        </div>
                        {/* <ul className="mb-3">
                            <li>
                                <a href="" target="_blank" style={{ fontSize: '1rem' }} className="flex flex-row justify-between items-center gap-3">
                                    <span>Contract Renounced</span>
                                    <span className="icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                        <ul className="">
                            <li>
                                <a href="" target="_blank" style={{ fontSize: '1rem' }} className="flex flex-row justify-between items-center gap-3">
                                    Liquidity burnt
                                    <span className="icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    )
}