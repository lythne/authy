import '@/styles/global.css';
import { workSans } from 'variableFonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
