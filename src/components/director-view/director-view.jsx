import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, movies } = this.props;

    return (
      <Container className="director-view">
        <Row>
          <Col className="label">Name:</Col>
          <Col className="value">{director.Name}</Col>
        </Row>

        <Row className="mt-3">
          <Col className="label">Birth:</Col>
          <Col className="value">{director.Birth}</Col>
        </Row>

        <Row className="mt-3">
          <Col className="label">Death:</Col>
          <Col className="value">{director.Death}</Col>
        </Row>

        <Row className="mt-3">
          <Col className="label">Bio:</Col>
          <Col className="value">{director.Bio}</Col>
        </Row>

        {/* <Row className="mt-3">
          {movies.map((movie) => {
            <Col lg={4} md={6}>
              <MovieCard key={movie._id} movie={movie}>
                {movie.Title}
              </MovieCard>
            </Col>;
          })}
        </Row> */}

        <Button
          className="mt-3 backBtn"
          onClick={() => {
            onBackClick(null);
          }}
          variant="link"
        >
          Go Back
        </Button>
      </Container>
    );
  }
}
