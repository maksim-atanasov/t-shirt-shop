'use client';

const Error = ({ error }: { error: Error }) => {
	return (
		<h1 className='text-center h-[80svh] flex items-center justify-center text-[30px] font-bold'>
			{error.message}
		</h1>
	);
};

export default Error;
