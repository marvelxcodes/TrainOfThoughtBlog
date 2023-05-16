import type { NextPage } from 'next';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import LocalFont from 'next/font/local';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: '700',
});

const avenir = LocalFont({
	src: '../fonts/Avenir.otf',
});

const About: NextPage = () => {
	return (
		<div className='max-w-6xl mx-auto my-20 border-black border'>
			<div className='aspect-video w-full border-b border-black'>
				<Image
					height={720}
					width={1280}
					src='/assets/Myself.jpg'
					alt='rama krishnan v'
					priority
					className='object-cover h-full w-full'
				/>
			</div>
			<div className='p-10 space-y-10'>
				<h1 style={playfair_display.style} className='text-6xl font-bold'>
					Hey There! What&apos;s Up
				</h1>
				<p style={avenir.style} className='text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Asperiores, velit tempore! Impedit natus magnam blanditiis iure
					quae animi voluptatibus earum dignissimos aperiam quidem pariatur
					tempora labore voluptatum maiores, totam explicabo. Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Debitis voluptatibus
					magnam dolores quaerat nam in, aut voluptas eligendi doloribus
					deserunt nisi dolore totam accusamus labore saepe sequi! Nulla,
					quo deleniti?
				</p>
				<p style={avenir.style} className='text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
					exercitationem, nobis assumenda non modi, quod corporis ratione
					hic est nulla neque? Illum aspernatur ullam ipsum, est nostrum
					vitae amet iure. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ex, molestias! Cum eligendi tempora a
					consequuntur tempore voluptatem libero illum sequi iusto. Nisi a
					quidem aliquam. At, amet beatae. Earum, officiis.
				</p>
			</div>
		</div>
	);
};

export default About;
