import React from 'react';
import './nodatafound.css'


const NoDataFound: React.FC = () => {
  return (
    <div>
      <p className='message_data'>Aucune donnée existante pour cet utilisateur </p>
    </div>
  );
};

export default NoDataFound;