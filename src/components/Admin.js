import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Admin.css";
function Admin() {

const[allCars,setallCars]=useState([])

const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-cars')
        // console.log(result.data.cars);
        setallCars(result.data.cars);

    }
    console.log(allCars);
    useEffect(() => {
        fetchData()
    }, [])



  return (
    <div>
<div style={{height:'120px'}}></div>
{/* carousel design */}
<Carousel variant="light">
      <Carousel.Item>
        <img style={{height:'450px'}}
          className="d-block w-100"
          src="https://img.indianautosblog.com/2021/02/24/2021-maruti-swift-in-action-5053.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>A Car For All Budgets</h3>
          <p>Vehicles you love at costs you can not help it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'450px'}}
          className="d-block w-100"
          src="https://www.thrustzone.com/wp-content/uploads/2023/01/Tata-Harrier-Red-Dark-Edition-4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Affordable And Like New</h3>
          <p>The vehicle sales center you had always wanted.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'450px'}}
          className="d-block w-100"
          src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/933/web-content/site_slider_filename.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Come Look At The Selection!</h3>
          <p>
          Simply envision how vehicle can help you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* slogan design */}

<header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                 
                <h1 className="display-4 fw-bolder">                
                  Driven By Passion
                 
                  </h1>
                    <p className="lead fw-normal text-info mb-0">Come and See what we offer</p>
                </div>
            </div>
        </header>

{/* card design */}

 <div className='container-fluid text-center mt-5 d-flex'>
 

<div class="container-fluid ">
    
	<div class="row " id="ads">
  {
    allCars?.map((item)=>(

    <div class="column col-md-4">
                            <Link to={'view/'+item.id}>

        <div class="card rounded m-4">
            <div class="card-image">
                <span class="card-notify-badge">{item.fuel}</span>
                <span class="card-notify-year">{item.model}</span>
                <img class="img-fluid" style={{height:'200px'}} src={item.image} alt="No Image" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="price card-detail-badge me-2">₹ {item.price}</span>
                <span class="card-detail-badge">{item.kms} Kms</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto " style={{textDecoration:'none'}}>
                    <h4 class="text-dark">{item.name}</h4>
                    <h5>{item.make}</h5>

                </div>
                {/* <a class="ad-btn" href="#">View</a> */}
             {/* <button className='btn btn-outline-primary'>View More Details</button> */}

            </div>
        </div>
             </Link  >

    </div>

))
   
}
</div>
</div>
    
 </div>

 {/* customers */}
 <section class="testimonials text-center bg-light">
            <div class="container test_card mb-4 mt-5">
                <h2 class="mb-5">Listen to our valuable Customers!</h2>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img style={{height:'200px', width:'200px'}} class="img-fluid rounded-circle mb-3" src="https://m.media-amazon.com/images/M/MV5BMTMyMjZlYzgtZWRjMC00OTRmLTllZTktMmM1ODVmNjljMTQyXkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_.jpg" alt="..." />
                            <h5>John Travolta</h5>
                            <p class="font-weight-light mb-0">They have an entire department dedicated to getting you the right car at the right price.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img style={{height:'200px', width:'200px'}}  class="img-fluid rounded-circle mb-3" src="https://www.southernliving.com/thmb/lcUrjNpWdPUa4f_y9Gw7QX3cabg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1061320864-2000-f460f5805bba422f9e77c69ca5d5c849.jpg" alt="..." />
                            <h5>Emiley Xavier</h5>
                            <p class="font-weight-light mb-0">Get more for your money at Bronze cars. Make every customer feel welcome</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img style={{height:'200px', width:'200px'}}  class="img-fluid rounded-circle mb-3" src="https://de.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/52/66/20426137.jpg" alt="..." />
                            <h5>Kinley Stevens</h5>
                            <p class="font-weight-light mb-0">The best name in car buying, they work hard to make sure that you’re satisfied</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Admin