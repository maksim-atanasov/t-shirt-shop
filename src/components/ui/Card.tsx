'use client';

import { CartContext } from '@/context/CartContext';
import classNames from 'classnames';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

type Props = {
	id: number;
	title: string;
	price: number;
	description: string;
	imageUrl: string;
};

const Card: NextPage<Props> = ({ id, title, price, description, imageUrl }) => {
	const { cart, setCart } = useContext(CartContext);
	const isActive = cart.filter((item) => item.id === id).length > 0;

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:hover:scale-105 md:hover:shadow-2xl transition duration-300 ease-in-out'>
			<div className='h-64 bg-gray-200'>
				<Link href={`/catalog/${id}`}>
					<Image
						className='w-full h-full object-contain bg-white p-2'
						src={imageUrl}
						alt='product logo'
						width={300}
						height={300}
					/>
				</Link>
			</div>
			<div className='p-4 flex-grow'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-gray-600 mb-4 overflow-hidden text-ellipsis whitespace-nowrap'>
					{description}
				</p>
			</div>
			<div className='p-4 flex justify-between items-center'>
				<span className='text-xl font-bold'>${price.toFixed(2)}</span>
				<button
					className={classNames(
						'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300 ease-in-out',
						{ 'bg-slate-600 hover:bg-slate-800': isActive },
					)}
					onClick={() => {
						if (!isActive) {
							setCart((prevCart) => [
								...prevCart,
								{
									id,
									title,
									price,
									description,
									imageUrl,
									count: 1,
								},
							]);
						} else {
							setCart((prevCart) => prevCart.filter((item) => item.id !== id));
						}
					}}
				>
					{isActive ? 'Added to Cart' : 'Add to Cart'}
				</button>
			</div>
		</div>
	);
};

export default Card;
