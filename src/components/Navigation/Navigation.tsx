import { Link } from 'react-router-dom';
import './navigation.css'

/** Composant de navigation affichant des liens du menu vers différentes pages.
 * 
 * @returns {JSX.Element} Le composant de navigation.
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