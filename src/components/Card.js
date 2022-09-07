const Card = ({ title, image }) => {
 
  return <div className="card w-96 bg-base-100 shadow-xl image-full mr-5 mb-5">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See All</button>
    </div>
  </div>
</div>
  }
  
  export default Card


