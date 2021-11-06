import React from "react";
import { Provider } from "react-redux";
import { HashRouter} from "react-router-dom";
import store from "../store";
import '../styles/app.css';
import NavBar from './navbar/navbar';
// import { Switch } from "react-router-dom";
import WelcomePageContainer from './welcome_page/welcome_page_container';


// const App = () => <>
//   <NavBar />
//   <WelcomePageContainer />

//   <div className="dom-body">
//   </div>
// </>


class Root extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <HashRouter>
          <NavBar />
          <WelcomePageContainer />

          <div className="dom-body">
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default Root
