'use client';

import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import CartItem from '../ui/CartItem';

const CartItems = () => {
	const { cart } = useContext(CartContext);

	return (
		<section className='flex flex-col p-5 xl:p-10 gap-4'>
			{cart.map((item) => (
				<CartItem item={item} key={item.id} />
			))}
		</section>
	);
};

export default CartItems;
