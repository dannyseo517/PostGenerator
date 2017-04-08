import React, { Component } from 'react';
require( '../../public/assets/css/header.css');

class Header extends Component {
  render() {
    return (
      <div className="kesselHeader">
        <div className="kesselNav yamm navbar navbar-default" role="navigation">
          <div className="container-fluid">
            {/*Brand and toggle get grouped for better mobile display*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="fa fa-lg fa-bars"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img src="http://www.mining.com/wp-content/themes/Kessel/images/xMDC-site-logo.png.pagespeed.ic.2MptOhtLrt.webp" alt="MINING.com"/>
              </a>
            </div>   
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {/*<ul id="menu-kessel-primary" className="nav navbar-nav kessel-main-menu">
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Tools <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                    <a href="#">Sponsor Post Generator</a>
                    </li>
                  </ul>
                </li>
              </ul>*/}
              {/*<ul className="infomine-nav nav navbar-nav navbar-right">
                <li id="AuthSignIn"><a href="https://account.infomine.com/signin/">Sign In</a></li>
                <li id="AuthSignInOut" className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#"></a>
                  <ul className="dropdown-menu infomine-dropdown auth-dropdown">
                    <li><a href="http://www.infomine.com/people/activateprofile" target="_blank" className="im-profile-link">Activate Profile</a></li>
                    <li><a href="https://account.infomine.com/manage/" target="_blank">Account</a></li>
                    <li><a href="https://account.infomine.com/signout/">Sign Out</a></li>
                  </ul>
                </li>
                <li id="AuthRegister"><a href="https://account.infomine.com/join/">Join</a></li>
              </ul>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
