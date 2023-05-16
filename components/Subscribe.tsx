import { Playfair_Display } from 'next/font/google';
import Input from './Input';
import Button from './Button';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: '700',
});

const Subscribe = () => {
	return (
		<div className='border-black border-y py-10 2xl:py-20'>
			<div className='max-w-7xl mx-auto flex max-md:flex-col items-center'>
				<h1
					style={playfair_display.style}
					className='flex-1 text-center max-md:mb-10 text-3xl lg:text-4xl'
				>
					Never Miss a New Post
				</h1>
				<div className='flex-1 flex justify-center items-center max-md:flex-col mx-10'>
					<div className='flex flex-col items-start max-md:mb-10 md:mr-10'>
						<label>Enter you email *</label>
						<Input className='w-64' />
					</div>
					<Button>Subscribe</Button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
