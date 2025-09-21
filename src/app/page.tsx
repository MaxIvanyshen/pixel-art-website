import Header from '@/components/Header';
import { Button } from '@/components/retroui/Button';
import PixelGuy from '@/components/PixelGuy';

export default function Home() {
    return (
        <div style={{ backgroundImage: 'url("/hero_section_art.png")', backgroundPosition: 'center 50%', backgroundSize: 'cover', minHeight: '100vh' }}>
            <Header activePage='home' />
            <div className='flex flex-col items-center justify-center text-center mt-160'>
                <a href='/practice'><Button className='bg-yellow-300' size={'xxl'}>TRY IT YOURSELF</Button></a>
                <PixelGuy
                    minHeight={25}
                    maxHeight={40}
                    minWidth={15}
                    maxWidth={25}
                    interval={25000}
                />
            </div>
        </div >
    );
}
