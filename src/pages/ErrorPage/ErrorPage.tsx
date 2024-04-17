import Header from "../../components/Header/Header"
import Sidebar from "../../components/SideBar/Sidebar"
import './errorpage.css' 


const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="flex column">
        <Sidebar />
        <div className="error_container">
          <h1>Erreur 404</h1>
          <p>Désolé, la page que vous recherchez n'existe pas.</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage