
import React from 'react'
import Table from 'react-bootstrap/Table';

const CardsDetails = () => {
  return (
    <div className="container mt-2">
        <h2 className='text-center'>Items Details Page</h2>
        <section className="container mt-3">
            <div className="iteamsdetails">
                <div className="items_img">
                    <img src="https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg" alt="" />
                </div>
                <div className="details">
<Table>
    <tr>
        <td>
<p><strong>Resturant: </strong>Massala Theory</p>
<p><strong>Price: </strong>₨ 135</p>
<p><strong>Dishes: </strong>North Pakistani,Biryani,Halwa Puri</p>
<p><strong>Total: </strong>₨ 135</p>

        </td>
        <td>
        <p><strong>Rating </strong><span className="text-light"style={{background:"green",borderRadius:5,padding:"2px 5px"}}>3.5 ★</span></p>
<p><strong>OrderReview: </strong>1100 + order placed from here recently</p>
<p><strong>Remove: </strong><i className="fas fa-trash"style={{color:"red",fontSize:"20px",cursor:"pointer"}}></i></p>


        </td>
    </tr>
</Table>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CardsDetails