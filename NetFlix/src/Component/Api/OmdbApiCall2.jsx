import axios from "axios";
import React, { useState } from "react";

const OmdbApicall2 = () => {
  const [movies, setMovies] = useState([]);

  const getmovies = async () => {
    const res = await axios.get(
      "http://www.omdbapi.com/?apikey=62c9eb0f&s=Avengers"
    );
    setMovies(res.data.Search);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>OmdbApicall</h1>

      <button
        className="btn btn-danger"
        onClick={getmovies}
        style={{ marginBottom: "20px" }}
      >
        Get
      </button>

      {movies && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 posters per row
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h4 style={{ margin: "10px 0 5px 0" }}>{movie.Title}</h4>
              <p>{movie.Year}</p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                {movie.imdbID}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OmdbApicall2;
