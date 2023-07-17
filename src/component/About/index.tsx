// import { useEffect, useRef, useState } from "react"

export const About = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:h-screen w-full justify-center md:justify-between md:px-32 bg-[#f0b42c]">

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
                        <div className="flex flex-col justify-start items-start gap-5 pb-4">
                            <h2 className="font-freckle w-[328px] md:w-[540px]">
                                New token in town. Fair presale, Fair tax. $Duck Memes rule.
                            </h2>
                            <p>
                                In Duck we Trust. Let's have fun and enjoy the party!
                            </p>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center justify-content-lg-start py-3 mb-3">
                            <a href="https://app.uniswap.org/#/swap?outputCurrency=0x20364f78385ec4f46f33ee7795330dd815a87b1c" target="_blank" className="btn btn-primary mr-2">Buy Now</a>
                            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xd7f2eadd511c51c60ad2566278ecc82fd8af50fd" target="_blank" className="btn btn-primary">Chart</a>
                        </div> */}
                        <ul className="mb-3">
                            <li>
                                <a href="https://etherscan.io/tx/0xaa124aebed8ef13cb5588d50fcf5be010302f1bebf27981dc98fcff107da80f7" target="_blank" style={{ fontSize: '1rem' }} className="flex flex-row justify-between items-center gap-3">
                                    <span>Contract Renounced</span>
                                    <span className="icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                        <ul className="">
                            <li>
                                <a href="https://etherscan.io/tx/0xa93e871db091134f718002b87baf590352e64840363436d62d4abfab146b8f2a" target="_blank" style={{ fontSize: '1rem' }} className="flex flex-row justify-between items-center gap-3">
                                    Liquidity burnt
                                    <span className="icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}