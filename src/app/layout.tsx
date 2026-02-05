import { htmlFontVariablesClassName } from '@/shared/styles/fonts';
import '@/shared/styles/globals/globals.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={htmlFontVariablesClassName}>
            <body>{children}</body>
        </html>
    );
}
