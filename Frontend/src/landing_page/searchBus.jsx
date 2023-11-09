export default function SearchPannel(){
    return(<div style={{height:"200px",backgroundColor:"grey"}}>
<div class="container text-center mt-4">
  <div class="row">
    <div class="col-sm-3 gx-5 ">
      from
    </div>
    <div class="col-sm-3">
     to
    </div>
    <div class="col-sm-3">
      <input type="date"/>
    </div>
    <div className="col-sm-3">
    <button type="button" class="btn btn-danger btn-lg">Search</button>
    </div>
  </div>
</div>




    </div>)
}