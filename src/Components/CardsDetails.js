
import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const CardsDetails = () => {
    const [data, setdata] = useState([]);
    const {id}=useParams(); 
    console.log(id);
    const getData = useSelector((state)=>
    state.reducer.carts
  )
  const compare=()=>{
let compareData=getData.filter((e)=>{
return e.id==id
})
setdata(compareData);
  }
  useEffect(() => {
    compare();
  }, [id])
  
  return (
    <div className="container mt-2">
        <h2 className='text-center'>Items Details Page</h2>
        <section className="container mt-3">
            <div className="iteamsdetails">
                {
                    data.map((ele)=>{
return (
    <>
    
    <div className="items_img">
                    <img src={ele.imgdata}alt="" />
                </div>
                <div className="details">
<Table>
    <tr>
        <td>
<p><strong>Resturant: </strong>{ele.rname}</p>
<p><strong>Price: </strong>₨ {ele.price}</p>
<p><strong>Dishes: </strong>{ele.address}</p>
<p><strong>Total: </strong>₨ 135</p>

        </td>
        <td>
        <p><strong>Rating </strong><span className="text-light"style={{background:"green",borderRadius:5,padding:"2px 5px"}}>{ele.rating}★</span></p>
<p><strong>OrderReview: </strong>{ele.somedata}</p>
<p><strong>Remove: </strong><i className="fas fa-trash"style={{color:"red",fontSize:"20px",cursor:"pointer"}}></i></p>


        </td>
    </tr>
</Table>
                </div>
    
    </>
)
                    })
                }
                
            </div>
        </section>
    </div>
  )
}

export default CardsDetails