import { Playfair_Display } from 'next/font/google';
import { ArrowUpIcon } from './Icons';
import { useRef } from 'react';
import Input from './Input';
import Button from './Button';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: '700',
});

const Contact = () => {
	const firstNameInputRef = useRef<HTMLInputElement>(null);
	const lastNameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
	return (
		<div
			id='contact'
			className='flex flex-col border-t border-black items-center my-6 mx-4'
		>
			<ArrowUpIcon
				className=' h-20 w-20 my-6 cursor-pointer'
				onClick={() => window.scrollTo(0, 0)}
			/>
			<form className='max-w-7xl mx-auto space-y-8'>
				<h3 className='text-4xl text-center' style={playfair_display.style}>
					Drop Me a Line, Let Me Know What You Think
				</h3>
				<div className='flex gap-x-8 max-md:flex-col max-md:gap-y-8'>
					<label className='flex flex-col flex-1'>
						First Name
						<Input ref={firstNameInputRef} type='text' />
					</label>
					<label className='flex flex-col flex-1'>
						Last Name
						<Input ref={lastNameInputRef} type='text' />
					</label>
				</div>
				<label className='flex flex-col'>
					Email *
					<Input ref={emailInputRef} type='email' />
				</label>
				<label className='flex flex-col'>
					Message...
					<textarea
						className='border-0 border-b py-2 focus:border-b-2
                      px-2 focus:border-purple-600
                      border-black border-solid resize-none'
						ref={messageTextAreaRef}
						name='Message'
					></textarea>
				</label>
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default Contact;
