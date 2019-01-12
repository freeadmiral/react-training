import React, { Component } from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

class Pagination extends Component {
    render() { 
        const {pageSize,itemsCount,onPageChange,currentPage}=this.props;
        let pagesCount= Math.ceil(itemsCount/pageSize);
        if(pagesCount===1) return null;
        const pages=_.range(1,pagesCount+1);

        return ( 
        <nav>
        <ul className="pagination">
        {pages.map(page=>(
            <li key={page} className={page===currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
            </li>
        ))}
        </ul>
      </nav> );
    }
}

Pagination.propTypes={
    pageSize:propTypes.number.isRequired,
    itemsCount:propTypes.number.isRequired,
    currentPage:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired
};
 
export default Pagination;