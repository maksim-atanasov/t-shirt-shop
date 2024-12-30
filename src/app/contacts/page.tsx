const page = () => {
	return (
		<div className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Contact Us</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-xl font-semibold mb-4'>Send us a message</h2>
					<form>
						<div className='mb-4'>
							<label className='block text-gray-700 mb-2' htmlFor='name'>
								Name
							</label>
							<input
								type='text'
								id='name'
								className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 mb-2' htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 mb-2' htmlFor='message'>
								Message
							</label>
							<textarea
								id='message'
								rows={4}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							></textarea>
						</div>
						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
						>
							Send Message
						</button>
					</form>
				</div>

				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
					<div className='space-y-4'>
						<div>
							<h3 className='font-semibold'>Address</h3>
							<p className='text-gray-600'>
								123 T-Shirt Street
								<br />
								Fashion District
								<br />
								New York, NY 10001
							</p>
						</div>
						<div>
							<h3 className='font-semibold'>Email</h3>
							<p className='text-gray-600'>info@tshirtshop.com</p>
						</div>
						<div>
							<h3 className='font-semibold'>Phone</h3>
							<p className='text-gray-600'>+1 (555) 123-4567</p>
						</div>
						<div>
							<h3 className='font-semibold'>Business Hours</h3>
							<p className='text-gray-600'>
								Monday - Friday: 9:00 AM - 6:00 PM
								<br />
								Saturday: 10:00 AM - 4:00 PM
								<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
