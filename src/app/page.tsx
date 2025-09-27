import Header from '@/components/Header';
import { Button } from '@/components/retroui/Button';

export default function Home() {
    return (
        <>
            <Header activePage='home' />
            <div
                style={{
                    backgroundImage: `url('/hero_section_art.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="flex flex-col min-h-screen text-white"
            >
                <div className='flex flex-col items-center justify-center text-center md:mt-120 mt-100 flex-grow px-4'>
                    <a href='/practice'><Button className='bg-yellow-300' size={'xxl'}>TRY PIXEL ART</Button></a>
                </div>
            </div >
        </>
    );
}
