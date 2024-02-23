import './globals.scss';
import MainHeader from '@/components/main-header/main-header';

export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({children}) {
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