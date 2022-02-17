import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const menuHandler = () => {
		setMenu(!menu);
		console.log(menu);
	};
	return (
		<div className='header'>
			{/* nav link => home */}
			<Link href='/' className='logo'>
				<a>
					<Image
						src='/images/logo.png'
						alt='logo'
						width='30px'
						height='30px'
					/>
				</a>
			</Link>
			{/* TODO the first list items will be buttons and the second will only show when the first is clicked */}
			{/* how to select second item in css */}
			<ul className={`navbar ${menu ? 'show-menu' : ''}`}>
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
			<div className='menu' onClick={menuHandler}>
				<Image
					src='/images/hamburger-menu-svgrepo-com.svg'
					alt='logo'
					width='30px'
					height='30px'
				/>
			</div>
			<style jsx>{`
				.header {
					background-color: rgb(240, 234, 234);
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
					font-size: 20px;
				}
				.navbar li ul {
					padding: 0;
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
					background-color: rgba(255, 255, 255, 0.651);
					border-radius: 3%;
				}

				.navbar li ul li {
					width: 100%;
					border-top: 1px solid rgba(128, 128, 128, 0.322);
				}

				.navbar li:hover ul {
					display: inherit;
				}

				.menu {
					display: none;
				}

				@media (max-width: 900px) {
					.header {
					}

					.navbar > li {
						margin: 0 5px;
					}
				}
				@media (max-width: 500px) {
					.menu {
						display: initial;
					}

					.navbar {
						background-color: white;
						position: absolute;
						top: 2.5%;
						width: 100%;
						text-align: left;
						display: none;
					}
					.show-menu {
						display: block;
					}
					.navbar > li {
						margin: 0;
						display: block;
						width: 100%;
					}
					.navbar li ul {
						position: relative;
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default Navbar;
