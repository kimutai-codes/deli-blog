import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
				<li className='departments btn'>
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
				<li className='ministries btn'>
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
			</ul>
			<style jsx>{`
				.navbar {
					display: flex;
					flex-direction: row;
					width: 100%;
				}

				.btn a {
					color: red;
					display: none;
				}
				.btn {
					text-decoration: underline;
				}

				.navbar li {
					padding: 5px;
					text-align: center;
					color: saddlebrown;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
