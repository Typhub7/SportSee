import halteres from "../../assets/icone-halteres.png";
import relaxation from "../../assets/icone-relaxation.png";
import natation from "../../assets/icone-natation.png";
import velo from "../../assets/icone-velo.png";
import './submenu.css'


const Submenu = () => {
  return (
    <div className='side_container bg-black w-28'>
        <div className="sport_container">
            <img className='w-16' src={relaxation} alt="bouton relaxation" />
            <img className='w-16' src={natation} alt="bouton natation" />
            <img className='w-16' src={velo} alt="bouton velo" />
            <img className='w-16' src={halteres} alt="bouton halteres" />
        </div>
        <div>
            <p className="copyright -rotate-90 text-white text-nowrap">Copyright, SportSee 2023</p> 
        </div>
    </div>
  )
}

export default Submenu