import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../store";
import '../styles/app.css';
import NavBar from './navbar/navbar';
// import { createBrowserRouter } from 'react-router-dom'
import HomePage from './home_page/home_page_container';
import FavoriteMountainsIndex from './mountains/mountain_favorites_index'
// const router = createBrowserRouter([
//     {path:'/', element:<HomePage />}
//   ])

class Root extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/favorites' component={FavoriteMountainsIndex} />
          </Switch>
        
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
