import React from 'react';
import Footer from './footer';
import Navbar from './navBar';

const Layout = ({ children }) => {
	return (
		<>
				<Navbar />
				<div>{children}</div>
				<Footer />
		</>
	);
};

export default Layout;
