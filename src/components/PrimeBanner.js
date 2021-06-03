import {Image, Container, Overlay} from 'react-bootstrap';

const primeBannerPhoto = require("../assets/images/prime_banner.png");


const PrimeBanner = () => {
    return (
        <div>
           <div>
                <Image src={primeBannerPhoto.default} fluid width='100%'/>
           </div>
        </div>
    )
}



export default PrimeBanner
