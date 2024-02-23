import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.scss'
import MainHeaderBackground from '@/components/main-header/main-header-background';

export default function MainHeader() {

    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link
                href='/'
                className={classes.logo}
            >
                <Image
                    src={logoImg}
                    width={120}
                    height={120}
                    priority={true}
                    alt='A plate with food on it'/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>

}