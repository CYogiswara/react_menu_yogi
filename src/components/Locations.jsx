import '../styles/locations.css'

const Locations = () => {
    return ( 
        <div className="locations-container">
            <h1 className='locations-title'>Our Location</h1>
            <p className='locations'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.7870769983!2d106.56899824335935!3d-6.2810330999999895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa978ce45085%3A0x5e8c6715f85ea4dd!2sMcDonald&#39;s%20Bintaro%20Sektor%209!5e0!3m2!1sid!2sid!4v1709282080926!5m2!1sid!2sid" width="600" height="450" style={{border: '4px solid grey', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
     );
}
 
export default Locations
