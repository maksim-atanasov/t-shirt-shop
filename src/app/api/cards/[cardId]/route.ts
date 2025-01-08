import { products } from '@/data';
import { NextRequest } from 'next/server';

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ cardId: string }> },
) {
	const { cardId } = await params;

	const product = products.find((product) => product.id === Number(cardId));

	if (!product) {
		return Response.json({ message: 'Product not found' }, { status: 404 });
	}

	return Response.json(product);
}
