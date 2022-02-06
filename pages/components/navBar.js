import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				{/* //abouts page */}
				{/* <li>
            <Link href='/about'><a>About Us</a></Link>
          </li> */}
				{/* Departments */}
				{/* <li className='Department'>Department</li>
          <li>
            <Link href='/Kindom-Generation'>Kingdom Generation</Link>
          </li>
          <li>
            <Link href='/Youths'>Youth</Link>
          </li> */}
				<li>About</li>
				<li>
					Departments
					<ul>
						<li>Kindom Generation</li>
						<li>Youth</li>
						<li>DOF</li>
						<li>Eagles</li>
					</ul>
				</li>
				<li>
					Ministries
					<ul>
						<li>Ushering</li>
						<li>Music</li>
						<li>Hospitality</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
