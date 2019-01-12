import React,{Component} from "react";
import {getMovies} from '../services/fakeServices';
import Like from './common/Like';
import Pagination from './common/Pagination';
import {paginate} from '../utils/paginate';
import {getGenre} from '../services/fakeGenreServices';
import ListGroup from './common/ListGroup';

class Movies extends Component{
    state={
        movies:[],
        genres:[],
        pageSize:4,
        currentPage:1,
    };

    componentDidMount(){
        const genres=[{name:"All Genres"},...getGenre()];
        this.setState({ movies:getMovies(),genres});
    }

    handleDelete= movie =>{
    const movies=this.state.movies.filter(m=>m._id!==movie._id);
    this.setState({movies});
    };

    handleLike=(movie) =>{
        const movies=[...this.state.movies];
        const index=movies.indexOf(movie);
        movies[index].liked=!movies[index].liked;
        this.setState({movies});
    };

    handlePageChange=(page)=>{
        this.setState({currentPage:page});
    };

    handleGenre=(genre)=>{
        this.setState({selectedGenre:genre,currentPage:1});
    };
    render(){
        const {length:count}=this.state.movies;
        const {movies:allMovies,pageSize,currentPage,selectedGenre}=this.state;
        
        if (count===0) return <p>There are no movies</p>;

        const filtered=selectedGenre && selectedGenre.id ? allMovies.filter
        (m=>m.genre.id===selectedGenre.id) : allMovies;

        const movies=paginate(filtered,currentPage,pageSize);

        return(
            <div className="row">
                <div className="col-3">
                <ListGroup onGenres={this.state.genres} 
                    onSelectGenre={this.handleGenre} 
                    genreSelected={selectedGenre} />
                </div>
                <div className="col">
                <p>Showing {filtered.length} movies in there</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th/>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>(
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.stock}</td>
                        <td>{movie.rate}</td>
                        <td>
                            <Like liked={movie.liked} onLiked={()=>this.handleLike(movie)} />
                        </td>
                        <td>
                            <button 
                            onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
            />
                </div>            
            </div>   
        )
    }
}

export default Movies;