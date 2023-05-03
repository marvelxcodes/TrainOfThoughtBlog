import React, { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export const Header = ({ children }: PropsWithChildren) => {
	return (
		<header className='w-screen px-[10vw] h-14 sticky top-0 left-0 backdrop-blur-md border-y-[1px] border-black flex justify-evenly'>
			{children}
		</header>
	);
};

export type NavItemPropsType = {
	children: ReactNode;
	href: string;
};

export const NavItem = ({ children, href }: NavItemPropsType) => {
	const { pathname } = useRouter();
	console.log(pathname);
	return (
		<Link
			href={href}
			className={`${
				pathname === href ? 'text-violet-600' : 'hover:text-violet-600'
			} transition-colors border-r first:border-x border-black text-sm flex items-center justify-center flex-1 font-light`}
		>
			{children}
		</Link>
	);
};

export default Header;
