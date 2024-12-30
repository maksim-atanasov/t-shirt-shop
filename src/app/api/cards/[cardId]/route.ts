import { prisma } from '@/db';

export const DELETE = async (
	request: Request,
	{ params }: { params: { cardId: string } },
) => {
	if (isNaN(+params.cardId)) {
		return new Response('Invalid ID', { status: 400 });
	}

	const body = await request.json();

	if (body.accessToken !== process.env.ACCESS_TOKEN) {
		return new Response('No access', { status: 401 });
	}

	const user = await prisma.card.findUnique({ where: { id: +params.cardId } });

	if (!user) {
		return new Response('Card not found', { status: 404 });
	}

	return Response.json(
		await prisma.card.delete({ where: { id: +params.cardId } }),
	);
};
