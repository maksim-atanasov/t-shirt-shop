'use client';

import { CartContext, ICard } from '@/context/CartContext';
import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useMemo } from 'react';

type Props = {
	item: ICard;
};

const CartItem: NextPage<Props> = ({ item }) => {
	const { setCart } = useContext(CartContext);
	const buttons = useMemo(
		() => [
			{
				id: 1,
				text: '-',
				disabled: item.count === 1,
				handler: () => {
					if (item.count > 1) {
						setCart((prevCart) => {
							const result: ICard[] = [];

							prevCart.forEach((cartItem) => {
								if (cartItem.id === item.id) {
									result.push({ ...cartItem, count: cartItem.count - 1 });
								} else {
									result.push(cartItem);
								}
							});

							return result;
						});
					}
				},
			},
			{
				id: 2,
				text: '+',
				disabled: item.count === 10,
				handler: () => {
					if (item.count < 10) {
						setCart((prevCart) => {
							const result: ICard[] = [];

							prevCart.forEach((cartItem) => {
								if (cartItem.id === item.id) {
									result.push({ ...cartItem, count: cartItem.count + 1 });
								} else {
									result.push(cartItem);
								}
							});

							return result;
						});
					}
				},
			},
		],
		[item.count, item.id, setCart],
	);

	return (
		<article className='flex items-center justify-between bg-slate-200 p-4 rounded-md gap-4 shadow-md flex-wrap'>
			<div className='flex gap-8 items-center'>
				<Image
					className='rounded-md'
					src={item.imageUrl}
					alt={item.title}
					width={100}
					height={100}
				/>
				<h2 className='text-lg font-semibold'>{item.title}</h2>
			</div>
			<div className='flex items-center'>
				<p>Amount - {item.count}</p>
				<div className='flex items-center ml-4 gap-1 p-2'>
					{buttons.map((button) => (
						<button
							key={button.id}
							className='p-3 bg-slate-500 hover:bg-slate-600 transition duration-300 ease-in-out shadow-md h-2 w-2 text-[20px] relative rounded-md disabled:cursor-not-allowed disabled:bg-slate-400'
							onClick={button.handler}
							disabled={button.disabled}
						>
							<span className='absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
								{button.text}
							</span>
						</button>
					))}
				</div>
				<p className='text-xl font-bold'>
					{(item.price * item.count).toFixed(2)}$
				</p>
			</div>
		</article>
	);
};

export default CartItem;
