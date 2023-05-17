import Image from 'next/image';
import { Inter, Playfair_Display, Heebo } from 'next/font/google';
import LocalFont from 'next/font/local';
import styles from '@/styles/Home.module.scss';
import Time from '@/components/Time';
import Subscribe from '@/components/Home/Subscribe';
import Button from '@/components/Button';
import Link from 'next/link';
import H3 from '@/components/H3';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/components/Icons';
import Status from '@/components/Home/Status';
import Input from '@/components/Input';
import Blog from '@/components/Home/Blog';

const playfair_display = Playfair_Display({
	subsets: ['latin'],
	weight: '700',
});
const avenir = LocalFont({
	src: '../fonts/Avenir.otf',
});

export default function Home() {
	const testData = {
		id: 1,
		title: "Back to Fiction: What I'm Reading This Summer",
		subtitle:
			'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
		postedOn: new Date(),
		readingTime: 2,
		thumbnail: '/assets/featured_post.jpg',
		views: 100,
		heart: 5,
		content: 'Hello World',
	};
	return (
		<main className={styles.container}>
			<div className={styles.section1}>
				{/* Featured Post */}
				<div className={styles.featuredPostContainer}>
					<h3 style={avenir.style} className={styles.headText}>
						FEATURED POST
					</h3>
					<Image
						className={styles.thumbnail}
						alt='book in hand'
						width={1280}
						height={720}
						src={testData.thumbnail}
					/>
					<div className='p-5 space-y-3'>
						<Time
							readingTime={testData.readingTime}
							postedOn={testData.postedOn}
						/>
						<h3 className='text-3xl max-md:2xl font-bold'>
							{testData.title}
						</h3>
						<h4 className='text-lg max-md:text-base'>
							{testData.subtitle}
						</h4>
					</div>
				</div>
			</div>
			<Subscribe />
			<div className='flex max-md:flex-col my-5'>
				<section className='max-md:border-b md:border-r border-black flex-1'>
					<div className='mx-auto max-w-xl flex flex-col gap-y-10 py-10 items-center'>
						<H3>TRAIN OF THOUGHT</H3>
						<div className='space-y-10'>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
							<Blog
								id='1'
								postedOn={new Date()}
								readingTime={3}
								subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores atque ex explicabo similique dolore ab voluptatibus nobis nulla cumque.'
								thumbnail='/posts/pexels-jay-pizzle-3752194.jpg'
								title='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
							/>
						</div>
						<Link href='/blog'>
							<Button>More Posts</Button>
						</Link>
					</div>
				</section>
				<section className='flex-1'>
					<div className='mx-auto px-5 max-w-md flex flex-col max-md:items-center gap-12 py-12'>
						<H3>ABOUT ME</H3>
						<Image
							src='/assets/Myself.jpg'
							height={500}
							width={800}
							alt='rama krishnan'
							className='mx-auto outline outline-1 w-full aspect-[3/2] object-cover'
						/>
						<p className='leading-7 tracking-wide max-md:text-center'>
							Hey There! I&apos;m Rama Krishnan V, a Fasinated Teenage
							Full Stack Web Developer and a Tech Enthusiast from South
							India. In my pastime, I write some articles about
							technologies like React, Typescript, svelte and many
							more...
						</p>
						<Link
							className='hover:text-[var(--color-accent)]'
							href='/about'
						>{`Read More >`}</Link>
						<hr className='border-black' />
						<H3>FOLLOW ME</H3>
						<div className='border-y border-black py-5 w-full justify-center flex gap-x-10'>
							<Link href='https://linkedin.com/in/marvelxcodes'>
								<LinkedInIcon className='h-6 w-6 hover:text-blue-700' />
							</Link>
							<Link href='https://facebook.com/marvelxcodes'>
								<FacebookIcon className='h-6 w-6 hover:text-blue-800' />
							</Link>
							<Link href='https://instagram.com/marvelxcodes'>
								<InstagramIcon className='h-6 w-6 hover:text-pink-600' />
							</Link>
							<Link href='https://twitter.com/marvelxcodes'>
								<TwitterIcon className='h-6 w-6 hover:text-blue-400' />
							</Link>
						</div>
						<H3>SUBSCRIBE</H3>
						<div className='flex gap-x-3'>
							<section className='flex flex-col gap-y-3 flex-1'>
								<Status>1</Status>
								<Status>3</Status>
								<Status>5</Status>
							</section>
							<section className='flex flex-col gap-y-3 flex-1'>
								<Status>2</Status>
								<Status>4</Status>
								<Status>6</Status>
							</section>
						</div>
						<form className='flex flex-col items-center w-full'>
							<div className='flex flex-col items-start mb-10 w-full'>
								<label className='flex flex-col text-lg w-full'>
									Enter you email *
									<Input className='w-full border-x border-y focus:border-x-0 focus:border-t-0' />
								</label>
							</div>
							<Button type='submit'>Subscribe</Button>
						</form>
						<hr className='border-black' />
						<H3>MY PICK OF THE MONTH</H3>
						<Image
							src='/assets/PickOfTheMonth.jpg'
							height={600}
							width={350}
							alt='javascript for impatient programmers book'
							className='outline outline-black outline-1 h-80 w-64 mx-auto'
						/>
						<p className='leading-7 tracking-wide max-md:text-center'>
							This book makes JavaScript less challenging to learn for
							newcomers, by offering a modern view that is as consistent
							as possible.Highlights: Get started quickly, by initially
							focusing on modern features. Covers all essential features
							of JavaScript, up to and including ES2019. Optional
							advanced sections let you dig deeper.No prior knowledge of
							JavaScript is required, but you should know how to program.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
