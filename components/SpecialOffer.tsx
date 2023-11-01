import { offer } from '@/public/images';
import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { arrowRight } from '@/public/icons';

type Props = {};

const SpecialOffer = (props: Props) => {
	return (
		<section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
			<div className='flex-1'>
				<Image
					className='object-contain w-full'
					src={offer}
					alt='offer'
					width={773}
					height={687}
				/>
			</div>
			<div className='flex flex-1 flex-col'>
				<h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
					<span className='text-coral-red'>Special</span>
					<span className='text-coral-red'>offer</span>
				</h2>
				<p className='mt-4 lg:max-w-lg info-text'>
					Embard on a shopping journey that redefines experience with
					unbeatable deals. From premier selection to incredible
					savings, we offer unparalleled that sets us apart.
				</p>
				<p className='mt-6 lg:max-w-lg info-text'>
					Navigate a realm of possibilities designed to fulfill your
					unique desires, surpassing the loftiest epectations. Your
					journey with us is nothing short of exceptional.
				</p>
				<div className='mt-11 flex flex-wrap gap-4 items-center'>
					<Button
						label={'Learn more'}
						iconUrl={arrowRight}
					/>
					<Button
						label={'Learn more'}
						backgroundColor={'bg-white'}
						borderColor={'border-slate-gray'}
						textColor={'text-slate-gray'}
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
