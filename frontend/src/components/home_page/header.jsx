import { withRouter } from "react-router-dom"
import MountainSearchBar from "./mountain_search_bar"


const Header = () => {

  return (
    <header className="header">
      <MountainSearchBar />
      <div className="header-img"></div>
      <div className="header-gradient"></div>
    </header>
  )
}

export default withRouter(Header)