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
		<div className='header'>
			{/* nav link => home */}
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
			{/* TODO the first list items will be buttons and the second will only show when the first is clicked */}
			{/* how to select second item in css */}
			<ul className='navbar'>
				<li>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>

				{/* btn for departnmets */}
				<li>
					Departments +
					<ul>
						<li>
							<Link href='/kingdom-generation'>
								<a>Kingdom Generation</a>
							</Link>
						</li>

						<li>
							<Link href='/youth'>
								<a>Youth</a>
							</Link>
						</li>

						<li>
							<Link href='/DOF'>
								<a>D.O.F</a>
							</Link>
						</li>

						<li>
							<Link href='/eagles'>
								<a>Eagles</a>
							</Link>
						</li>
					</ul>
				</li>

				{/* another btn for ministries */}
				<li>
					Ministries +
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
			</ul>
			{/* hambugger menu */}
			<Image
				src='/hamburger-menu-svgrepo-com.svg'
				alt='logo'
				width='30px'
				height='30px'
			/>
			<style jsx>{`
				.header {
					background-color: rgb(240, 234, 234);
					text-transform: capitalize;
					color: rgb(158, 24, 24);
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.navbar > li {
					margin: 0 80px;
				}
				.navbar li {
					position: relative;
					float: left;
					padding: 0 5px;
					font-size: 20px;
				}
				.navbar ul li a {
					display: block;
					padding: 10px;
				}
				.navbar ul li a:hover {
					background-color: grey;
				}

				.navbar li ul {
					display: none;
					position: absolute;
					width: 200px;
					float: left;
					background-color: white;
				}

				.navbar ul li {
					width: 100;
					border-top: 1px solid grey;
				}

				.navbar li:focus-within > ul,
				.navbar li:hover > ul {
					display: initial;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
