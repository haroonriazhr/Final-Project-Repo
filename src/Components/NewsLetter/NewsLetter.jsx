import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On your Email</h1>
        <p>Subscribe To Our News-Letter To Stay Updated.</p>
        <div className="input">
            <input type="email" placeholder='Enter Your E-Mail' />
            <button>Subscribe Now</button>
        </div>
    </div>
  )
}

export default NewsLetter