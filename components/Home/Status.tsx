import Image from 'next/image';

export type StatusPropsType = {
	children: string;
};

const Status = ({ children }: StatusPropsType) => {
	return (
		<div className='bg-black aspect-square h-full'>
			<Image
				className='w-full h-full object-cover cursor-pointer hover:opacity-60'
				src={`/status/${children}.jpg`}
				height={300}
				width={300}
				alt='city image'
			/>
		</div>
	);
};

export default Status;
