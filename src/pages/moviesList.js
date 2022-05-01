import React, { useState } from "react";
import { Link } from "react-dom";
import { Form, Header } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

function MoviesList() {
  return (
    <React.Fragment>
      {/* <p>hello from movie list </p> */}
      {/* <HeaderContainer>
        <Form>
          <Form.Title>Enter new movie info</Form.Title>

          <Form.Base onSubmit={() => {}} method="POST">
            <Form.Input
              type="text"
              placeholder="Enter title of movie!"
              value={movieTitle}
              onChange={({ target }) => setMovieTitle(target.value)}
            />
            <Form.Input
              type="text"
              value={movieDescription}
              autoComplete="off"
              placeholder="Enter description here..."
              onChange={({ target }) => setMovieDescription(target.value)}
            />
            <Form.Input
              type="text"
              value={movieImgUrl}
              autoComplete="off"
              placeholder="Enter movie image url here..."
              onChange={({ target }) => setMovieImgUrl(target.value)}
            />
            <Form.Submit
              // disabled={isInvalid}
              type="submit"
              onClick={() => {}}
              // data-testid="sign-in"
            >
              Submit movie
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer> */}
      <FooterContainer />
    </React.Fragment>
  );
}

export default MoviesList;
