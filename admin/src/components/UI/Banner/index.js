import React from 'react';
import '../../../App.css';
import OwlCarousel from 'react-owl-carousel2';
/**
* @author
* @function Banner
**/
const options = {
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
};

const Banner = (props) => {
    return (
        <>
            <div className="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={options} className="owl-carousel owl-theme">
                                {/* <div > */}
                                <div className="item" style={{ backgroundImage: `url(${'/assets/images/banner.jpg'})` }}></div>
                                {/* </div> */}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Banner