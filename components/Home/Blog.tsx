import Image from 'next/image';
import Time from '../Time';
import Link from 'next/link';

export type BlogPropsType = {
	id: string;
	title: string;
	subtitle: string;
	thumbnail: string;
	postedOn: Date;
	readingTime: number;
};

const Blog = ({
	id,
	title,
	subtitle,
	postedOn,
	readingTime,
	thumbnail,
}: BlogPropsType) => {
	return (
		<Link
			href={`/blog/${id}`}
			className='outline-1 outline flex max-lg:flex-col md:mr-5 max-lg:max-w-sm hover:text-[var(--color-accent)] transition-colors'
		>
			<div className='lg:w-52'>
				<Image
					className='h-full w-full object-cover'
					src={thumbnail}
					height={400}
					width={300}
					alt='thumbnail'
				/>
			</div>
			<div className='p-5 flex-1 space-y-3'>
				<Time postedOn={postedOn} readingTime={readingTime} />
				<h3 className='text-xl font-semibold'>{title}</h3>
				<p className='text-sm'>{subtitle}</p>
			</div>
		</Link>
	);
};

export default Blog;
