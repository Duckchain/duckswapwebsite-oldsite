export const Utilities = () => {
    return (
        <section id="utilities">
            <div className="md:flex md:flex-col items-center justify-center lg:mt-5 mb-5 py-5">
                <h2 className="text-center mb-5 font-freckle">
                    Utilities
                </h2>
                <div className="flex flex-col justify-center items-center gap-12">
                    <div className="mb-4 w-[328px] md:w-fit">
                        <ul className="check-list text-big" style={{ wordBreak: 'break-all' }}>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                Duckswap
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                Bridge
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                NFTs
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                               Lottery platform
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                E-commerce
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                Social Media Platform
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                And games
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <h3 className="text-center mt-3 font-freckle text-[1.75rem]">
                    It's ducking simple.
                </h3> */}
                {/* <div className="text-center mt-10">
                    <div className="text-center">
                        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x20364f78385ec4f46f33ee7795330dd815a87b1c" target="_blank" className="btn btn-primary">Buy Now</a>
                    </div>
                </div> */}
            </div>
        </section>
    )
}