import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = ({
	children,
	className,
	...attributes
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button
			className={`text-lg px-10 py-3 text-white bg-[var(--color-accent)]
                     hover:bg-black transition-colors ${className}`}
			{...attributes}
		>
			{children}
		</button>
	);
};

export default Button;
