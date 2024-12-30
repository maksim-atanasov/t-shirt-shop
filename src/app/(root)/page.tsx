import InfoCard from '@/components/ui/InfoCard';
import { CompanyInfo } from '@/utils/CompanyInfo';
import { PageManager } from '@/utils/PageManager';
import Link from 'next/link';

export default function Home() {
	const infoCards = new CompanyInfo().info;

	return (
		<>
			<div className='bg-blue-600 text-white py-20'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<h1 className='text-4xl font-bold mb-4'>Welcome to T-Shirt Shop</h1>
					<p className='text-xl mb-8'>
						Discover our collection of unique and comfortable t-shirts
					</p>
					<Link
						className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold  hover:text-gray-100 hover:scale-125 hover:shadow-xl hover:bg-slate-600 duration-300 ease-in-out'
						href={new PageManager().catalog}
					>
						Shop Now
					</Link>
				</div>
			</div>

			<div className='max-w-6xl mx-auto px-4 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{infoCards.map((infoCard) => (
						<InfoCard
							key={infoCard.id}
							title={infoCard.title}
							description={infoCard.description}
							sticker={infoCard.sticker}
						/>
					))}
				</div>
			</div>
		</>
	);
}
