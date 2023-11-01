import React from 'react';
import Button from './Button';
import Image from 'next/image';
import { shoe8 } from '@/public/images';

type Props = {};

const SuperQuality = (props: Props) => {
	return (
		<section
			id='about-us'
			className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
			<div className='flex flex-1 flex-col'>
				<h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
					We Provide You
					<span className='text-coral-red'>Super</span>
					<span className='text-coral-red'>Quality</span>
					Shoes
					<br />
					<span className='text-coral-red inline-block mt-3'>
						Nike
					</span>{' '}
					Shoes
				</h2>
				<p className='mt-4 lg:max-w-lg info-text'>
					Ensuring premium comfort and style, our meticuliously
					crafted footwear is designed to elevate your experience,
					providing you with unmathced quality, innovation, and a
					touch of elegance.
				</p>
				<p className='mt-6 lg:max-w-lg info-text'>
					Our dedication to details and excellence ensures your
					statisfaction
				</p>
				<div className='mt-11'>
					<Button label={'View details'} />
				</div>
			</div>
			<div className='flex-1 flex justify-center items-center'>
				<Image
					className='object-contain'
					src={shoe8}
					alt='shoe8'
					width={570}
					height={522}
				/>
			</div>
		</section>
	);
};

export default SuperQuality;
