import React, { Component } from 'react'

export default class ImageCard extends Component {  
  


    render() {
        const {alt_description , urls} = this.props.image;
    return (
      <div>
        <img alt={alt_description}
        src={urls.regular}
        
        
        />
    </div>
    )
  }
}
