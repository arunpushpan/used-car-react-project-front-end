import React,{useEffect,useState} from 'react'
import { Link,useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "./View.css";
function View() {

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
    console.log(id);
    console.log(carName);
    console.log(carModel);
    console.log(carMake);
    console.log(carPrice);

    

useEffect(()=>{
fetchcar()
},[])

  return (
    <div className='container mb-3'>
          <div style={{height:'70px'}}></div>
  

    <div class="container " >
		<div class="card ">
      <div class="heading bg-success text-decoration-underline"><h3>Come and visit us now!! Its Now or Never deal!!</h3></div>
			<div class="container-fliud mt-5">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={carImage} /></div>
						  
						</div>
					
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{carName}</h3>
            <h3 class="product-title">  {carsVarient}</h3>

						<div class="rating">
						
							<span class="review-no">{carMake}</span>
						</div>
            
            <h5 class="text-secondary">Model:
							<span class="text-dark"> {carModel}</span>
							
						</h5>
						<h4 class="price">Price: <span>₹ {carPrice}</span></h4>
						<p class="vote"><strong>{carKms} Kms</strong> </p>
						<h5 class="text-secondary">Ownership Status:
							<span class="text-dark" > {carOwner}</span>
							
						</h5>
						<h5 class="text-secondary">Transmission:
							<span class="text-dark"> {carTrans}</span>
							
						</h5>
            <h5 class="text-secondary">Fuel Type:
							<span class="text-dark"> {carFuel}</span>
							
						</h5>
						<div class="action">
<Link to={'/'}>
  							<button style={{width:'200px'}} class=" btn btn-outline-secondary mt-2" type="button">Close</button>

</Link>						
</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    </div>


  )
}

export default View