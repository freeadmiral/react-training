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

    renderSortIcon=column=>{
        const {sortedItem}=this.props;
        if(column.path!==sortedItem.path) return null;
        if(sortedItem.order==='asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>;
    };

    render() { 
        return (
        <thead>
            <tr>
                {this.props.columns.map(column =>(
                    <th key={column.path || column.key}
                     onClick={()=>this.raiseSort(column.path)}>
                     {column.label} {this.renderSortIcon(column)}
                    </th>
                ))}        
            </tr>
        </thead>
        );
    }
}
 
export default TableHeader;