import Image from 'next/image';
import { Inter, Playfair_Display, Heebo } from 'next/font/google';
import LocalFont from 'next/font/local';
import styles from '@/styles/Home.module.scss';
import Time from '@/components/Time';
import Subscribe from '@/components/Subscribe';
import Button from '@/components/Button';
import Link from 'next/link';
import H3 from '@/components/H3';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/components/Icons';

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
		comments: {
			length: 1,
		},
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
						width={720}
						height={1280}
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
				<section className='border-r border-black flex-1'>
					<div className='mx-auto max-w-xl'>
						<H3>TRAIN OF THOUGHT</H3>
						<Link href='/blog'>
							<Button>More Posts</Button>
						</Link>
					</div>
				</section>
				<section className='flex-1'>
					<div className='mx-auto max-w-md flex flex-col gap-6'>
						<H3>ABOUT ME</H3>
						<Image />
						<p className='leading-7 tracking-wide'>
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

						<hr className='' />
						<H3>FOLLOW ME</H3>

						<div className='border-y border-black py-5 justify-center flex gap-x-6'>
							<Link href='https://linkedin.com/in/marvelxcodes'>
								<LinkedInIcon className='h-6 w-6' />
							</Link>
							<Link href='https://facebook.com/marvelxcodes'>
								<FacebookIcon className='h-6 w-6' />
							</Link>
							<Link href='https://instagram.com/marvelxcodes'>
								<InstagramIcon className='h-6 w-6' />
							</Link>
							<Link href='https://twitter.com/marvelxcodes'>
								<TwitterIcon className='h-6 w-6' />
							</Link>
						</div>
						<H3>SUBSCRIBE</H3>
						<form>
							<label>
								Enter your email *
								<input type='text' />
							</label>
							<Button type='submit'>Subscribe</Button>
							<hr className='' />
							<H3>MY PICK OF THE MONTH</H3>
							<Image className='outline' />
							<p></p>
						</form>
					</div>
				</section>
			</div>
		</main>
	);
}
