import React, {Component} from 'react';
import moment from 'moment';

class DetailsCard extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    setAltImage = () => {
        let imagePath = './images/'+this.props.data.source.id+'.jpg'
        return imagePath
    }

    formatDate = (d) => {
        const format = "MMMM Do YYYY, h:mm:ss a"
        let dateFormatted = moment.utc(d).format(format)
        return dateFormatted
    }

    fetchRelatedNews = (data) => {
    
        let useless = ['is', 'in', 'on', 'the', 'has', 'had', 'have', 'was', 'will', 'do', 'fail','to','a','for', 'news']
        // console.log( data)
        let keywords = data.split(" ")
        // keywords.filter( word => {
        //      !useless.includes(word)
        // });
        console.log(keywords)
        let keys = ''
        keywords.forEach(element => {
            keys += element+"+"
        });
        
        let url = 'https://newsapi.org/v2/everything?qInTitle='+ keys + '&apiKey=8bcdc13d04f144d38b2e837242ebff7d'
         console.log(url)
        let dat = fetch(url);
        dat.then(response => {
            return response.json()
            }).then(res=>{
                
                this.setState({related:res})
            })
    }
render(){

        return(
            <div>
                <div className="news-Title" >
                    <h2>{this.props.data.title}</h2>
                </div>
                <div className="news-Image">
                    {/* {this.props.data.urlToImage? 
                        <img src={this.props.data.urlToImage} Object-fit="cover"/> : <img src='/images/google-news.jpg' Object-fit="cover"/>}  */}

<img src='/images/google-news.jpg' Object-fit="cover"/>
                </div>

                {this.props.data.source.name && 
                    <div className="news-content"><h3>
                        {this.props.data.source.name}</h3> {this.props.data.publishedAt &&
                    this.formatDate(this.props.data.publishedAt)} </div>}

                <div className="news-content">
                  {this.props.data.content? this.props.data.content.slice(0,199)+"... " : this.props.data.description}<a href={this.props.data.url}>Read More</a>
                </div>
                
            </div>
            
        )
    }
}
export default DetailsCard;