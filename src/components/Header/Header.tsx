import logo from "../../assets/logo.png";
import './header.css'
import Navigation from '../Navigation/Navigation';

/** Header component displaying the Sportsee logo and navigation.
 * 
 * @returns {JSX.Element} The header component.
 */
const Header: React.FC = () => {
    return (
        <header className='header flex flex-row justify-between items-center  w-full'>           
            <div className='logo_container'>
                <img className='mt-4 mr-7 ml-7 mb-3' src={logo} alt="Logo de SpotSee" />
            </div>
            <Navigation/>          
        </header>
    );
};

export default Header;