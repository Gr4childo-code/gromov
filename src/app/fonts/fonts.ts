import localFont from 'next/font/local';

export const AeonikProRegular = localFont({
  src: [
    {
      path: './static-fonts/AeonikPro-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--AeonikPro_regular'
});

export const AeonikProMedium = localFont({
  src: [
    {
      path: './static-fonts/AeonikPro-Medium.otf',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--AeonikPro_medium'
});

export const AeonikProBold = localFont({
  src: [
    {
      path: './static-fonts/AeonikPro-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--AeonikPro_bold'
});
