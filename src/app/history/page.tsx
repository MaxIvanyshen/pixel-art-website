'use client';
import Header from '@/components/Header';
import { ReactNode, useState } from 'react';

const Clicker = (slides: ReactNode[], slideIdx: number, setSlideIdx: any) => {
    return (
        <div className='w-full flex flex-col justify-between items-center p-4'>
            <div className='text-white flex flex-row items-center justify-center'>
                <button onClick={() => { if (slideIdx > 0) setSlideIdx(slideIdx - 1); }}>
                    <img src='/pixel_arrow.png' className='h-10 transform scale-x-[-1]' />
                </button>
                <button onClick={() => { if (slideIdx < slides.length - 1) setSlideIdx(slideIdx + 1); }}>
                    <img src='/pixel_arrow.png' className='h-10' />
                </button>
            </div>
            {slideIdx + 1} / {slides.length}
        </div>
    )
}

interface PresentationProps {
    slides: React.ReactNode[];
    bg?: string;
}

const Presentation: React.FC<PresentationProps> = ({ slides, bg }) => {
    const [slideIdx, setSlideIdx] = useState(0);

    return (
        <div
            className={`text-white bg-[${bg}] w-full md:max-h-[70vh] flex flex-col justify-between overflow-hidden`}>
            <div className="flex-1 overflow-hidden">{slides[slideIdx]}</div>
            <div className="shrink-0">{Clicker(slides, slideIdx, setSlideIdx)}</div>
        </div>
    );
};

const EarlyOriginsSlide = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 px-4 ml-5 pt-4">
        <div className="col-span-12 md:col-span-7 text-left space-y-3">
            <h2 className="text-4xl md:text-5xl">Early Origins</h2>

            <p className="text-yellow-400 text-xl">Pre-Digital Roots</p>
            <p className="text-lg md:text-xl">
                Traditional crafts like cross-stitch, mosaics, and beadwork share striking
                similarities with pixel art, using small coloured units to create larger images.
            </p>

            <p className="text-yellow-400 text-xl mt-4">First Digital Example</p>
            <p className="text-lg md:text-xl">
                The earliest pixel art appeared in the 1970s with simple arcade games like
                <i> Pong</i> (1972) and <i>Space Invaders</i> (1978). These games used extremely
                limited colour palettes and resolution due to hardware constraints.
            </p>
        </div>

        <div className="col-span-12 md:mt-12 md:col-span-5 flex items-center justify-center">
            <img
                src="/mosaic.jpeg"
                alt="Mosaic"
                className="w-auto max-h-[28vh] mr-2 object-contain"
            />
        </div>

        <div className="col-span-12 md:mt-5 md:col-span-4 flex items-center justify-center md:order-none order-last md:mr-10">
            <img
                src="/mario.png"
                alt="Mario"
                className="max-h-[25vh] w-auto object-cover object-[center_bottom]"
            />
        </div>

        <div className="col-span-12 md:col-span-3 md:mt-12 text-left space-y-3 md:mb-10">
            <p className="text-yellow-400 text-xl">The 8-Bit Era</p>
            <p className="text-lg md:text-xl md:w-[220%]">
                Traditional crafts like cross-stitch, mosaics, and beadwork share striking
                similarities with pixel art, using small coloured units to create larger images.
            </p>
        </div>
    </div>
);


