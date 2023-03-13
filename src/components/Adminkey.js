import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function Adminkey() {
    const[allCars,setallCars]=useState([])

    const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/get-all-cars')
            setallCars(result.data.cars);
    
        }
        console.log(allCars);
        useEffect(() => {
            fetchData()
        }, [])
     // handledelete
    const carDelete = async (id)=>{
        const result = axios.delete('http://localhost:8000/delete-car/'+id)
        alert((await result).data.message);
        fetchData()
    }
  return (
    <div>
        <div style={{height:'120px'}}></div>

    <div className='container-fluid mt-5'>
       


        <div className='container mt-2 mb-2'>
            <div className='bg-secondary mt-5 ' style={{marginTop:'50px', backgroundImage:'URL(https://wallpapershome.com/images/pages/pic_h/22197.jpeg)' , backgroundSize:'contain'}}>
                <div><h1 className='text-light'>STOCK DETAILS</h1></div>
               <div  className='mb-3'>
                    <Link to={'/add'}>
                    <button className='btn btn-primary mb-3'><i class="fa-solid fa-plus me-2"></i>Add New Car</button>
                    </Link>
               </div>
                </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Fuel</th>
                        <th>Kms Driven</th>
                        <th>Transmission</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCars?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} alt="No image" style={{width:'50px'}}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.model}</td>
                                <td>{item.fuel}</td>
                                <td>{item.kms} Km</td>
                                <td>{item.transmission}</td>
                                <td>₹ {item.price}</td>

                                <td>
<Link to={'/edit/'+item.id}>
    <button className='btn btn-info me-3' style={{borderRadius:'50%'}}> <i className="fa-solid fa-pen text-light"></i></button>

</Link  >                                             
<button onClick={()=>carDelete(item.id)} className='btn btn-danger' style={{borderRadius:'50%'}}> <i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        ))

                    }

                </tbody>
            </Table>
        </div>
    </div>
</div>  )
}

export default Adminkey