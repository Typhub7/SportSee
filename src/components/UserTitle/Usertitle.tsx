import './usertitle.css'

interface TitleProps {
	name: string;
	greetings?: string;
}

/** 
 * User title component displaying a personalized greeting for the user.
 * 
 * @param name The name of the user.
 * @param greetings (Optional) Additional greetings for the user.
 * @returns {JSX.Element} The user title component.
 */
const Usertitle = ({ name, greetings }: TitleProps) => {
  return (
    <div>
      <h1 className="title">Bonjour <span className="title_colored">{name}</span>
      </h1>
      {greetings ? <div className="text-xl">{greetings}</div> : null}
    </div>
  )
}

export default Usertitle