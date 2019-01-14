import React, { Component } from 'react';
import Like from './Like';
import Table from './Table';

class MovieTable extends Component {
     columns=[
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'stock',label:'Stock'},
        {path:'rate',label:'Rate'},
        {key:'like',content: movie => <Like liked={movie.liked} onLiked={()=>this.props.onLike(movie)} />},
        {key:'delete', content: movie => <button 
            onClick={()=>this.props.onDelete(movie)} className="btn btn-danger btn-sm">
            Delete
            </button>
         }
        ];
    render() { 
        const {movies,sortedItem,onSorted}=this.props;
        return (
            <Table movies={movies} sortedItem={sortedItem} onSorted={onSorted} columns={this.columns}/>
          );
    }
}
 
export default MovieTable;