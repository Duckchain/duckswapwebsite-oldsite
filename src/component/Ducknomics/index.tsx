export const Ducknomics = () => {
    return (
        <section id="duckonomics">
            <div className="md:flex md:flex-col items-center justify-center lg:mt-5 mb-5 py-5">
                <h2 className="text-center mb-5 font-freckle">
                    Duckonomics
                </h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12">
                    <div className="mb-4">
                        <div className="holder-icon mb-5">
                            <span className="icon icon-piggy-bank" />
                            <div className="h-100 flex flex-col justify-center">
                                <span className="text-big">
                                    Taxes
                                </span>
                                <span className="num mb-0 ml-1">N0</span>
                            </div>
                        </div>
                        <div className="holder-icon mb-5">
                            <span className="icon icon-checklist" />
                            <div className="h-100 flex flex-col justify-center">
                                <span className="text-big">
                                    Duckshit
                                </span>
                                <span className="num mb-0 ml-1">N0</span>
                            </div>
                        </div>
                        <div className="holder-icon mb-5">
                            <span className="icon icon-thumbs-up" />
                            <div className="h-100 flex flex-col justify-center">
                                <span className="text-big">
                                    $Duck
                                </span>
                                <span className="num mb-0 ml-1">Yes</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 w-[328px] md:w-fit">
                        <h2 className="mb-4 font-freckle">
                            Supply - 88,000,000,000,000
                        </h2>
                        <ul className="check-list text-big" style={{ wordBreak: 'break-all' }}>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                91% of the tokens were sent to the liquidity pool
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                LP tokens were burnt
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <span className="icon icon-checkmark" />
                                Contract - 0x20364f78385ec4f46f33ee7795330dd815a87b1c
                            </li>
                        </ul>
                        <p className="w-[328px] mt-8 md:mt-0 md:w-[825px]">
                            9% of the supply is being held in 2 multi-sig wallets only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. If there is something left in the end of the year, they will be spent upon community votes.
                        </p>
                    </div>
                </div>
                <h3 className="text-center mt-3 font-freckle text-[1.75rem]">
                    It's ducking simple.
                </h3>
                <div className="text-center mt-10">
                    <div className="text-center">
                        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x20364f78385ec4f46f33ee7795330dd815a87b1c" target="_blank" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}