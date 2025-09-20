import Header from '@/components/Header';

export default function Home() {
    return (
        <div style={{ backgroundImage: 'url("/hero_section_art.png")', backgroundPosition: 'center 50%', backgroundSize: 'cover', minHeight: '100vh' }}>
            <Header activePage='home' />
        </div>
    );
}
