function Carrusel() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide text-bg-danger" data-bs-ride="carousel" >
            <div class="carousel-inner h-100">
                <div class="carousel-item active">
                    <img src="/carrusel1.jpeg" class="d-block w-100 h-100" alt="Imagen 1" />
                </div>
                <div class="carousel-item">
                    <img src="/carrusel2.jpeg" class="d-block w-100 h-100" alt="Imagen 2" />
                </div>
                <div class="carousel-item">
                    <img src="/carrusel3.jpeg" class="d-block w-100 h-100" alt="Imagen 3" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carrusel;