import React, { Component } from 'react';
import './Main.css'
import Article from './Article'
import Ad from './Ad'
import OtherArticles from './OtherArticles'

class Main extends Component {
    render(){
        return ( <main className="expanded row">
      <Article></Article>
      <aside className="large-4 medium-12 columns">
        <Ad />
      </aside>
      <OtherArticles> </OtherArticles>
    </main>
            )
    }
}
export default Main