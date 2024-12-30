export async function GET() {
	return Response.json([
		{
			id: 1,
			title: 'Dark Gray Tee',
			price: 29.99,
			description: 'Elegant dark gray color with a comfortable fit',
			imageUrl: '/tshirt-darkgray-main.jpeg',
		},
		{
			id: 2,
			title: 'Crimson Red Tee',
			price: 27.99,
			description: 'Rich red color with soft fabric',
			imageUrl: '/tshirt-red-main.jpeg',
		},
		{
			id: 3,
			title: 'Pure White Tee',
			price: 24.99,
			description: 'Crisp white color with relaxed fit',
			imageUrl: '/tshirt-white-main.jpeg',
		},
	]);
}
