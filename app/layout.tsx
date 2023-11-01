import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Hero from '@/components/Hero';
import CustomerReviews from '@/components/CustomerReviews';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nike',
	description: 'This is a template landing page of a product',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />

				{children}
				<footer className='padding-x padding-t pb-8 bg-black'>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
