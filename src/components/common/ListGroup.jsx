import React from 'react';

const ListGroup = (props) => {
    const {onGenres,onSelectGenre,genreSelected}=props;
    return ( 
    <ul className="list-group m-4">
    {onGenres.map(genre=>(
        <li style={{cursor:'pointer'}} key={genre.id} onClick={()=>onSelectGenre(genre)} 
        className={genre===genreSelected ? "list-group-item active":"list-group-item"}>{genre.name}</li>
    ))}
    </ul> 
  );
}
 
export default ListGroup;
