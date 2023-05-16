import LocalFont from 'next/font/local';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const avenir = LocalFont({
	src: '../fonts/Avenir.otf',
});

const H3 = ({
	children,
	className,
	...attributes
}: DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>) => {
	return (
		<h3
			style={avenir.style}
			className={`tracking-[0.5rem] font-light text-2xl ${className}`}
			{...attributes}
		>
			{children}
		</h3>
	);
};

export default H3;
