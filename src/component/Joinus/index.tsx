export const JoinUs = () => {
    return (
        <section id="join-us" className="relative h-[30vh] md:h-[40vh] overflow-hidden">
            <img src="/steps-left.svg" alt="steps" draggable={false} className="absolute left-0 top-0 h-[120px]" />
            <img src="/steps-right.svg" alt="steps" draggable={false} className="absolute right-0 bottom-0 h-[120px] overflow-hidden" />
            <div className="flex flex-col justify-center items-center mb-5 py-5">

                <h2 className="mb-3 text-center font-freckle">
                    Join Us
                </h2>
                <ul className="social-icons flex flex-row justify-between items-center">
                    <li>
                        <a href="https://t.me/DuckBSc_c" target="_blank">
                            <span className="icon icon-telegram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/DuckBSC" target="_blank">
                            <span className="icon icon-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/duckbsc/" target="_blank">
                            <span className="icon icon-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/8zBaqvdrnG" target="_blank">
                            <span className="icon icon-discord" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}