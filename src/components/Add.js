import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Add.css"
function Add() {

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

  const addCar =async (e) =>{
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
console.log(body);

// api call
const result = await axios.post('http://localhost:8000/add-car',body)
   alert(result.data.message);
  //  redirect to admin page
  location('/Admin')
}
  return (
    <div className=' row ' >
      <div style={{height:'110px'}}></div>

      <div className='col-6 image_side text-center text-light' >
<h1 class="mt-5 p-5">BRONZE CARS</h1>
<h2>Cars! Bikes! SUVs!</h2>
      </div>
        <div className=' mt-3  p-5 border rounded col-6 bg-secondary text-light' >
          <div className='bg-success text-light text-decoration-underline'style={{height:'50px'}}><h4>Enter Vehicle Details</h4></div>
    <Form>
    <Form.Group className="mb-3" controlId="formId">
      <Form.Label>Id</Form.Label>

        <Form.Control type="text" placeholder="" 
        onChange={(e)=>setId(e.target.value)}
        />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Car Name</Form.Label>

        <Form.Control type="text" placeholder="" 
        onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formModel">
      <Form.Label>Car Model</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setModel(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMake">
      <Form.Label>Manufacturer Name</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setMake(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formKms">
      <Form.Label>Km's Done</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setKms(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVarient">
      <Form.Label>Car varient</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setVarient(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTrans">
      <Form.Label>Transmission Type</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setTrans(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFuel">
      <Form.Label>Fuel </Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setFuel(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOwner">
      <Form.Label>Ownership status</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setOwner(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
      <Form.Label>Photo </Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setImage(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
      <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder=""
            onChange={(e)=>setPrice(e.target.value)}
            />
            </Form.Group>
      
      <Button onClick={(e)=>addCar(e)} variant="success" type="submit">
       Save <i class="fa-solid fa-floppy-disk ms-2"></i>
      </Button>
<Link to={'/Admin'}>

<Button className='ms-2' variant="warning" >
        Close
      </Button>
</Link>


    </Form>
    </div>

   
    </div>
  )
}

export default Add