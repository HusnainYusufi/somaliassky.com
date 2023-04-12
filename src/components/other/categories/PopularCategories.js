import React from 'react';
import {Link} from "react-router-dom";


function PopularCategories({catitems}) {

    return (
        <>
            {catitems.map((item, index) => {
                return (
                    <div className="col-lg-2 col-md-4 column-td-4" key={index}>
                        <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                            <figure className="category-fig m-0">
                                <img src={item.img} alt="category" className="cat-img" width={'40px'} height={'140px'}/>
                                <figcaption className="fig-caption">
                                    <Link to={item.url} className="cat-fig-box">
                                        {/* <div className="icon-element mb-3">
                                            {item.icon}
                                        </div> */}
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3 p-1">{item.title}</h4>
                                            <span className="badge"></span>
                                        </div>
                                    </Link>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default PopularCategories;
