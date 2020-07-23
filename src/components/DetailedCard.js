import React, {Component} from 'react';

class DetailsCard extends Component{
    constructor(props){
        super(props)

    }

render(){
        return(
            <div>
                <div className="news-Title">
                    <h2>{this.props.data.title}</h2>
                </div>
                <div className="news-Image">
                    <img alt="Image not found!" src={this.props.data.urlToImage}/> 
                </div>

                {this.props.data.source.name && 
                    <div><h4>Source: {this.props.data.source.name}</h4></div>}

                <div>
                  {this.props.data.content && this.props.data.content}
                </div>
                <div><a href={this.props.data.url}>Read More</a></div>
                
            </div>
            
        )
    }
}
export default DetailsCard;