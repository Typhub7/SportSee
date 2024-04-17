import { Link } from 'react-router-dom';
import './navigation.css'

/** 
 * Navigation component displaying menu links to different pages.
 * 
 * Ready to be upgrade
 * @returns {JSX.Element} The navigation component.
 */

 const Navigation: React.FC = () => {

    return (
        <ul className='navigation flex justify-around text-white'>
            <li>
                <Link to={''} className='text-2xl text-white'>Accueil</Link>
            </li>

            <li>
                <Link to={''} className='text-2xl text-white'>Profil</Link>
            </li>

            <li>
                <Link to={''} className='text-2xl text-white'>Réglage</Link>
            </li>

            <li>
                <Link to={''} className='text-2xl text-white'>Communauté</Link>
            </li>
        </ul>
        
    );
};

export default Navigation;