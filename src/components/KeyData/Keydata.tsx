import React from 'react'
import "../KeyData/keydata.css"

interface KeyDataProps {
    iconurl: string;
    value: string;
    etiquette: string;
}
  
/** 
 * Key data component displaying an icon, a value, and an optional label.
 * 
 * @param iconurl The URL of the icon to be displayed.
 * @param value The value to be displayed.
 * @param etiquette (Optional) The label to be displayed.
 * @returns {JSX.Element} The key data component.
 */
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