import { useEffect, useState } from 'react';
import movieDB from './../DB/nowplaying';
import MovieDetail from './MovieDetail';
import { useDispatch, useSelector } from "react-redux";

import genre from './../DB/genre';



const Nowplaying = () => {

  let [nowMovie] = useState(movieDB.results);
  let [genreList] = useState(genre);
  let state = useSelector((state) => {
    return state.movie;
  });
  let dispatch = useDispatch();

  let [sortMovie, setSort] = useState([]);
  let [dbIn, setDbin] = useState(false);
  let sortDate = nowMovie.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  useEffect(() => {
    setSort(sortDate);
    setDbin(true);
  }, []);


  return (
    <>
      <div className="genre-tab">
        <ul>
          <li className="total" onClick={()=>{
            setSort(sortDate);
          }}>전체</li>
          {genreList.map((item, idx) => {
            return <li onClick={()=>{
              let findMovie = nowMovie.filter((a) => a.genre_ids[0] == item.id);
              setSort(findMovie);
            }}>{item.name}</li>;
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
              <span vote>
                <div>
                  Rating🗳️ {item.vote_average}
                </div>
                <div></div>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Nowplaying;