import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar'>
			{/* TODO the first list items will be buttons and the second will only show when the first is clicked */}
			{/* how to select second item in css */}
			<ul>
				<li>About</li>

				{/* btn for departnmets */}
				<li>
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
				<li>
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
					color: red;
					display: flex;
					flex-direction: row;
					width: 100%;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
