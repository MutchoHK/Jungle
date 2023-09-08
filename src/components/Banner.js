import '../styles/banner.css';
import logo from '../assets/logo.png'

function Banner() {
    const title = "La Maison Jungle";
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommendation = isSpring ? (
        <div> C'est le printent, rempoter !</div>
    ) : (
        <div> Ce n'est pas le moment de rempoter</div>
    )
    return(
    <div className='lmj-banner'>
        <div className='lmj-banner-row'>
            <img src={logo} alt="La maison jungle" className='lmj-logo' />
            <h1> {title} </h1>
        </div>
        { recommendation }
    </div>
    )
}

export default Banner