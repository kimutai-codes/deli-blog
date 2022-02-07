import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);
	const [minDrop, setminDrop] = useState(false);

	const dropClick = (e) => {
		setDropDown(!dropDown);
		setminDrop(!minDrop);
		console.log('brrr');
	};
	const dropMin = () => {
		setminDrop(!minDrop);
		setDropDown(!dropDown);
	};
	return (
		<div className='navbar-div'>
			{/* TODO the first list items will be buttons and the second will only show when the first is clicked */}
			{/* how to select second item in css */}
			<ul className='navbar'>
				<li>
					<Link href='/'>
						<a>
							<Image
								src='/logo.png'
								alt='logo'
								width='30px'
								height='30px'
							/>
						</a>
					</Link>
				</li>

				<li>About</li>

				{/* btn for departnmets */}
				<li
					className={`departments btn ${dropDown ? 'dropped' : ''}`}
					onClick={dropClick}
				>
					Departments
					<ul>
						<li>
							<Link href='/kingdom-generation'>
								<a>Kindom Generation</a>
							</Link>
						</li>
						<li>
							<Link href='/youth'>
								<a>Youth</a>
							</Link>
						</li>
						<li>
							<Link href='DOF'>
								<a>DOF</a>
							</Link>
						</li>
						<li>
							<Link href='eagles'>
								<a>Eagles</a>
							</Link>
						</li>
					</ul>
				</li>

				{/* another btn for ministries */}
				<li
					className={`ministries btn ${minDrop ? 'mindropped' : ''}`}
					onClick={dropMin}
				>
					Ministries
					<ul>
						<li>
							<Link href='/Ushering'>
								<a>Ushering</a>
							</Link>
						</li>
						<li>
							<Link href='/Music'>
								<a>Music</a>
							</Link>
						</li>
						<li>
							<Link href='/Hospitality'>
								<a>Hospitality</a>
							</Link>
						</li>
					</ul>
				</li>
				{/* hambugger menu */}
				<li className='menu'>
					<Image
						src='/hamburger-menu-svgrepo-com.svg'
						alt='logo'
						width='30px'
						height='30px'
					/>
				</li>
			</ul>
			<style jsx>{`
				.navbar {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.btn a {
					display: none;
				}

				.dropped a {
					display: inline;
				}
				.mindropped a {
					display: inline;
				}

				.navbar li {
					padding: 5px;
					text-align: center;
					color: saddlebrown;
				}
				.menu {
					display: none;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
