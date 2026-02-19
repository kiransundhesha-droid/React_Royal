import axios from "axios";
import React, { useState } from "react";

const TestApi = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Search Movies
  const searchMovies = async () => {
    if (!searchTerm) {
      alert("Please enter movie name");
      return;
    }

    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=62c9eb0f&s=${searchTerm}`
    );

    if (res.data.Response === "False") {
      alert("Movie not found");
      setMovies([]);
    } else {
      setMovies(res.data.Search);
      setSelectedMovie(null);
    }
  };

  // Get Full Movie Details
  const getMovieDetails = async (id) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=62c9eb0f&i=${id}`
    );
    setSelectedMovie(res.data);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>OMDb Movie Search</h1>

      {/* SEARCH SECTION */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter movie name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
          }}
        />

        <button className="btn btn-primary" onClick={searchMovies}>
          Search
        </button>
      </div>

      {/* MOVIE GRID */}
      {!selectedMovie && movies.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
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

              <h4 style={{ marginTop: "10px" }}>{movie.Title}</h4>
              <p>{movie.Year}</p>

              <button
                className="btn btn-success"
                onClick={() => getMovieDetails(movie.imdbID)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* MOVIE DETAILS */}
      {selectedMovie && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSelectedMovie(null)}
          >
            Back
          </button>

          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              style={{ width: "250px", borderRadius: "50%" }}
            />

            <div>
              <h2>{selectedMovie.Title}</h2>
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Rated:</strong> {selectedMovie.Rated}</p>
              <p><strong>Released:</strong> {selectedMovie.Released}</p>
              <p><strong>Runtime:</strong> {selectedMovie.Runtime}</p>
              <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
              <p><strong>Director:</strong> {selectedMovie.Director}</p>
              <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
              <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
              <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestApi ;
