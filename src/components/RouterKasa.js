import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Housings from '../pages/Housings';
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
