import { useEffect, useRef, useState } from "react"

export const Navbar = () => {
    const [play, setPlay] = useState(false);
    const music = useRef<HTMLAudioElement>({} as HTMLAudioElement);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 42) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div id="navbar" className={`flex flex-row sticky-top items-center h-[66.39px] w-full justify-between md:px-20 md:bg-[#f0b42c] ${isScrolled ? 'scrolled' : ''}`}>
                <div className="lg:col-2 md:col-1 flex justify-center xl:justify-start bg-[#723a05] md:bg-transparent p-[10px_25px_25px_12px] md:p-0 rounded-[0_0_100%_0_!important]">
                    {!play ? <span onClick={() => {
                        setPlay(!play)
                        music.current.play()
                    }} id="music-play" className="items-center cursor-pointer flex flex-row justify-between">
                        <span className="icon icon-muted tada inline-block text-[#feb832] md:text-[#723a05] text-[2.1rem]" />
                        <span className="ml-3 mt-1 sound-label hidden md:inline">Play Duck Music</span>
                    </span> :
                        <span onClick={() => {
                            setPlay(!play)
                            music.current.pause()
                        }} id="music-pause" className="flex flex-row justify-between items-center cursor-pointer">
                            <span className="icon icon-sound-speaker tada inline-block text-[#feb832] md:text-[#723a05] text-[2.1rem]" />
                            <span className="ml-3 mt-1 sound-label hidden sm:inline">Pause Duck Music</span>
                        </span>}
                    <audio ref={music} loop>
                        <source src="/audio/music-duck-fast.mp3" type="audio/mp3" />
                    </audio>
                </div>


                <div className="md:flex flex-row items-center justify-between hidden gap-6">
                    <a className="nav-link md:px-2" href="#about">About</a>
                    <a className="nav-link md:px-2" href="#party">How to BUY</a>
                    <a className="nav-link md:px-2" href="#duckonomics">Duckonomics</a>
                    <a className="nav-link md:px-2" href="#duckmap">Duckmap</a>
                    <a className="nav-link md:px-2" href="#bridge">Bridge</a>
                    <a className="nav-link md:px-2" href="https://etherscan.io/token/0x20364f78385ec4f46f33ee7795330dd815a87b1c" target="_blank">Contract</a>
                </div>

                <ul className="social-icons flex flex-row justify-between items-center mr-3 md:mr-0">
                    <li>
                        <a href="https://t.me/DuckBSc_c" target="_blank">
                            <span className="icon icon-telegram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/duckbsc" target="_blank">
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
        </>
    )
}