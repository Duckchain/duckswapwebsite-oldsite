export const Buy = () => {

    return (
        <>
            <div className="flex flex-row items-center h-full relative w-full justify-between overflow mb-40 bg-[#f0b42c]">
                <img src="/steps-left.svg" alt="steps" draggable={false} className="absolute left-0 -top-7  h-[120px]" />
                <img src="/steps-right.svg" alt="steps" draggable={false} className="absolute right-0 -bottom-16 h-[120px] overflow-hidden" />
                <section id="party">
                    <div className="flex flex-col justify-center items-center py-5 w-full">
                        {/* <div className=" md:w-fit"> */}
                            <div className="text-center">
                                <img src="/omlet-min.png" alt="Egg" draggable={false} className="img-fluid mb-4 z-[999]" />
                            </div>
                            <h2 className="text-center mb-4 font-freckle">
                                How to BUY?
                            </h2>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center gap-4 w-full z-[999]">
                                    <div className="text-center steps px-40">
                                        <h5>GET A WALLET</h5>
                                        <p>Install MetaMask, Trust Wallet, or any other suitable crypto wallet from the App Store or Google Play. Desktop users can install the Chrome extension from MetaMask.io.</p>
                                        <h5>SEND BSC TO WALLET</h5>
                                        <p>To buy $DUCK BSC, you'll need BSC in your wallet to swap. Buy BSC directly in MetaMask, transfer from another wallet, or buy on an exchange and withdraw it to your wallet. Use the BSC-20 network.</p>
                                        <h5>CONNECT TO PANCAKESWAP</h5>
                                        <p>You can connect to Pancakeswap directly above. We've embedded Pancakeswap on duckbsc.vip to save you a couple of steps and take you straight to the correct pair to buy $DUCK BSC. If using your own browser, make sure it's the official PancakeSwap site, select token, and paste the official $DUCK BSC token contract address: 
                                            {/* <strong>0x20364F78385eC4F46F33ee7795330Dd815a87B1c</strong> */}
                                        </p>
                                        <h5>SWAP BSC FOR $DUCK BSC</h5>
                                        <p>Once you have BSC in your wallet, swap your desired amount for $DUCK BSC. Make sure you have enough BSC left over to cover gas fees. Review the transaction details and confirm. You're now part of the ducking party</p>
                                        <h5>HODL AND JOIN THE POND</h5>
                                        <p>Follow us on twitter, join discord and quack with us! We are ducking over!</p>
                                    </div>
                                    <a href="#" target="_blank" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </section>
            </div>
        </>
    )
}