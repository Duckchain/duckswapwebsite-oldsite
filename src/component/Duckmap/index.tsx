export const Duckmap = () => {
    return (
        <section id="duckmap">
            <div className="flex flex-col justify-center items-center lg:mt-5 py-5 overflow-hidden md:overflow-auto">
                <div className="flex md:flex-row flex-col justify-center md:justify-between items-start gap-10">
                    <div className="mt-4 md:mt-0 text-center order-2 md:order-1">
                        <img src="/duck-min.png" draggable={false} alt="Duck" className="img-fluid" />
                    </div>
                    <div className="md:col-7 flex items-center order-1 md:order-2">
                        <div className="light-box bg-third-light px-4 md:px-10 md:py-10 h-100">
                            <h2 className="mb-4 font-freckle">
                                $Duckmap
                            </h2>
                            <h4>Quack 1: Launch</h4>
                            <ul className="check-list text-big">
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Token DEX Launch</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Burn LP &amp; Renounce</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>CoinGecko, CMC</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Dextool listing</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>500+ Holders</li>
                                </div>
                            </ul>
                            <h4>Quack 2: Meme and HODL</h4>
                            <ul className="check-list text-big">
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Community Building</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Marketing &amp; Calls</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Quacking everywhere</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Trending </li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>2,000+ holders</li>
                                </div>
                            </ul>
                            <h4>Quack 3: Liquidity</h4>
                            <ul className="check-list text-big">
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>CEX listing</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Increasing LP</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Nesting ( Staking rewards )</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Multichain support</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>10,000+ holders</li>
                                </div>
                            </ul>
                            <h4>Quack 4: Products &amp; Takeover</h4>
                            <ul className="check-list text-big">
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Duck machine, Floppy duck</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>Duck merch</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>DuckGPT</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>BIG Quacking AI surprise</li>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <span className="icon icon-checkmark" />
                                    <li>50,000+ holders</li>
                                </div>
                            </ul>
                            <h2 className="font-freckle text-[2.5rem]">Duck Takeover</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}