const GoldenAgeSlide = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 px-4 ml-5 pt-4">
        {/* --------  title (always full-width, left-aligned)  -------- */}
        <div className="col-span-12 text-left">
            <h2 className="text-4xl md:text-5xl mb-3">Golden Era (1990s)</h2>
        </div>

        {/* --------  row 1:  PIC left / TEXT right  -------- */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <img
                src="/street_fighter.jpeg"
                alt="Street Fighter"
                className="w-auto max-h-[25vh] object-contain"
            />
        </div>

        <div className="col-span-12 md:col-span-7 text-left space-y-3">
            <p className="text-yellow-400 text-xl">16-Bit Advancement</p>
            <p className="text-lg md:text-xl">
                The Super Nintendo and Sega Genesis introduced more colours and higher
                resolutions, allowing for more detailed sprites and backgrounds. Games like
                <i> Street Fighter II</i> (1991) pushed pixel art to new artistic heights.
            </p>

            <p className="text-yellow-400 text-xl mt-4">Demoscene Movement</p>
            <p className="text-lg md:text-xl">
                European artists formed the “demoscene,” creating elaborate pixel-art intros
                and demos for cracked games. This underground movement elevated pixel art
                to a respected art form.
            </p>
        </div>

        {/* --------  row 2:  TEXT left / PIC right  -------- */}
        <div className="col-span-12 md:col-span-5 text-left space-y-4 md:mt-5 md:mr-15">
            <p className="text-yellow-400 text-xl">Professional Adoption</p>
            <p className="text-lg md:text-xl md:w-[120%]">
                Companies like LucasArts (<i>Maniac Mansion</i>, <i>Zak McKracken</i>)
                and Sierra (<i>King's Quest</i>) hired professional artists, legitimizing
                pixel art in commercial game development.
            </p>
        </div>

        <div className="col-span-12 md:col-span-5 flex items-center justify-center md:ml-25 md:mt-10">
            <div className="w-full h-36 md:h-40 overflow-hidden">
                <img
                    src="/king_quest.jpeg"
                    alt="King's Quest"
                    className="w-full h-[15vh] object-cover object-[center_bottom]"
                />
            </div>
        </div>
    </div>
);


const IndieRenaissanceSlide = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 px-4 ml-5 pt-4">
        <div className="col-span-12 md:col-span-7 text-left space-y-3">
            <h2 className="text-4xl md:text-5xl">Indie Renaissance (2000s-2010s)</h2>

            <div className="md:mt-20">
                <p className="text-yellow-400 text-xl">Online Communities</p>
                <p className="text-lg md:text-xl w-[80%]">
                    Websites like Pixelation (2005) and Pixel Joint became hubs for pixel artists worldwide, fostering technique sharing and community growth.
                </p>
            </div>
        </div>

        <div className="col-span-12 md:mt-20 md:col-span-5 flex items-center justify-center">
            <img
                src="/shovel_night_vntu.jpeg"
                alt="Mosaic"
                className="w-auto max-h-[35vh] mr-2 md:mr-40 object-contain"
            />
        </div>

        <div className="col-span-12 md:col-span-4 md:mt-[-100px] flex items-center justify-center md:order-none order-last md:mr-10">
            <img
                src="/undertale.png"
                alt="Mario"
                className="max-h-[40vh] w-auto object-cover object-[center_bottom]"
            />
        </div>

        <div className="col-span-12 md:col-span-3 md:mt-5 text-left space-y-3">
            <p className="text-yellow-400 text-xl">Modern Tools</p>
            <p className="text-lg md:text-xl md:w-[220%]">
                Software like Aseprite and Piskel democratized pixel art creation, making it accessible to new generations of artists.
            </p>

            <p className="text-yellow-400 text-xl">Indie Game Revival</p>
            <p className="text-lg md:text-xl md:w-[220%]">
                Games like <i>Fez</i> (2012), <i>Shovel Knight</i> (2014), and <i>Undertale</i> (2015) brought pixel art back into mainstream gaming, proving its enduring appeal.
            </p>
        </div>
    </div>
);

const ContemporaryArtSlide = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 px-4 ml-5 pt-4">
        {/* --------  title (always full-width, left-aligned)  -------- */}
        <div className="col-span-12 text-left">
            <h2 className="text-4xl md:text-5xl mb-3">Contemporary Pixel Art (2020s)</h2>
        </div>

        {/* --------  row 1:  PIC left / TEXT right  -------- */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <img
                src="eboy.gif"
                alt="Street Fighter"
                className="w-auto max-h-[17vh] object-contain md:ml-[-100px]"
            />
        </div>

        <div className="col-span-12 md:col-span-7 text-left space-y-3 md:mt-5 md:ml-[-100px]">
            <p className="text-yellow-400 text-xl">Cultural Impact</p>
            <p className="text-lg md:text-xl w-[80%]">
                Pixel art has transcended gaming, appearing in advertising, fashion, and fine art. Artists like eBoy and Invader have brought pixel aesthetics to galleries and city streets worldwide.
            </p>
        </div>

        {/* --------  row 2:  TEXT left / PIC right  -------- */}
        <div className="col-span-12 md:col-span-5 text-left space-y-4 md:mt-5 md:ml-35">
            <p className="text-yellow-400 text-xl">NFT Controversy</p>
            <p className="text-lg md:text-xl md:w-[120%]">
                The rise of NFTs saw both adoption and backlash from pixel artists, highlighting ongoing debates about digital art ownership and environmental concerns.
            </p>
        </div>

        <div className="col-span-12 md:col-span-5 flex items-center justify-center position-relative md:ml-35 md:mt-5">
            <div className="w-full ml-20 md:ml-0 h-36 md:h-40 overflow-hidden">
                <img
                    src="/vntu_coin.png"
                    alt="King's Quest"
                    className="w-auto h-[15vh] md:h-[16vh]"
                />
            </div>
        </div>
        {/* --------  row 1:  PIC left / TEXT right  -------- */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center md:mr-10">
            <img
                src="/invader.jpeg"
                alt="Street Fighter"
                className="w-auto max-h-[25vh] object-contain"
            />
        </div>

        <div className="col-span-12 md:col-span-7 text-left space-y-3 md:mt-5 md:mr-10">
            <p className="text-yellow-400 text-xl">Continued Innovation</p>
            <p className="text-lg md:text-xl">
                Modern pixel artists push boundaries with techniques like "HD pixel art" (high-resolution pixel work) and isometric designs, while maintaining the medium's core aesthetic.
            </p>
        </div>
    </div>
);

export default function History() {
    return (
        <>
            <Header activePage='history' />
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(44,44,44,0.68)), url('/hero_section_art.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="flex flex-col min-h-screen text-white"
            >
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-5xl text-center mb-4 mt-15'>History of Pixel Art</h1>
                    <div className='w-full md:w-[70%] h-[40%] justify-center items-center'>
                        <Presentation bg='rgb(44,44,44)' slides={[
                            <EarlyOriginsSlide />,
                            <GoldenAgeSlide />,
                            <IndieRenaissanceSlide />,
                            <ContemporaryArtSlide />
                        ]} />
                    </div>
                </div >
            </div >
        </>
    );
}
