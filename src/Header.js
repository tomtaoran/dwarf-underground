import React, { Component } from 'react';
import './Header.css'
import NavLinkHeader from './NavLinkHeader'
class Header extends Component{
    
    render(){
        return ( <div className="expanded row header">
      <div className="clearfix">
        <div className="float-left logo">
          <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
        </div>
        <NavLinkHeader></NavLinkHeader>
      </div>
      <div className="headline text-center small-12 columns">
        <h1>The Dwarf Underground</h1>
        <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
      </div>
    </div>)
    }
}

export default Header
