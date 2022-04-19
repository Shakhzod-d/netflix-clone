import React, { useState, useEffect, useContext } from "react";
import Fuse from "fuse.js";
import { Card, Header, Loading, Player } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const [movieList, setMoiveList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieImgUrl, setMovieImgUrl] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  //   useEffect(() => {
  // setSlideRows(slides[category]);
  //   }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  const hanleAddMovie = () => {
    setIsModalOpen(true);
  };
  const addMovie = (e) => {
    // e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title: movieTitle,
      description: movieDescription,
      url: movieImgUrl,
    };
    setMoiveList((movieList) => [...movieList, { ...newMovie }]);
    setIsModalOpen(false);
    setMovieTitle("");
    setMovieDescription("");
    setMovieImgUrl("");
  };
  console.log(movieList);
  return profile.displayName ? (
    <React.Fragment>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            {
              <Link to={``} onClick={hanleAddMovie}>
                Movies
              </Link>
            }
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            width="500px"
          >
            <div className="d-flex justify-content-center align-items-center flex-lg-column">
              <form onSubmit={addMovie} style={{ width: "600px" }}>
                <div className="input-group input-group m-4">
                  <span className="input-group-text" id="inputGroup-sizing-lg">
                    Movie
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter title of movie"
                    value={movieTitle}
                    onChange={({ target }) => setMovieTitle(target.value)}
                  />
                </div>
                <div className="input-group m-4">
                  <span className="input-group-text">Brief details</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Enter description..."
                    value={movieDescription}
                    onChange={({ target }) => setMovieDescription(target.value)}
                  ></textarea>
                </div>
                <div class="input-group m-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter movie image url"
                    value={movieImgUrl}
                    onChange={({ target }) => setMovieImgUrl(target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success m-4">
                  Submit movie
                </button>
              </form>
              <br />
              <div>
                <button
                  class="btn btn-secondary m-1"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {movieList.length > 0 &&
          movieList.map((movieItem) => (
            <Card key={`${category}-${movieItem.title.toLowerCase()}`}>
              <Card.Title>{movieItem.title}</Card.Title>
              <Card.Entities>
                {/* {slideItem.data.map((item) => ( */}
                <Card.Item key={movieItem.Id} item={movieItem}>
                  <Card.Image src={movieItem.url} />
                  <Card.Meta>
                    <Card.SubTitle>{movieItem.title}</Card.SubTitle>
                    <Card.Text>{movieItem.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
                {/* ))} */}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
      </Card.Group>
      <FooterContainer />
    </React.Fragment>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
