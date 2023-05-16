import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
