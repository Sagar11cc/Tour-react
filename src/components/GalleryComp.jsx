import LightGallery from 'lightgallery/react';
import India from '../assets/India.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import Paris from '../assets/Paris.jpg'
import Venice from '../assets/Venice.jpg'
import Bali from '../assets/Bali.jpg'

import '../components/CSS/Gallery.css'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery=()=> {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                
            >
                <a href="/India.jpg">
                    <img alt="img1" src='/India.jpg'/>
                </a>
                <a href='/Hero1.jpg'>
                    <img alt="img2" src='/Hero1.jpg' />
                </a>
                <a href='/Hero2.jpg'>
                    <img alt="img2" src='/Hero2.jpg' />
                </a>
                <a href='/Hero3.jpg'>
                    <img alt="img2" src='/Hero3.jpg' />
                </a>
                <a href='/Hero4.jpg'>
                    <img alt="img2" src='/Hero4.jpg' />
                </a>
                <a href='/Bali.jpg'>
                    <img alt="img2" src='/Bali.jpg' />
                </a>
                <a href='/Venice.jpg'>
                    <img alt="img2" src='/Venice.jpg' />
                </a>
                <a href='/Paris.jpg'>
                    <img alt="img2" src='/Paris.jpg' />
                </a>
                <a href='/Tokyo.jpg'>
                    <img alt="img2" src='/Tokyo.jpg' />
                </a>
               
                
            </LightGallery>
        </div>
    );
}

export default Gallery;
