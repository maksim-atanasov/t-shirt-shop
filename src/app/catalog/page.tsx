import Card from '@/components/ui/Card';
import { ICard } from '@/context/CartContext';

const page = async () => {
	let cards: ICard[] = [];

	try {
		const response = await fetch(process.env.HOST_URL + '/api/cards', {
			cache: 'no-cache',
		});
		console.log(response);
		cards = await response.json();
	} catch (error) {
		console.log(error);
	}

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
