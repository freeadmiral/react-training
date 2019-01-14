import React, { Component } from "react";
import { getMovies } from "../services/fakeServices";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { getGenre } from "../services/fakeGenreServices";
import ListGroup from "./common/ListGroup";
import MovieTable from "./common/MovieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortedItem: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ id: "", name: "All Genres" }, ...getGenre()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenre = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSorting = sortedItem => {
    this.setState({ sortedItem });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortedItem
    } = this.state;

    if (count === 0) return <p>There are no movies</p>;

    const filtered =
      selectedGenre && selectedGenre.id
        ? allMovies.filter(m => m.genre.id === selectedGenre.id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filtered,
      [sortedItem.path],
      [sortedItem.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            onGenres={this.state.genres}
            onSelectGenre={this.handleGenre}
            genreSelected={selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in there</p>
          <MovieTable
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            movies={movies}
            onSorted={this.handleSorting}
            sortedItem={sortedItem}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
