
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";

function MovieDetail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQwZjhjNmY5ODRiYWIwYzk0MTEyYjVkNDJiYjhjMiIsInN1YiI6IjY1MjZiY2I0ZmQ2MzAwNWQ3OThmMmUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s_PIDy_xITP0gAqrDJbE_qWtqNf4vszltR9UyZo7fh8";

  const [movieInfo, setMovieInfo] = useState([]);

  const detailMovie = async() =>{
    await axios.get(
      "https://api.themoviedb.org/3/movie/" + props.mid + "?language=ko",
      {
        headers: {
          Authorization: apiKey,
          accept: "application/json",
        },
      }
    ).then((res) => {
      
      setMovieInfo(res.data);
    }).catch((err) =>{
      console.log(err);
    }
    )    
  }

  useEffect(() => {
    detailMovie();
    // fetch('https://api.themoviedb.org/3/movie/' + props.mid + '?language=ko', {
    //   method: "GET",
    //   headers: {
    //     Authorization: apiKey,
    //     accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setMovieInfo(res);
    //   });
  }, []);


  return (
    <>
      <Button
        variant="outline"
        onClick={handleShow}
        style={{ padding: 0, margin: 0 }}
      >
        <img className={props.movieCG} src={props.postSrc} />
        
      </Button>

      <Modal
        size="lg"
        centered={true}
        show={show}
        onHide={handleClose}
        animation={true}
      >
        <Modal.Body size="100%">
          <Card style={{ width: "99%", height: "90%", color: "white" }}>
            <Card.Img sizes="600x180" variant="top" src={props.postSrc} />
            <Card.Body>
              <Card.Title>
                {movieInfo.title} ({movieInfo.release_date})
              </Card.Title>
              <Card.Text>
                {movieInfo.tagline}
                <br />
              </Card.Text>
              <Card.Text>{movieInfo.overview}</Card.Text>
            </Card.Body>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieDetail;