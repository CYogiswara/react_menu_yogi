import "../styles/momenbahagia.css";
import momenIMG from "../assets/img_home-birthday.jpg";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const MomenBahagia = () => {

  useEffect(() => {
    AOS.init()
}, [])

  return (
    <div>
      <div className="momen-header">
        <img src={momenIMG} data-aos="fade-up" />
        <div className="momen-header-title-container" data-aos="fade-up">
          <h1>Ciptakan momen bahagia untuk si kecil</h1>
          <p>Semua hal seru hanya ada di Dunia Anak McDonald's</p>
          <button>Pelajari Selengkapnya</button>
        </div>
      </div>
      <svg className="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FEBA01"
          fill-opacity="1"
          d="M0,192L34.3,181.3C68.6,171,137,149,206,149.3C274.3,149,343,171,411,197.3C480,224,549,256,617,261.3C685.7,267,754,245,823,218.7C891.4,192,960,160,1029,165.3C1097.1,171,1166,213,1234,229.3C1302.9,245,1371,235,1406,229.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default MomenBahagia;
