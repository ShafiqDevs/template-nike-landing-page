import Image from 'next/image';
import React from 'react';

type Props = {
	label: string;
	iconUrl?: string;
	backgroundColor?: string;
	borderColor?: string;
	textColor?: string;
	fullWidth?: boolean;
};

const Button = ({
	iconUrl,
	label,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}: Props) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg leading-none rounded-full ${
				fullWidth && 'w-full'
			} border
			${
				backgroundColor
					? `${borderColor} ${textColor}`
					: 'bg-coral-red  text-white  border-coral-red'
			} `}>
			{label}
			{iconUrl && (
				<Image
					className='rounded-full w-5 h-5'
					src={iconUrl}
					alt='icon'
					width={28}
					height={28}
				/>
			)}
		</button>
	);
};

export default Button;
