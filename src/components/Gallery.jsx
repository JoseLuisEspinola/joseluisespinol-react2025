import React from 'react';

const Gallery = () => {
    return (
        <div id="galeria" className="container p-5 mt-5 mb-5 w-100">
            <h2>Galería de Imágenes</h2>
            <div className="row gap-3 d-flex justify-content-center w-100 mt-4">
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery1.jpeg" alt="Imagen 1" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery2.jpeg" alt="Imagen 2" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 shadow-lg rounded">
                    <img src="/gallery3.jpeg" alt="Imagen 3" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery4.jpeg" alt="Imagen 4" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery5.jpeg" alt="Imagen 5" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery6.jpeg" alt="Imagen 6" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery7.jpeg" alt="Imagen 7" className="img-fluid h-100 w-100" />
                </div>
                <div className="col-md-3 p-0 shadow-lg rounded">
                    <img src="/gallery8.jpeg" alt="Imagen 8" className="img-fluid h-100 w-100" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
