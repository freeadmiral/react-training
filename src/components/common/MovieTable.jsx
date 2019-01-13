import React, { Component } from 'react';
import Like from './Like';
import TableHeader from './TableHeader';

class MovieTable extends Component {
     columns=[
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'stock',label:'Stock'},
        {path:'rate',label:'Rate'},
        {key:'like'},
        {key:'delete' }
    ];
    render() { 
        const {onDelete,onLike,movies,sortedItem,onSorted}=this.props;
        return (
            <table className="table">
                    <TableHeader columns={this.columns} sortedItem={sortedItem} onSorted={onSorted}/>
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
}
 
export default MovieTable;