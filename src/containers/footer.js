import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href="#">FAQ</Footer.Link>
					<Footer.Link href="#">Investors Relations</Footer.Link>
					<Footer.Link href="#">Ways to watch</Footer.Link>
					<Footer.Link href="#">Comparate Information</Footer.Link>
					<Footer.Link href="#">Netflix Originals</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Help Center </Footer.Link>
					<Footer.Link href="#">Jobs</Footer.Link>
					<Footer.Link href="#">Terms of Use</Footer.Link>
					<Footer.Link href="#">Contact us</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Account</Footer.Link>
					<Footer.Link href="#">Redeem Gift Cards</Footer.Link>
					<Footer.Link href="#">Privacy</Footer.Link>
					<Footer.Link href="#">Speed Test</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Media Center</Footer.Link>
					<Footer.Link href="#">Buy Gift Cards</Footer.Link>
					<Footer.Link href="#">Cookie Preferences</Footer.Link>
					<Footer.Link href="#">Legal Notices</Footer.Link>
				</Footer.Column>
				<Footer.Break />
			</Footer.Row>
			<Footer.Text>Netflix United Kingdom</Footer.Text>
			<Footer.Text>
				Made with{' '}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#e50914"
					class="bi bi-suit-heart-fill"
					viewBox="0 0 16 16"
				>
					<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
				</svg>{' '}
				by Shakhzod Jumaev
			</Footer.Text>
		</Footer>
	);
}
