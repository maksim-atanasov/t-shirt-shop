'use client';

import React, { useEffect, useState } from 'react';

export interface ICard {
	id: number;
	title: string;
	price: number;
	description: string;
	imageUrl: string;
	count: number;
}

type CardContextType = {
	cart: ICard[];
	setCart: React.Dispatch<React.SetStateAction<ICard[]>>;
};

export const CartContext = React.createContext<CardContextType>({
	cart: [],
	setCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<ICard[]>([]);

	useEffect(() => {
		const cartStorage = localStorage.getItem('cart');

		if (!cartStorage) {
			localStorage.setItem('cart', JSON.stringify({}));
		}

		const newCartStorage = localStorage.getItem('cart');

		if (typeof newCartStorage === 'string') {
			const data: ICard[] = JSON.parse(newCartStorage);
			setCart(data);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}
