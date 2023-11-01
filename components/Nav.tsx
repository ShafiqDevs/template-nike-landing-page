import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Nav = (props: Props) => {
	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<Link href={'/'}>
					<Image
						src={'/images/header-logo.svg'}
						alt='Logo'
						width={130}
						height={29}
					/>
				</Link>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((link) => (
						<li
							className=''
							key={link.label}>
							<Link
								href={link.href}
								className='font-montserrat leading-normal text-lg text-slate-gray'>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<div>
					<Image
						className='hidden max-lg:block'
						src={'/icons/hamburger.svg'}
						alt='menu'
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
