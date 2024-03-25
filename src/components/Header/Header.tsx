import logo from "../../assets/logo.png";
import './header.css'
import Navigation from '../Navigation/Navigation';

/**Composant d'en-tête affichant le logo de Kasa et la navigation.
 * 
 * @returns {JSX.Element} Le composant d'en-tête.
 */
const Header: React.FC = () => {
    return (
        <header className='header flex flex-row justify-between items-center bg-gray-900 w-full'>           
            <div className='logo_container'>
                <img className='mt-4 mr-7 ml-7 mb-3' src={logo} alt="Logo de SpotSee" />
            </div>
            {/* Composant de navigation */}
            <Navigation/>          
        </header>
    );
};

export default Header;