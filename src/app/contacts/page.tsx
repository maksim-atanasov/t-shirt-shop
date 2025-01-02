'use client';

import { useState } from 'react';

const emptyForm = {
	name: '',
	email: '',
	message: '',
};

const Page = () => {
	const [formValue, setFormValue] = useState(emptyForm);
	const [isSended, setIsSended] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleUpdateForm = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		target: 'name' | 'email' | 'message',
	) => {
		setIsError(false);
		setFormValue({ ...formValue, [target]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!formValue.name.trim() ||
			!formValue.email.trim() ||
			!formValue.message.trim()
		) {
			setIsError(true);
			return;
		}

		setFormValue(emptyForm);
		setIsSended(true);
	};

	return (
		<main className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Contact Us</h1>

			<section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<article className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='relative text-xl font-semibold mb-4'>
						Send us a message
						{isSended && (
							<p className='absolute text-green-500 right-0 top-0'>
								Sended successfully
							</p>
						)}
						{isError && (
							<p className='absolute text-red-500 right-0 top-0'>
								Invalid Fields
							</p>
						)}
					</h2>

					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label className='block text-gray-700 mb-2' htmlFor='name'>
								Name
							</label>
							<input
								type='text'
								id='name'
								value={formValue.name}
								onChange={(e) => handleUpdateForm(e, 'name')}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 mb-2' htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								value={formValue.email}
								onChange={(e) => handleUpdateForm(e, 'email')}
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
								value={formValue.message}
								onChange={(e) => handleUpdateForm(e, 'message')}
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
				</article>

				<article className='bg-white rounded-lg shadow-md p-6'>
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
				</article>
			</section>
		</main>
	);
};

export default Page;
