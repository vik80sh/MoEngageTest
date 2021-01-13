import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateCurrentPage } from './../../action/user.action'
import './pagination.css'

class PaginationList extends Component {
    constructor() {
        super();
        this.state = {
            listSize: 0,
            currentPage: 1,
            rightIndex:4,
            leftIndex:1
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.listSize !== this.props.listSize) {
            let listSize = Math.ceil(nextProps.listSize / 10)
            this.setState({ listSize })
        }
        if (nextProps.currentPage !== this.props.currentPage)
            this.setState({ currentPage: nextProps.currentPage })
        return true;
    }
    updateIndex=(pageIndex, intruction)=>{
        this.props.updateCurrentPage(pageIndex);
        // const { listSize, leftIndex, rightIndex } = this.state;

        // if(pageIndex+1 === this.state.rightIndex){
        //     this.setState({rightIndex:this.state.rightIndex + 4,leftIndex:pageIndex})
        // }
        // if(pageIndex===rightIndex-1 && intruction=== "b"){
        //     this.setState({leftIndex:pageIndex-4})
        // }
    }
    render() {
        const { currentPage, listSize, leftIndex, rightIndex } = this.state;
        console.log("----- -- ",this.state)
        return (
            <div className="pagination-wrapper">
                <div className="pagination">
                    {[...Array(listSize)].map((page, key) => {
                        let activeClass = currentPage === key + 1 ? "active span-btn" : "span-btn"
                        return (
                            <span >
                                {<span className={activeClass} onClick={() => this.updateIndex(key + 1)}>{key + 1}</span>}
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.hybridReducer.currentPage,
        listSize: state.hybridReducer.listSize
    }
}
export default connect(mapStateToProps, { updateCurrentPage })(PaginationList);
