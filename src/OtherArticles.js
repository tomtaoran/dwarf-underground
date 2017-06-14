import React, { Component } from 'react';
import './OtherArticles.css'
import OtherArticle from './OtherArticle'


class OtherArticles extends Component {
    constructor(){
        super()
        this.state = {
            ads: [{divName: "small-6 medium-3 columns other-article",aHref: "#", imgSrc: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", imgAlt: "orc", pContent: "Single Orcs in Indianapolis", }, 
                {divName: "small-6 medium-3 columns other-article",aHref: "#", imgSrc: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", imgAlt: "mountain", pContent: "You won't believe what's under this mountain", },
                {divName: "small-6 medium-3 columns other-article",aHref: "#", imgSrc: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", imgAlt: "gold", pContent: "Mine 20% more gold with One Weird Trick",},
                {divName: "small-6 medium-3 columns other-article",aHref: "#", imgSrc: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", imgAlt: "hobbit", pContent: "Surprise for Indiana Hobbits born before 1999",}
            ]
        }
    }

    render(){
        return ( <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.state.ads.map( (ad)=> <OtherArticle divName={ad.divName} aHref={ad.aHref} imgSrc={ad.imgSrc} imgAlt={ad.imgAlt} pContent={ad.pContent}/>)}
            </div>

            
            )
    }
}

/*
function OtherArticle (props){
    return(<div className={props.article.divName}> 
                    <a href={props.article.aHref}> 
                    <img src={props.article.imgSrc} alt={props.article.imgAlt} /> // Oh, we name our props as article 
                    <p>{props.article.pContent}</p> 
                    </a>   
                </div> 
)
}
*/

export default OtherArticles