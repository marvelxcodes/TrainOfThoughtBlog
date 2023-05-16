import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface TimePropsType
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	readingTime: number;
	postedOn: Date;
}

const Time = ({ readingTime, postedOn, ...props }: TimePropsType) => {
	const date = postedOn.toString().slice(4, 10);
	return <p className='text-sm '>{`${date} • ${readingTime} min`}</p>;
};

export default Time;
