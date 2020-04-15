import React, { Component } from 'react';

import SearchArea from '../../component/UI/SearchArea/SearchArea';
import MovieList from '../../component/MovieList/MovieList';
import MovieInfo from '../../component/MovieList/MovieInfo/MovieInfo';
import Pagination from '../../component/UI/Pagination/Pagination';

class Movies extends Component {
    state = {
        movies: [],
        searchTerm: '',
        totalResults: 0,
        currentPage: '',
        currentMovie: null
    };
    apiKey = process.env.REACT_APP_API_KEY

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ ...data, movies: data.results, totalResults: data.total_results });
            });
    }

    nextPageHandler = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ ...data, movies: data.results, currentPage: pageNumber })
            });
    };


    inputChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    searchMovieHandler = (event) => {
        event.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], totalResults: data.total_results })
            });
    };

    nextPageSearchMovieHandler = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], currentPage: pageNumber })
            });
    };

    viewMovieInfoHandler = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id === id)

        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

        this.setState({ currentMovie: newCurrentMovie });

    };

    closeMovieInfoHandler = () => {
        this.setState({ currentMovie: null });
    };

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20);
        return (
            <div>
                {this.state.currentMovie == null
                    ? <div>
                        <SearchArea searchMovie={this.searchMovieHandler} inputChange={this.inputChangeHandler} />
                        <MovieList viewMovieInfo={this.viewMovieInfoHandler} movies={this.state.movies} />
                    </div>
                    : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfoHandler} />
                }

                {this.state.totalResults > 20 && this.state.currentMovie == null && this.state.searchTerm === ''
                    ? <Pagination pages={numberPages} nextPage={this.nextPageHandler} currentPage={this.state.currentPage} />
                    :
                    this.state.totalResults > 20 && this.state.currentMovie === null && this.state.searchTerm !== ''
                        ? <Pagination pages={numberPages} nextPage={this.nextPageSearchMovieHandler} currentPage={this.state.currentPage} />
                        : ''
                }
            </div>
        );
    };
};

export default Movies;