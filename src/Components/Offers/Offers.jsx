import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-l">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <h5>only best sellers products</h5>
            <button>Check Now</button>
        </div>
        <div className="offer-r">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
    </div>
  )
}

export default Offers