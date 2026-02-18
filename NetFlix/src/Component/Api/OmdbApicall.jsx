import axios from "axios";
import React, { useState } from "react";

const OmdbApicall = () => {
  const [movies, setMovies] = useState([]);

  const getmovies = async () => {
    const res = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=62c9eb0f&s=Kalki",
    );
    console.log(res);
    console.log(res.data);
    console.log(res.data.Search);
    setMovies(res.data.Search);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1>OmdbApicall</h1>

      <button className="btn btn-danger" onClick={getmovies}>
        get
      </button>
      {movies.length > 0 && (
        <table
          className="table"
          style={{
            border: "1px solid black",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>year</th>
              <th>poster</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.imdbID}</td>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                  <img src={movie.Poster}></img>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OmdbApicall;
