import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipesApi";

function Recipes() {
    const { isLoading, data } = useGetAllRecipesQuery();

    return (
        <div className="container mt-4">

            <h2 className="mb-4 fw-bold text-center">Recipes</h2>

            {isLoading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary"></div>
                    <p className="mt-2">Loading Recipes...</p>
                </div>
            )}

            {!isLoading && (
                <div className="row g-4">
                    {data?.recipes.map((recipe) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={recipe.id}>
                            <div 
                                className="card h-100 shadow-sm border-0 recipe-card"
                                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                            >
                                <img
                                    src={recipe.image}
                                    className="card-img-top"
                                    alt={recipe.name}
                                    style={{ objectFit: "cover", height: "180px", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
                                />

                                <div className="card-body text-center d-flex flex-column">
                                    <h5 className="card-title fw-semibold mb-2">
                                        {recipe.name.length > 25
                                            ? recipe.name.slice(0, 25) + "..."
                                            : recipe.name}
                                    </h5>

                                    <p className="text-muted small mb-3">
                                        {recipe.description
                                            ? recipe.description.length > 60
                                                ? recipe.description.slice(0, 60) + "..."
                                                : recipe.description
                                            : "Delicious recipe."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                .recipe-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
            `}</style>

        </div>
    );
}

export default Recipes;
