import Header from '@/components/Header';
import { Button } from '@/components/retroui/Button';

export default function Home() {
    return (
        <div style={{ backgroundImage: 'url("/hero_section_art.png")', backgroundPosition: 'center 50%', backgroundSize: 'cover', minHeight: '100vh' }}>
            <Header activePage='home' />
            <div className='flex flex-col items-center justify-center text-center md:mt-150 mt-120 flex-grow px-4'>
                <a href='/practice'><Button className='bg-yellow-300' size={'xxl'}>TRY IT YOURSELF</Button></a>
            </div>
        </div >
    );
}
