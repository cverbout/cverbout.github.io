import React, { Component } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import "./gallery.css"
import GalleryImage from './gallery-img';
import { Icon } from '@iconify/react';



class Gallery extends Component {


    constructor(props)
    {
        super(props);

        this.state = {
        images: 
        [
            {id: 1, url: this.props.pictures[0].url, pictureNum: 0},
            {id: 2, url: this.props.pictures[1].url, pictureNum: 1},
            {id: 3, url: this.props.pictures[2].url, pictureNum: 2},
            {id: 4, url: this.props.pictures[3].url, pictureNum: 3}
        ],
        
    };
        
    }
    

    render() { 
        return (
            
            <div className='mw__gallery'>
                <button className="btn">
                <Icon onClick={() => {this.updatePositions('l')}}  icon="bi:arrow-left-circle-fill" style={this.props.style} width="64" height="64" />
                    {/* <FontAwesomeIcon icon={solid('arrow-left')} /> */}
                </button>
                <div className='mw__gallery-images'>
                    {this.state.images.map(image => <GalleryImage
                        key={image.id}
                        url={image.url}
                        id={image.id}
                        />)}
                   </div>
                <button className="btn">
                <Icon onClick={() => {this.updatePositions('r')}}  icon="bi:arrow-right-circle-fill" style={this.props.style} width="64" height="64" />
                    {/* <FontAwesomeIcon icon={solid('arrow-right')} /> */}
                </button>
            </div>
        );
    }

    updatePositions = direction =>
    {
        const images = [...this.state.images];
        const galleryLen = this.props.pictures.length;
        for (let i = 0; i < images.length; ++i)
        {
            images[i] = {...this.state.images[i]};
            if (direction === 'l')
                images[i].pictureNum = images[i].pictureNum < galleryLen - 1 ? images[i].pictureNum + 1 : 0;
            else if (direction === 'r')
                images[i].pictureNum = images[i].pictureNum > 0 ? images[i].pictureNum - 1 : galleryLen - 1;
                
            images[i].url = this.props.pictures[images[i].pictureNum].url;
            this.setState({ images });
        }
    };

}



export default Gallery;