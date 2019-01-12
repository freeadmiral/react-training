import React from 'react';
import Like from './Like';

const MovieList = (props) => {
    const {onDelete,onLike,movies,onSorted}=props;
    return (

        <table className="table">
                <thead>
                    <tr>
                        <th onClick={()=>onSorted('title')}>Title</th>
                        <th onClick={()=>onSorted('genre.name')}>Genre</th>
                        <th onClick={()=>onSorted('stock')}>Stock</th>
                        <th onClick={()=>onSorted('rate')}>Rate</th>
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
                            <Like liked={movie.liked} onLiked={()=>onLike(movie)} />
                        </td>
                        <td>
                            <button 
                            onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
      );
}
 
export default MovieList;