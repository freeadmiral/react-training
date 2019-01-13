import React, { Component } from 'react';

class TableHeader extends Component {
     raiseSort=(path)=>{
        const sortedItem={...this.props.sortedItem};
        if(sortedItem.path===path){
            sortedItem.order=sortedItem.order==='asc' ? 'desc' : 'asc';
        }else{
            sortedItem.path=path;
            sortedItem.order='asc';
        }
        this.props.onSorted(sortedItem);
    };
    render() { 
        return (
        <thead>
            <tr>
                {this.props.columns.map(column =>(
                    <th key={column.path || column.key} onClick={()=>this.raiseSort(column.path)}>{column.label}</th>
                ))}        
            </tr>
        </thead>
        );
    }
}
 
export default TableHeader;