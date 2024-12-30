'use client';

import classNames from 'classnames';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = { title: string; link: string };

const NavLink: NextPage<Props> = ({ title, link }) => {
	const path = usePathname();

	return (
		<Link
			href={link}
			className={classNames('nav-link', {
				'after:scale-x-100 after:bg-slate-700 after:h-0.5 hover:text-slate-700':
					path === link,
			})}
		>
			{title}
		</Link>
	);
};

export default NavLink;
