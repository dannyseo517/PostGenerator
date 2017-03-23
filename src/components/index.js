import React, {Component} from 'react'
import Header from './Header';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';
require( '../../public/assets/css/index.css');

class Index extends Component{
    render(){
        return(
            <div className="root">
                <Header/>
                <div className="container-fluid mainContainer">
                    <LeftPanel/>
                    <MainPanel />
                </div>
            </div>
        )
    }
}

export default Index;