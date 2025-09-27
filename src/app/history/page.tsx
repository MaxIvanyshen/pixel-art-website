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

/* ---------- 3.  Golden Age – BIGGER ---------- */
const GoldenAgeSlide = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 px-4 ml-5 pt-4">
        {/* row 1 */}
        <div className="col-span-12 md:col-span-7 text-left space-y-3">
            <h2 className="text-4xl md:text-5xl mb-3">Golden Era (1990s)</h2>

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

        <div className="col-span-12 md:col-span-4 flex items-center justify-center">
            <img
                src="/street_fighter.jpeg"
                alt="Street Fighter"
                className="w-auto md:mt-15 max-h-[25vh] object-contain"
            />
        </div>

        {/* row 2 – bottom-cropped King's Quest (bigger crop box) */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center mr-10">
            <div className="w-full h-36 md:h-40 overflow-hidden">
                <img
                    src="/king_quest.jpeg"
                    alt="King's Quest"
                    className="w-full h-[15vh] object-cover object-[center_bottom]"
                />
            </div>
        </div>

        <div className="col-span-12 md:mt-6 md:col-span-7 md:mb-10 text-left space-y-3">
            <p className="text-yellow-400 text-xl">Professional Adoption</p>
            <p className="text-lg md:text-xl md:w-[70%]">
                Companies like LucasArts (<i>Maniac Mansion</i>, <i>Zak McKracken</i>)
                and Sierra (<i>King's Quest</i>) hired professional artists, legitimizing
                pixel art in commercial game development.
            </p>
        </div>
    </div>
);

const IndieRenaissanceSlide = () => (
    <div className="px-4 py-4">
        <h2 className="text-3xl md:text-5xl text-left">Indie Renaissance (2000s-2010s)</h2>
    </div>
);

const ContemporaryArtSlide = () => (
    <div className="px-4 py-4">
        <h2 className="text-3xl md:text-5xl text-left">Contemporary Pixel Art (2020s)</h2>
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
