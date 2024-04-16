import React from 'react'
import "../KeyData/keydata.css"

interface KeyDataProps {
    iconurl: string;
    value: string;
    etiquette: string; // étiquette est rendue facultative avec l'opérateur `?`
}
  

const Keydata : React.FC<KeyDataProps> = ({iconurl,value,etiquette}) => {
  return (
    <div className='keydata_container flex row'>
        <img src={iconurl} alt={`${etiquette} icon`} className='img_style'/>
        <div className='flex flex-col justify-around'>
            <p className='value_style'>{value}</p>
            <p className='etiquette_style'>{etiquette}</p>
        </div>
    </div>
  )
}

export default Keydata