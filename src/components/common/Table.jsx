import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = props => {
    const {columns,sortedItem,onSorted,movies}=props;
    return ( 
        <table className="table">
            <TableHeader columns={columns} sortedItem={sortedItem} onSorted={onSorted}/>
            <TableBody movies={movies} columns={columns} />
        </table>
     );
}
 
export default Table;