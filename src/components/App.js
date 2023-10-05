import React, { Component } from 'react';
import SearchBox from './SearchBox';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
 const response = await unsplash.get('/search/photos', {
   params: {
      query: term,
    },
 });

    this.setState({ images: response.data.results });
  };

  render() {
    const { images } = this.state;

    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBox onSubmit={this.onSearchSubmit} />
        
        <ImageList image={this.state.images}/>
        
      </div>
    );
  }
}