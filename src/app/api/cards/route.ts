import { prisma } from '@/db';

export async function GET() {
	return Response.json(await prisma.card.findMany());
}

export async function POST(request: Request) {
	const body = await request.json();

	if (body.accessToken !== process.env.ACCESS_TOKEN) {
		return new Response('No access', { status: 401 });
	}

	const data = {
		title: body.title,
		description: body.description,
		price: body.price,
		imageUrl: body.imageUrl,
	};

	return Response.json(await prisma.card.create({ data }));
}
