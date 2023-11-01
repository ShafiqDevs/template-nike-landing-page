import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
	imgUrl: {
		thumbnail: any;
		bigShoe: StaticImageData;
	};
	changeBigShoeImg: (bigShoe: StaticImageData) => void;
	bigShoeImg: StaticImageData;
};

const ShoeCard = ({
	bigShoeImg,
	changeBigShoeImg,
	imgUrl,
}: Props) => {
	function handleClick() {
		if (bigShoeImg !== imgUrl.bigShoe) {
			changeBigShoeImg(imgUrl.bigShoe);
		}
	}

	return (
		<div
			className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
        ${
					bigShoeImg === imgUrl.bigShoe
						? 'border-coral-red'
						: 'border-transparent'
				}`}
			onClick={handleClick}>
			<div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
				<Image
					className='object-contain '
					src={imgUrl.thumbnail}
					alt='shoe collection'
					width={127}
					height={103}
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
