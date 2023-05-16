import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.scss';

export type NavItemPropsType = {
	children: ReactNode;
	href: string;
};

export const NavItem = ({ children, href }: NavItemPropsType) => {
	const { asPath } = useRouter();
	return (
		<Link
			href={href}
			className={`${styles.NavItem} ${
				asPath === href && styles.CurrentRoute
			}`}
		>
			{children}
		</Link>
	);
};

export default NavItem;
