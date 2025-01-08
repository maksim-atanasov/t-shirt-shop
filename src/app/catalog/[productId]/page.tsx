'use client';

import { CartContext, ICard } from '@/context/CartContext';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useMemo, useState } from 'react';

const Page = () => {
	const { productId }: { productId: string } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState<ICard>({
		id: -1,
		title: '',
		price: 0,
		description: '',
		imageUrl: '',
		count: 0,
	});
	const { cart, setCart } = useContext(CartContext);
	const isActive = useMemo(
		() => cart.filter((item) => item.id === +productId).length > 0,
		[cart, productId],
	);

	useEffect(() => {
		console.log(process.env.NEXT_PUBLIC_HOST_URL + `/api/cards/${productId}`);
		fetch(process.env.NEXT_PUBLIC_HOST_URL + `/api/cards/${productId}`)
			.then((response) => response.json().then((data) => setProduct(data)))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, [productId]);

	if (!product.id) {
		throw new Error('Product not found');
	}

	return (
		<main className='max-w-6xl mx-auto px-4 py-16 min-h-[80svh]'>
			<Link
				href='/catalog'
				className='text-blue-600 hover:bg-slate-400 hover:shadow-md p-2 bg-slate-200 rounded-md transition duration-300 ease-in-out'
			>
				Back to Catalog
			</Link>
			{!isLoading ? (
				<section className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 min-h-[55vh]'>
					<article className=''>
						<Image
							width={200}
							height={250}
							className='w-[200px] h-[250px] object-contain p-1 bg-white rounded-md'
							src={product.imageUrl}
							alt={product.title}
						/>
					</article>
					<article className='flex flex-col bg-slate-200 p-4 rounded-md shadow-lg'>
						<p className='text-gray-600 mb-8'>ID: {product.id}</p>
						<h2 className='font-semibold mb-8 text-2xl'>{product.title}</h2>
						<p className='text-gray-600 mb-8'>{product.description}</p>
						<p className='text-2xl font-semibold'>
							${product.price.toFixed(2)}
						</p>
						<p className='text-gray-600 mb-8'>
							Quantity:{' '}
							{cart.filter((item) => item.id === +productId)[0]?.count || 0}
						</p>
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
											id: product.id,
											title: product.title,
											price: product.price,
											description: product.description,
											imageUrl: product.imageUrl,
											count: 1,
										},
									]);
								} else {
									setCart((prevCart) =>
										prevCart.filter((item) => item.id !== +productId),
									);
								}
							}}
						>
							{isActive ? 'Added to Cart' : 'Add to Cart'}
						</button>
					</article>
				</section>
			) : (
				<div className='flex justify-center items-center h-[60vh]'>
					<div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600'></div>
				</div>
			)}
		</main>
	);
};

export default Page;
