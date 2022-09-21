import { withRouter } from "react-router-dom"
import MountainSearchBar from "../search_bar/mountain_search_bar"


const Header = () => {

  return (
    <div className="header">
      <MountainSearchBar />
      <div className="header-img">
      </div>
      <div className="header-gradient"></div>
    </div>
  )
}

export default withRouter(Header)