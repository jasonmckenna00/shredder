import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../store";
import '../styles/app.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer'
// import { createBrowserRouter } from 'react-router-dom'
import HomePageContainer from './home_page/home_page_container';
import FavoritesPageContainer from './favorites_page/favorites_page_container'
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
            <Route exact path='/' component={HomePageContainer}/>
            <Route path='/favorites' component={FavoritesPageContainer} />
          </Switch>
          <Footer />
        
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
