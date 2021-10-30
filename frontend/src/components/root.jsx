import React from "react";
// import { Provider } from "react-redux";
import { HashRouter} from "react-router-dom";
import '../styles/app.css';
import NavBar from './navbar/navbar';
// import { Switch } from "react-router-dom";
import WelcomePageContainer from './welcome_page/welcome_page_container';


const App = () => <>
  <NavBar />
  <WelcomePageContainer />

  <div className="dom-body">
  </div>
</>

// export default function({ store }) => (
//     <Provider store = {store}>
//         <HashRouter>
//             <App />
//         </HashRouter>
//     </Provider>
// )

const Root = 
  <HashRouter>
    <App />
  </HashRouter>

export default Root
