// app/layout.tsx
import "./globals.css";
import { Jersey_10 } from "next/font/google";
import PixelGuy from "@/components/PixelGuy";
import { Metadata } from "next";

const jersey10 = Jersey_10({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-jersey10",
});

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico",
    },
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={jersey10.variable}>
            <body className={jersey10.className}>
                <PixelGuy
                    minHeight={25}
                    maxHeight={40}
                    minWidth={15}
                    maxWidth={25}
                    interval={
                        (+process.env.NEXT_PUBLIC_PIXEL_GUY_INTERVAL_SECONDS! || 25) * 1000
                    }
                />
                {children}
            </body>
        </html>
    );
}
