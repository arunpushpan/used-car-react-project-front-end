import React,{useEffect,useState} from 'react'
import {Link, useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import "./Edit.css"
function Edit() {
  const [id,setId] = useState('')
  const [carName,setName] = useState('')
  const [carKms,setKms] = useState(0)
  const [carModel,setModel] = useState(0)
  const [carMake,setMake] = useState('')
  const [carImage,setImage] = useState('')
  const [carPrice,setPrice] = useState(0)
  const [carFuel,setFuel] = useState('')
  const [carOwner,setOwner] = useState('')
  const [carsVarient,setVarient] = useState('')
  const [carTrans,setTrans] = useState('')


  let location = useNavigate()

  const params = useParams()
  console.log(params.id);
// api call to get details of a particular car
const fetchcar=async ()=>{
  const result =await axios.get('http://localhost:8000/get-a-car/'+params.id)
setId(result.data.car.id);
setName(result.data.car.name);
setKms(result.data.car.kms);
setModel(result.data.car.model);
setMake(result.data.car.make);
setImage(result.data.car.image);
setPrice(result.data.car.price);
setFuel(result.data.car.fuel);
setOwner(result.data.car.owner);
setVarient(result.data.car.varient);
setTrans(result.data.car.transmission);
}


const editCar =async (e) =>{
  e.preventDefault()
const body = {
  id,
   carName,
   carKms,
   carModel,
   carMake,
   carImage,
   carPrice,
   carFuel,
   carOwner,
   carsVarient,
   carTrans
}

// api call
const result = await axios.post('http://localhost:8000/update-car',body)
alert(result.data.message);
//   redirect to admin page
location('/Admin')
}


useEffect(()=>{
fetchcar()
},[])



  return (
   <div class="container">
      <div class="row">
              <div style={{height:'110px'}}></div>
  
         <div  className=' mt-3   p-5 border rounded col-7 bg-secondary text-light'>
          <div className='bg-warning text-dark text-decoration-underline' style={{height:'50px'}}><h4>Update Vehicle Details Here</h4></div>
      <Form style={{borderRadius:'20px'}}>
      {/* <Form.Group className="mb-3" controlId="formId">
        <Form.Label>Id</Form.Label>
  
          <Form.Control type="text" placeholder="" value={id}
          onChange={(e)=>setId(e.target.value)}
          />
         
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Car Name</Form.Label>
  
          <Form.Control type="text" placeholder="" value={carName}
          onChange={(e)=>setName(e.target.value)}
          />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formModel">
        <Form.Label>Car Model</Form.Label>
      <Form.Control type="text" placeholder="" value={carModel}
              onChange={(e)=>setModel(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formMake">
        <Form.Label>Manufacturer Name</Form.Label>
      <Form.Control type="text" placeholder="" value={carMake}
              onChange={(e)=>setMake(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formKms">
        <Form.Label>Km's Done</Form.Label>
      <Form.Control type="text" placeholder="" value={carKms}
              onChange={(e)=>setKms(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formVarient">
        <Form.Label>Car varient</Form.Label>
      <Form.Control type="text" placeholder="" value={carsVarient}
              onChange={(e)=>setVarient(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formTrans">
        <Form.Label>Transmission Type</Form.Label>
      <Form.Control type="text" placeholder="" value={carTrans}
              onChange={(e)=>setTrans(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formFuel">
        <Form.Label>Fuel </Form.Label>
      <Form.Control type="text" placeholder="" value={carFuel}
              onChange={(e)=>setFuel(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formOwner">
        <Form.Label>Ownership status</Form.Label>
      <Form.Control type="text" placeholder="" value={carOwner}
              onChange={(e)=>setOwner(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Photo </Form.Label>
      <Form.Control type="text" placeholder="" value={carImage}
              onChange={(e)=>setImage(e.target.value)}
              />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="" value={carPrice}
              onChange={(e)=>setPrice(e.target.value)}
              />
              </Form.Group>
        
        <Button onClick={(e)=>editCar(e)} variant="success" type="submit">
          Update
        </Button>
  <Link to={'/Admin'}>
  
  <Button className='ms-2' variant="warning" type="submit">
          Close
        </Button>
  </Link>
  
  
      </Form>
      </div>
  <div className="col-5 image_side text-white">
  <h1 class="mt-5 p-5">BRONZE <span class="text-info">Cars</span></h1>
  <h2>Cars! Bikes! SUVs!</h2>
  </div>
  
      </div>
   </div>
  )
}

export default Edit