import React, {Component} from 'react'

import Header from './Header';
import LeftPanel from './LeftPanel';

class Index extends Component{
    render(){
        return(
            <div className="root">
                <Header/>
                <LeftPanel/>
            </div>
        )
    }
}

export default Index;