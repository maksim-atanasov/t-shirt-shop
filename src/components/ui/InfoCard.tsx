import { NextPage } from 'next';

type Props = {
	sticker: string;
	title: string;
	description: string;
};

const InfoCard: NextPage<Props> = ({ sticker, title, description }) => {
	return (
		<div className='text-center rounded-md md:hover:scale-[1.01] md:hover:shadow-md transition duration-300 ease-in-out md:p-8'>
			<div className='text-2xl mb-4'>{sticker}</div>
			<h3 className='text-xl font-semibold mb-2'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</div>
	);
};

export default InfoCard;
