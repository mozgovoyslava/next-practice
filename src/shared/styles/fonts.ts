import localFont from 'next/font/local';

export const nunito = localFont({
    src: [
        { path: '../assets/fonts/NunitoSans-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../assets/fonts/NunitoSans-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../assets/fonts/NunitoSans-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../assets/fonts/NunitoSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    ],
    variable: '--font-nunito',
    display: 'swap',
});

export const htmlFontVariablesClassName = [
    nunito.variable,
    // otherFont.variable,
].join(' ');
