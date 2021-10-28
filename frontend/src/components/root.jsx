import React from "react";
// import { Provider } from "react-redux";
import { HashRouter} from "react-router-dom";
import App from "./app.jsx";  


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


// const Root = <div> 
//     <h1>hello root</h1>
//   </div>

export default Root
