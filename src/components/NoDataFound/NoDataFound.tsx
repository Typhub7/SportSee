import './nodatafound.css'
interface Props {
  message : string
}

/** 
 * Component displaying a message when no data is found for the user.
 * 
 * @returns {JSX.Element} The component displaying the message.
 */
const NoDataFound = ({message}:Props) => {
  return (
    <div>
      <p className='message_data'>{message} </p>
    </div>
  );
};

export default NoDataFound;