import { star } from '@/public/icons';
import Image from 'next/image';
import React from 'react';

type Props = {
	imgUrl: string;
	customerName: string;
	rating: number;
	feedback: string;
};

const ReviewCard = ({
	customerName,
	feedback,
	imgUrl,
	rating,
}: Props) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<Image
				className='rounded-full object-cover'
				src={imgUrl}
				alt={'customer'}
				width={120}
				height={120}
			/>
			<p className='mt-6 max-w-sm text-center info-text'>
				{feedback}
			</p>
			<div className='mt-3 flex justify-center items-center gap-2.5'>
				<Image
					className='object-contain m-0'
					src={star}
					alt='star'
					width={24}
					height={24}
				/>
				<p className='text-xl font-montserrat text-slate-gray'>
					({rating})
				</p>
			</div>
			<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
