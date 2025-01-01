import type { Metadata } from 'next';
import '@app/globals/globals.scss';
import { AeonikProBold, AeonikProMedium, AeonikProRegular } from './fonts/fonts';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: 'Gromov Portofolio',
  description: 'Generated by Gr4childo, Samohkin.2012@gmail.com'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={classNames(AeonikProMedium.variable, AeonikProBold.variable, AeonikProRegular.variable)}>
        {children}
      </body>
    </html>
  );
}
