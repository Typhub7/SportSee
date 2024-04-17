import React from 'react';
import './nodatafound.css'

/** 
 * Component displaying a message when no data is found for the user.
 * 
 * @returns {JSX.Element} The component displaying the message.
 */
const NoDataFound: React.FC = () => {
  return (
    <div>
      <p className='message_data'>Aucune donnée existante pour cet utilisateur </p>
    </div>
  );
};

export default NoDataFound;