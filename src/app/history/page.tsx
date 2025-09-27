import Header from '@/components/Header';

export default function History() {
    return (
        <>
            <Header activePage='history' />
            <div style={{
                backgroundImage: `linear-gradient(rgba(44,44,44,0.68)), url('/hero_section_art.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: '100vh'
            }}>
            </div >
        </>
    );
}
