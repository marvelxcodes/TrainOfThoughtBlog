import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

const Input = ({
	className,
	...attributes
}: DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>) => {
	return (
		<input
			className={`border-0 border-b py-2 focus:border-b-2
         px-2 focus:border-[var(--color-accent)]
         border-black border-solid ${className}`}
			{...attributes}
		/>
	);
};

export default Input;
