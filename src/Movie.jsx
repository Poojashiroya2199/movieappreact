import React from "react";
export default function Movie(props) {
  const { id, movie, handlelike, handlewatchlist, handleremove } = props;
  return (
    <>
      <div className="title">{movie.title}</div>
      <div>{movie.rating}</div>
      <div>{movie.actors}</div>
      <button onClick={() => handlelike(id)}>❤</button>
      <button onClick={() => handlewatchlist(id)}>Add to watchList</button>
      <button onClick={() => handleremove(id)}>Remove</button>
    </>
  );
}
