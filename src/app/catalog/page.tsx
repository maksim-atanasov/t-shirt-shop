import Card from '@/components/ui/Card';
import { Card as ICard } from '@prisma/client';

const page = async () => {
	const response = await fetch('http://localhost:3000/api/cards', {
		next: { revalidate: 1 },
	});
	const cards = await response.json();

	return (
		<div className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Our T-Shirts</h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{cards.map((card: ICard) => (
					<Card
						id={card.id}
						key={card.id}
						title={card.title}
						imageUrl={card.imageUrl}
						price={card.price}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
};

export default page;
