import React from 'react';
import {IoIosLink} from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { FiPhone, FiHeart } from 'react-icons/fi'
import { FaRegCalendarCheck } from 'react-icons/fa'
import Slider from "react-slick";
import { GiChickenOven } from "react-icons/gi";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function PlaceOne({places}) {
    return (
        <div className="row mt-3">
            <div className="col-lg-12">
                <Slider className="places-carousel"  infinite={true} slidesToScroll={1} arrows={true} slidesToShow={7} centerMode={false} centerPadding="20px"  >
                    {places.map((item, index) => {
                        return (
                            <div className="card-item " key={index}>
                                <a href={'#'} className="card-image-wrap">
                                    <div className="card-image-new radius-rounded" style={{backgroundColor: 'transparent !important'}}>
                                        <div className='p-2'>
                                            {/* <div > */}
                                        <GiChickenOven style={{width:'30px',height:'30px'}}/> 
                                            {/* </div> */}
                                        <p>{item.title}</p>
                                        </div>
                                        {/* <img src={item.image} className="card__img" alt="Place" />
                                        <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span> */}
                                        {/* <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            <FiHeart />
                                        </span> */}
                                    </div>
                                </a>
                              
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default PlaceOne;
