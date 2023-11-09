import React from 'react'
import img1 from '../img/images.png'

function Crousel() {
  return (
   <div className='container-fluid ms-5'>
 <div className='row'>
 <div class="card text-center m-5" style={{width: "18rem"}}>
 <img src={img1} height="150px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
  </div>
</div>


<div class="card text-center m-5" style={{width: "18rem"}}>
 <img src={img1} height="150px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
  </div>


  
</div>






<div class="card text-center m-5" style={{width: "18rem"}}>
 <img src={img1} height="150px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
  </div>


  
</div>

    </div>

   </div>
  )
}

export default Crousel