import React, {Component} from 'react';

class DetailsCard extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    // fetchRelatedNews = () => {
    //     let useless = ['is', 'in', 'on', 'the', 'has', 'had', 'have', 'was', 'will', 'do', 'fail','to', ]
    //     let keywords = this.props.title.split(" ");
    // }
render(){

        return(
            <div>
                <div className="news-Title">
                    <h2>{this.props.data.title}</h2>
                </div>
                <div className="news-Image">
                    <img alt="Image not found!" src={this.props.data.urlToImage} Object-fit="contain"/> 
                </div>

                {this.props.data.source.name && 
                    <div><h4>Source: {this.props.data.source.name}</h4></div>}

                <div>
                  {this.props.data.content? this.props.data.content : this.props.data.description}<a href={this.props.data.url}>Read More</a>
                </div>
                
            </div>
            
        )
    }
}
export default DetailsCard;