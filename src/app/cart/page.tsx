import CartItems from '@/components/template/CartItems';
import TotalPrice from '@/components/ui/TotalPrice';

const page = () => {
	return (
		<main className='min-h-[80svh]'>
			<CartItems />
			<TotalPrice />
		</main>
	);
};

export default page;
