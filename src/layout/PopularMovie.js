import { useEffect, useState } from "react";
import movieDB from "./../DB/popular";
import MovieDetail from "./MovieDetail";
import { useSelector } from "react-redux";
import genre from "./../DB/genre";

const PopularMovie = () => {
  let [popularMovie] = useState(movieDB.results);
  let [genreList] = useState(genre);
  let state = useSelector((state) => {
    return state.movie;
  });

  let [sortMovie, setSort] = useState([]);
  let [dbIn, setDbin] = useState(false);
  let sortPopular = popularMovie.sort((a, b) => b.popularity - a.popularity);

  useEffect(() => {
    setSort(sortPopular);
    setDbin(true);
  }, []);

  return (
    <>
      <div className="genre-tab">
        <ul>
          <li
            className="total"
            onClick={() => {
              setSort(sortPopular);
            }}
          >
            전체
          </li>
          {genreList.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  let findMovie = popularMovie.filter(
                    (a) => a.genre_ids[0] == item.id
                  );
                  setSort(findMovie);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="movieList">
        {sortMovie.map((item, idx) => {
          return (
            <div className="movieBox">
              <MovieDetail
                movieCG="now"
                mid={item.id}
                postSrc={state.defaultUrl + item.poster_path}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularMovie;
