import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  render() {
    const { grabText, searchPostFn } = this.props;

    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            placeholder="Search Your Feed" 
            onChange={ (e) => grabText(e.target.value) } />

          <SearchIcon id="Search__icon" onClick={ () => searchPostFn() }/>
        </div>
        
      </section>
    )
  }
}