import React from 'react';
import './FreshFood.css'

const FreshFood = () => {
    return (
        <div className='p-5'>
            <div>
                <h2 className='text-center p-4 text-success'> <i>Our Up coming Products</i> </h2>
            </div>
         <div className="container">
             <div className="row">
                 <div className="col-md-4">
                        <div id="fda_product_tile" class="col-12">

                            <div class="row fda_food_row">
                                <div class="col-9">
                                    <div class="food_tile active">
                                        <img src="https://idealbazar.net/wp-content/uploads/2021/07/morich.jpg" alt="" class="fda_product_img" />
                                        <span class="food_name">Dryest chilis</span>
                                        <span class="food_detail">Triple schezuan rice, combines hakka noodles, fried rice, crisp
                                            noodles and ..</span>
                                        <ul id="food_meta">
                                            <li>
                                                Calorie
                                                <span>325 CAL</span>
                                            </li>
                                            <li>
                                                Price
                                                <span><i class="fa fa-inr"></i> 550</span>
                                            </li>
                                        </ul>
                                        <button type="button" class="btn btn-sm btn-default">Order Now</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                 </div>
                 <div className="col-md-4">
                        <div id="fda_product_tile" class="col-12">

                            <div class="row fda_food_row">
                                <div class="col-9">
                                    <div class="food_tile active">
                                        <img src="https://media.istockphoto.com/photos/basmati-rice-with-a-spoon-picture-id489843870?k=20&m=489843870&s=612x612&w=0&h=giy3L0R3dB3DC8zoxRg1hvTSceIrFJ6Txbp9m4jvngM=" alt="" class="fda_product_img" />
                                        <span class="food_name">Basmoti Rice</span>
                                        <span class="food_detail">Triple Basmoti rice, combines hakka noodles, fried rice, crisp
                                            noodles and ..</span>
                                        <ul id="food_meta">
                                            <li>
                                                Calorie
                                                <span>325 CAL</span>
                                            </li>
                                            <li>
                                                Price
                                                <span><i class="fa fa-inr"></i> 550</span>
                                            </li>
                                        </ul>
                                        <button type="button" class="btn btn- btn-default   ">Order Now</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                 </div>
                 <div className="col-md-4">
                        <div id="fda_product_tile" class="col-12">

                            <div class="row fda_food_row">
                                <div class="col-9">
                                    <div class="food_tile active">
                                        <img src="https://c8.alamy.com/comp/2ABYT9C/poznan-pol-mar-28-2019-package-of-dilmah-a-famous-sri-lankan-brand-of-tea-founded-in-1988-by-merrill-j-fernando-2ABYT9C.jpg" alt="" class="fda_product_img" />
                                        <span class="food_name">Dil mahi tea-left</span>
                                        <span class="food_detail">Triple schezuan rice, combines hakka noodles, fried rice, crisp
                                            noodles and ..</span>
                                        <ul id="food_meta">
                                            <li>
                                                Calorie
                                                <span>325 CAL</span>
                                            </li>
                                            <li>
                                                Price
                                                <span><i class="fa fa-inr"></i> 550</span>
                                            </li>
                                        </ul>
                                        <button type="button" class="btn btn-sm btn-default">Order Now</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                 </div>
             </div>
         </div>
            
        </div>
    );
};

export default FreshFood;