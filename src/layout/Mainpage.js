import {React, useEffect, useState} from "react";
import {Carousel, Button, Image, Card} from "react-bootstrap";
import { Link } from "react-router-dom";



import nowplaying from "../DB/nowplaying";
import popular from "../DB/popular";
import MovieDetail from "./MovieDetail";

const Mainpage = () => {

    const [nowMovie] = useState(nowplaying.results);
    const [popularMovie] = useState(popular.results);
    const [randomMovie, setRandomMovie] = useState([]);
    const [dbIn, setDbin] = useState(false);
    const sortDate = popularMovie.sort((a, b) => b.popularity - a.popularity);
   

    const defaultUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        let copy = [...nowMovie].sort(()=> Math.random() - 0.5);
        setRandomMovie(copy);
        setDbin(true)
    }, [])

    return (
      <div className="main">
          <div className="nowMovie">
            <h3>현재 상영작</h3>
            <Carousel fade indicators={false} style={{ background: "black" }}>
              {dbIn &&
                [1, 5, 10].map(function (item, i) {
                  return (
                    <Carousel.Item interval={1000}>
                      <div className="nowMovieBox">
                        <MovieDetail
                          movieCG="now"
                          mid={randomMovie[1 + item].id}
                          postSrc={
                            defaultUrl + randomMovie[1 + item].poster_path
                          }
                        />
                        <MovieDetail
                          movieCG="now"
                          mid={randomMovie[2 + item].id}
                          postSrc={
                            defaultUrl + randomMovie[2 + item].poster_path
                          }
                        />
                        <MovieDetail
                          movieCG="now"
                          mid={randomMovie[3 + item].id}
                          postSrc={
                            defaultUrl + randomMovie[3 + item].poster_path
                          }
                        />
                      </div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
        

        <div className="compWrap">
          <div className="Popular">
            <h3>흥행 순위 TOP5</h3>
            <div className="movieBox">
              <ul>
                
                  {
                    [0,1,2,3,4].map((item)=>{
                      return (
                        <li className={item != 4 ? 'popularLst' : ''}>
                          
                          <MovieDetail
                            movieCG="popular"
                            mid={popularMovie[item].id}
                            postSrc={
                              defaultUrl + popularMovie[item].poster_path
                            }
                          />
                          <b>{popularMovie[item].title}</b>
                        </li>
                      );
                    })
                  }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Mainpage;