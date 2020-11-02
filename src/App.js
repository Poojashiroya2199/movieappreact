import React, { useState } from "react";
import "./styles.css";
import Movie from "./Movie.js";
export default function App() {
  const moviesList = [
    {
      title: "Chak de india",
      rating: 8.3,
      actors: ["srk ", "ag "],
      liked: false,
      watched: false,
      remove: false
    },
    {
      title: "Dhoom",
      rating: 7.5,
      actors: ["ab ", "ja ", "ed ", "ud "],
      liked: false,
      watched: false,
      remove: false
    },
    {
      title: "Dhoom2",
      rating: 8.0,
      actors: ["hr ", "ab ", "ud "],
      liked: false,
      watched: false,
      remove: false
    }
  ];
  const [movies, setMovieList] = useState(moviesList);
  const [watchlist, setWatchlist] = useState([]);
  const [likelist, setLikedlist] = useState([]);
  const handlelike = (name) => {
    console.log("liked");
    const likesCopy = movies.map((movie) => {
      if (movie.title === name && !movie.liked) {
        movie.liked = true;
        return movie;
      } else if (movie.title === name && movie.liked) {
        movie.liked = false;
      }

      return null;
    });
    likelist.push(likesCopy);
    setLikedlist(likesCopy);
  };
  const handlewatchlist = (name) => {
    console.log("added");
    const watchlistcopy = movies.filter((movie) => {
      if (movie.title === name && !movie.watched) {
        movie.watched = true;
        return movie;
        // console.log("remve1");
      } else if (movie.title === name && movie.watched) {
        movie.watched = false;
      }
      return null;
    });
    watchlist.push(watchlistcopy);
    //  console.log(watchlist);
    setWatchlist(watchlistcopy);

    // console.log(watchlistcopy);
  };
  const handleremove = (name) => {
    console.log("remove");
    const copyMovie = movies.filter((movie) => movie.title !== name);

    setMovieList(copyMovie);
  };
  return (
    <>
      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          <Movie
            key={index}
            movie={movie}
            handlelike={handlelike}
            handlewatchlist={handlewatchlist}
            handleremove={handleremove}
          />
        </div>
      ))}
    </>
  );
}
