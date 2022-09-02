import React, { Component } from 'react';



class GalleryImage extends Component {
    
    render() { 
        
        return (
                <img src={this.props.url} className={this.setStyle()}></img>
                
        );
    }

    setStyle() {
        let imgType = "img-";
        if (this.props.id === 2 || this.props.id === 3)
            imgType += "front";
        else if ((this.props.id === 1 || this.props.id === 4))
            imgType += "back";
        return imgType;
    }

    
}
 
export default GalleryImage;