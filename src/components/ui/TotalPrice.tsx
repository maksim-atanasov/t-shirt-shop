'use client';

import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import { useContext, useMemo, useState } from 'react';
import { Modal } from './Modal';

const TotalPrice = () => {
	const { cart } = useContext(CartContext);
	const totalPrice = useMemo(() => {
		return cart.reduce((acc, item) => acc + item.count * item.price, 0);
	}, [cart]);
	const [isActive, setIsActive] = useState(false);

	return (
		<section className='p-10'>
			{cart.length === 0 ? (
				<h2 className='md:text-2xl font-bold sm:text-sm text-center'>
					Your cart is empty
				</h2>
			) : (
				<article className='p-10 rounded-md bg-slate-50 shadow-lg'>
					<h2 className='md:text-2xl font-bold sm:text-sm '>
						Total Price - {totalPrice.toFixed(2)}$
					</h2>
					<Link
						href='/cart'
						className='mt-2 p-3 bg-lime-500 rounded justify-center items-center flex text-slate-700 text-xl hover:bg-lime-600 hover:text-slate-200 max-w-80'
						onClick={() => setIsActive(true)}
					>
						Buy
					</Link>
					{isActive && <Modal setIsActive={setIsActive} />}
				</article>
			)}
		</section>
	);
};

export default TotalPrice;
