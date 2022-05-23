import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FreshFood from '../FreshFood/FreshFood';
import HomeItem from '../HomeItem/HomeItem';
import PopularPart from '../PopulatPart/PopularPart';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 className='text-dark'>A different kind of grocery store</h4>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 className='text-dark'>A different kind of grocery store</h1>
                         
                        </Carousel.Caption>
                    </Carousel.Item>
                  
                </Carousel>

            </div>
           
               
            
            <div>
                <FreshFood></FreshFood>
                <PopularPart></PopularPart>
                <HomeItem></HomeItem>
                
                
                <Link className='d-flex align-items center justify-content-center p-3 btn btn-success' to='/myItem'> <i>See All Products</i> </Link>
            </div>
        </div>
    );
};

export default Home;