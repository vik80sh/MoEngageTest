import React, { Component } from 'react';
import {connect} from "react-redux";
import {updateSearchText} from './../../action/user.action'
import './searchbox.css';

class SearchBox extends Component {
    fetchAutoSearch = (event) => {
        this.debounce(event.target.value, 700);
    }
    debounce = (searchText, delay) => {
        let timer;
        let refrenceVariable = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            refrenceVariable.props.updateSearchText(searchText);
        }, delay);
    }
    render() {
        return (
            <div className="search-box-wrapper">
                <input
                    type="search"
                    placeholder="Type Company or Name"
                    className="search-box"
                    onChange={this.fetchAutoSearch}
                />
            </div >
        )
    }
}

export default  connect(null,{updateSearchText})(SearchBox)
