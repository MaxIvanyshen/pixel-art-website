'use client'
import Header from '@/components/Header'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <Header activePage="about" />
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(44,44,44,0.68), rgba(44,44,44,0.68)), url('/hero_section_art.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="flex flex-col min-h-screen text-white"
            >
                <div className="flex flex-col items-center max-h-full justify-center flex-grow px-4 py-8">
                    {/* First Row */}
                    <div className="flex flex-col w-full max-w-5xl mx-auto mt-4 gap-4 md:flex-row md:mt-[-2] md:items-stretch">
                        <div className="flex items-center justify-center w-full bg-[rgb(44,44,44)] md:w-2/5">
                            <Image
                                src="/me.png"
                                className="p-6 object-contain md:max-h-full"
                                alt="Profile Picture"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="w-full bg-[rgb(44,44,44)] p-5 md:w-3/5 md:p-6">
                            <h1 className="text-xl font-mono text-center mb-3 md:text-2xl md:mb-4">About Me And This Website</h1>
                            <div className="text-lg text-justify leading-relaxed md:text-xl">
                                <p>
                                    Hi! I&apos;m Max Ivanyshen, a Software Engineering student at VNTU (Vinnytsia
                                    National Technical University).
                                </p>
                                <p className="mt-3 md:mt-4">
                                    Welcome to my pixel art website, created as part of my computer graphics
                                    coursework!
                                </p>
                                <p className="mt-3 md:mt-4">
                                    I&apos;m captivated by the aesthetic appeal of pixel art—those tiny, vibrant
                                    squares that come together to form charming, retro visuals. There&apos;s
                                    something special about the simplicity and creativity of crafting
                                    pixel-perfect designs, inspired by classic 8-bit games and modern indie
                                    art.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex flex-col w-full max-w-5xl mx-auto mt-4 gap-4 md:flex-row md:mt-3 md:items-stretch mb-10">
                        <div className="w-full bg-[rgb(44,44,44)] p-5 md:w-1/2 md:p-6">
                            <h1 className="text-xl font-mono text-center mb-3 md:text-2xl md:mb-4">Technologies</h1>
                            <div className="text-lg text-justify leading-relaxed md:text-xl">
                                This website is built using the following technologies:
                                <ul className="list-disc list-inside mt-2">
                                    <li>Next.js for client-side and server-side rendering and routing</li>
                                    <li>Tailwind CSS for utility-first styling</li>
                                    <li>React for building interactive user interfaces</li>
                                    <li>Vercel for deployment and hosting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full bg-[rgb(44,44,44)] p-5 md:w-1/2 md:p-6">
                            <h1 className="text-xl font-mono text-center mb-3 md:text-2xl mb-4">Connect With Me</h1>
                            <div className="text-lg leading-relaxed md:text-3xl">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <FaGithub className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                                    <a
                                        href="https://github.com/MaxIvanyshen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        github.com/MaxIvanyshen
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                                    <a
                                        href="https://linkedin.com/in/maxivanyshen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        linkedin.com/in/maxivanyshen
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                                    <a
                                        href="mailto:maxivanyshen@gmail.com"
                                        className="text-blue-400 hover:underline"
                                    >
                                        maxivanyshen@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
