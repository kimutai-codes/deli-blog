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
		<div className='navbar'>
			{/* TODO the first list items will be buttons and the second will only show when the first is clicked */}
			{/* how to select second item in css */}
			<Link href='/' className='logo'>
				<a>
					<Image
						src='/logo.png'
						alt='logo'
						width='30px'
						height='30px'
					/>
				</a>
			</Link>

			<divi className='about'>About</divi>

			{/* btn for departnmets */}
			<div className='departments sec'>
				<button
					className={` btn ${dropDown ? 'dropped' : ''}`}
					onClick={dropClick}
				>
					Departments
				</button>
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
			</div>

			{/* another btn for ministries */}
			<div className='ministries sec'>
				<button
					className={` btn ${minDrop ? 'mindropped' : ''}`}
					onClick={dropMin}
				>
					Ministries
				</button>
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
			</div>
			{/* hambugger menu */}
			<div className='menu'>
				<Image
					src='/hamburger-menu-svgrepo-com.svg'
					alt='menu-icon'
					width='30px'
					height='30px'
				/>
			</div>
			<style jsx>{`
				.navbar {
					display: flex;
				}
				.about,
				.sec {
					display: none;
				}

				.menu {
          float: right;
          margin: 0 auto;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
