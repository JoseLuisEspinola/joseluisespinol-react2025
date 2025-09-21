import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import Somos from './components/Somos';
import Cuestions from './components/Cuestions';
import Gallery from './components/Gallery';

function App() {
    return (
        <div>
            <Navbar />
            <Carrusel />
            <Somos />
            <Cuestions />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;

