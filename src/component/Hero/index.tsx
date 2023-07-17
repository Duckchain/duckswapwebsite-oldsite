export const Hero = () => {
    return (
        <>
            <div className="w-full h-[300vh] pt-40 pb-32 flex flex-col md:flex-row justify-center md:justify-between items-center px-32 main-section overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="text-[48px] font-freckle w-[328px] md:w-[508px] font-[500] leading-[57.6px] text-center md:text-left text-[rgb(114,58,5)]">Welcome to the ducking party, you motherquacker!</h1>
                    <p className="text-[26px] w-[328px] md:w-[508px] font-[400] leading-[39px] text-center md:text-left text-[rgb(114,58,5)]">
                        Are you tired of dog coins? Join the quack side with $DUCK and let's make MEMEs great again!
                    </p>

                    {/* <div className="flex items-center justify-center lg:justify-start py-3 mb-3">
                        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x20364f78385ec4f46f33ee7795330dd815a87b1c" target="_blank" className="btn btn-primary mr-2">Buy Now</a>
                        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xd7f2eadd511c51c60ad2566278ecc82fd8af50fd" target="_blank" className="btn btn-primary">Chart</a>
                    </div> */}
                </div>





                <div className="text-center">
                    <div className="image-holder">
                        <div className="main-img-holder">
                            <span className="main-img">
                                <img src="/main-img-min.png" alt="Main Image" className="max-w-full h-auto" />
                            </span>
                        </div>
                        <span className="coin-min flip">
                            <img src="/coin-min.png" alt="Coin" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}