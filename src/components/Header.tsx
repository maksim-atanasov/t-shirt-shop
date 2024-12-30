import { PageManager } from '@/utils/PageManager';
import NavLink from './ui/NavLink';
import Cart from './ui/Cart';

const Header = () => {
	const pages = new PageManager().pages;

	return (
		<header>
			<nav className='bg-white shadow-lg'>
				<div className='max-w-6xl mx-auto px-4 flex justify-between items-center h-16'>
					<div className='text-xl font-bold text-gray-800'>T-Shirt Shop</div>
					<div className='flex space-x-4'>
						{pages.map((page) => (
							<NavLink key={page.id} title={page.name} link={page.url} />
						))}
						<Cart />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
