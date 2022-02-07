import React from 'react';

const Footer = () => {
	return (
		<footer>
			<p>This is the footer</p>
			<style jsx>{`
				footer {
					background-color: grey;
					position: absolute;
          bottom: 0;
					width: 100%;
				}
			`}</style>
		</footer>
	);
};

export default Footer;
