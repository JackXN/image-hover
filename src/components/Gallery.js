import React from 'react'
import "./style.css";

const images = [
    'https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80'
]




const GalleryItem = ({src}) => {



    return (
        <div className='gallery-item-wrapper'>
            <div className='gallery'>
              
            </div>
        </div>
    )
}


function Gallery() {
    return (
        <div className='gallery'>
{images.map((src) => (
    <GalleryItem key={src} src={src}>

    </GalleryItem>
))}
        </div>
    )
}

export default Gallery
