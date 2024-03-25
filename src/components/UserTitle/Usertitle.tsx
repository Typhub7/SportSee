import './usertitle.css'

interface TitleProps {
	name: string;
	greetings?: string;
}

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