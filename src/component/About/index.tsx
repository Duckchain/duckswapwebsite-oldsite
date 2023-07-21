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