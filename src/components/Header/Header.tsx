import styles from './Header.module.scss';
import NavItem from './NavItem';
import { Playfair_Display } from 'next/font/google';
import LocalFont from 'next/font/local';

import {
	BarsIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/components/Icons';
import { useState } from 'react';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: '700',
});
const avenir = LocalFont({
	src: '../../fonts/Avenir.otf',
});

export const Header = () => {
	const [navbarIsOpen, setNavbarIsOpen] = useState(false);
	return (
		<header className={styles.Header}>
			<h2 style={avenir.style}>
				EVERTHING IS PERSONAL. INCLUDING THIS BLOG.
			</h2>
			<h1 style={playfair_display.style}>Train of Thought</h1>
			<nav
				onClick={() => setNavbarIsOpen(false)}
				className={navbarIsOpen ? styles.Navbar : styles.NavbarHidden}
			>
				<NavItem href='/'>Home</NavItem>
				<NavItem href='/about'>About</NavItem>
				<NavItem href='/blog'>My Blog</NavItem>
				<NavItem href='#contact'>Contact</NavItem>
				<div className={styles.SocialMediaIcons}>
					<FacebookIcon />
					<TwitterIcon />
					<InstagramIcon />
					<LinkedInIcon />
				</div>
			</nav>
			<BarsIcon
				className='h-8 w-8 z-50 fixed right-5 top-5 md:hidden'
				onClick={() => setNavbarIsOpen((state) => !state)}
			/>
		</header>
	);
};

export default Header;
