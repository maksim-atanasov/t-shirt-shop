'use client';

import { CartContext } from '@/context/CartContext';
import cartLogo from '../../images/shopping-cart.png';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import classNames from 'classnames';

const Cart = () => {
	const { cart } = useContext(CartContext);
	const count = useMemo(
		() => cart.reduce((acc, item) => acc + item.count, 0),
		[cart],
	);

	return (
		<Link href='/cart' className='flex items-center relative'>
			<Image
				className='w-[20px] h-[20px] object-contain'
				src={cartLogo}
				alt='cart logo'
				width={20}
				height={20}
			/>
			<span
				className={classNames(
					'absolute w-[10px] h-[10px] bg-red-600 text-white rounded-full flex justify-center items-center top-[-2px] right-[-10px] p-2 text-[10px] transition duration-300 ease-in-out',
					{ 'opacity-0': count === 0 },
				)}
			>
				{count > 9 ? '9+' : count}
			</span>
		</Link>
	);
};

export default Cart;
