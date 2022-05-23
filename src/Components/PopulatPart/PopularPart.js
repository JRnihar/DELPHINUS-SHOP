import React from 'react';
import './PopularPart.css'

const PopularPart = () => {
    return (
        <div className='popular-body p-5' >
            <section >
                
                <h3 className='text-center mb-3 text-success'> <i>Popular this week</i> </h3>
                        <div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center justify-content-center ms-3'>
                                        <div>
                                    <img className='img me-3' src="https://thumbs.dreamstime.com/b/chocolate-cocoa-powder-chocolate-pieces-cocoa-powder-bowl-balls-wooden-table-125953683.jpg" alt="" />
                                        </div>
                                        <div>
                                    <span class="product_title">Chocolate</span>
                                    <span class="product_rating">
                                        <i class="fa fa-star"></i>
                                        {/* <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> */}
                                        <i class="fa fa-star-half"></i>
                                        <span class="rating_avg">(4.5)</span>
                                    </span>
                                    <span class="product_price">
                                        <i class="fa fa-inr"></i> 250.00
                                    </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 mb-3">
                            <div className='d-flex align-items-center justify-content-center ms-3'>
                                <div>
                                    <img className='img me-3' src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg" alt="" />
                                </div>
                                <div>
                                    <span class="product_title">Ice-cream</span>
                                    <span class="product_rating">
                                        <i class="fa fa-star"></i>
                                        {/* <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> */}
                                        <i class="fa fa-star-half"></i>
                                        <span class="rating_avg">(4.5)</span>
                                    </span>
                                    <span class="product_price">
                                        <i class="fa fa-inr"></i> 250.00
                                    </span>
                                </div>
                            </div>
                                </div>
                                <div className="col-md-4 mb-3">
                            <div className='d-flex align-items-center justify-content-center ms-3'>
                                <div>
                                    <img className='img me-3' src="https://article.innovadatabase.com/articleimgs/article_images/637297093247218533juices.jpeg" alt="" />
                                </div>
                                <div>
                                    <span class="product_title">Juice</span>
                                    <span class="product_rating">
                                        <i class="fa fa-star"></i>
                                        {/* <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> */}
                                        <i class="fa fa-star-half"></i>
                                        <span class="rating_avg">(4.5)</span>
                                    </span>
                                    <span class="product_price">
                                        <i class="fa fa-inr"></i> 250.00
                                    </span>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                
               
                {/* <div class="row fda_section_row">
                    <div class="section_product_tile row col-md-3">
                        <div class="col-4 justify-content-center align-self-center">
                            <img src="https://i.postimg.cc/dLzR8NLL/chenna-poda.png" alt=""/>
                        </div>
                        <div class="col-6 justify-content-center align-self-center section_meta">
                            <span class="product_title">Chenna Poda</span>
                            <span class="product_rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half"></i>
                                <span class="rating_avg">(4.5)</span>
                            </span>
                            <span class="product_price">
                                <i class="fa fa-inr"></i> 250.00
                            </span>
                        </div>
                    </div>
                    
                </div> */}
            </section>
            
        </div>
    );
};

export default PopularPart;