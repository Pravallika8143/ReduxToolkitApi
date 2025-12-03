import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";

function Products() {
    const { isLoading, data } = useGetAllProductsQuery();

    return (
        <div className="container mt-4">

            <h2 className="mb-4 fw-bold text-center">Products</h2>

            {isLoading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary"></div>
                    <p className="mt-2">Loading Products...</p>
                </div>
            )}

            {!isLoading && (
                <div className="row g-4">
                    {data?.products.map((prod) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={prod.id}>
                            <div 
                                className="card h-100 shadow-sm border-0 product-card"
                                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                            >
                                <img
                                    src={prod.thumbnail}
                                    className="card-img-top"
                                    alt={prod.title}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-semibold">
                                        {prod.title.length > 30
                                            ? prod.title.slice(0, 30) + "..."
                                            : prod.title}
                                    </h5>

                                    <p className="text-muted mb-2 small">
                                        {prod.description.length > 60
                                            ? prod.description.slice(0, 60) + "..."
                                            : prod.description}
                                    </p>

                                    <p className="fw-bold mb-3">${prod.price.toFixed(2)}</p>

                                    <div className="mt-auto d-flex justify-content-between">
                                        <button className="btn btn-primary btn-sm">
                                            Add to Cart
                                        </button>
                                        <button className="btn btn-outline-secondary btn-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
            `}</style>

        </div>
    );
}

export default Products;
