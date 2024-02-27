import { ReactNode } from 'react';
import MainHeader from '@/components/main-header/main-header';
import './globals.scss';


export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <MainHeader/>
        <div style={{padding: '20px'}}>
            {children}
        </div>
        </body>
        </html>
    );
}