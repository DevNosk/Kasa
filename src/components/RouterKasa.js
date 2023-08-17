import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Housings from './Housings';
export default function RouterKasa() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
				<Route path="/fiche-logement/:id" element={<Housings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
