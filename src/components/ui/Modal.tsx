'use client';
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';

type Props = {
	setIsActive: (value: boolean) => void;
};

export const Modal: React.FC<Props> = ({ setIsActive }) => {
	const { setCart } = useContext(CartContext);

	const closeModal = () => {
		setIsActive(false);
	};

	return (
		<div
			className='fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-10'
			onClick={closeModal}
		>
			<div
				className='bg-white p-4 rounded-md min-w-[300px]'
				onClick={(e) => e.stopPropagation()}
			>
				<h2>This is not real shop!</h2>
				<p>Do you want to clear your cart?</p>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-md mt-10'
					onClick={closeModal}
				>
					Close
				</button>
				<button
					className='bg-orange-400 text-white px-4 py-2 rounded-md mt-10 ml-5'
					onClick={() => {
						setCart([]);
						closeModal();
					}}
				>
					Clear
				</button>
			</div>
		</div>
	);
};
