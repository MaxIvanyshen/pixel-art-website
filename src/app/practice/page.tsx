import Header from '@/components/Header'
import PixelArtEditor from '@/components/PixelArtEditor'

export default function Practice() {
    return (
        <>
            <Header activePage="practice" />
            <div
                className="flex min-h-screen items-center justify-center bg-cover bg-center text-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(44,44,44,0.68), rgba(44,44,44,0.68)), url('/hero_section_art.png')",
                }}
            >
                <div className="bg-[rgb(44,44,44)] bg-opacity-80 p-6 max-w-[60%] w-full">
                    <PixelArtEditor columns={32} rows={32} initialPixelSize={20} />
                </div>
            </div>
        </>
    )
}

