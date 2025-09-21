import "./globals.css";
// app/layout.tsx (App Router) or pages/_app.tsx (Pages Router)
import { Jersey_10 } from 'next/font/google'
import PixelGuy from '@/components/PixelGuy';

const jersey10 = Jersey_10({
    subsets: ['latin'],
    weight: '400', // Jersey 10 only has one weight
    variable: '--font-jersey10',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={jersey10.variable}>
            <body className={jersey10.className}>
                <PixelGuy
                    minHeight={25}
                    maxHeight={40}
                    minWidth={15}
                    maxWidth={25}
                    interval={25000}
                />
                {children}
            </body>
        </html>
    )
}

