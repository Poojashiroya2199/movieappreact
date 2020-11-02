import React from "react";
export default function Movie(props) {
  const { movie, handlelike, handlewatchlist, handleremove } = props;
  return (
    <>
      <div className="title">{movie.title}</div>
      <div>{movie.rating}</div>
      <div>{movie.actors}</div>
      <div>
        <button onClick={() => handlelike(movie.title)}>
          {!movie.liked ? "💛" : "💓"}
        </button>

        <button
          onClick={() => handlewatchlist(movie.title)}
          className={movie.watched ? "red" : ""}
        >
          {!movie.watched ? "Add to watchList" : "remove fromwatchlist"}
        </button>
        <button onClick={() => handleremove(movie.title)}>Remove</button>
      </div>
    </>
  );
}
