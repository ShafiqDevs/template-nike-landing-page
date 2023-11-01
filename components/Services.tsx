import { services } from '@/constants';
import React from 'react';
import ServiceCard from './ServiceCard';

type Props = {};

const Services = ({}: Props) => {
	return (
		<section className='max-container flex justify-center flex-wrap gap-9'>
			{services.map((service) => (
				<ServiceCard
					key={service.label}
					imgUrl={service.imgURL}
					label={service.label}
					subText={service.subtext}
				/>
			))}
		</section>
	);
};

export default Services;
