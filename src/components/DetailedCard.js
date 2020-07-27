import React, {Component} from 'react';
import moment from 'moment';
import googleNewsPlaceHolder from './images/google-news.jpg'

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
    
    /**
     * Function to fetch related news, takes 3 longest word from the title of current news and 
     * provides them as a seatch query to NewsApi again.
     * 
     * @param {Object} data Object received from Newsapi, contains all information about a news
     */
    fetchRelatedNews = (data) => {
    
        // let useless = ['is', 'in', 'on', 'the', 'has', 'had', 'have', 'was', 'will', 'do', 'fail','to','a','for', 'news']

        let keywords = data.split(" ")

        let sortedKeywords = keywords.sort( (a, b) => {
            return b.length-a.length;
        })

        let chosenKeywords = sortedKeywords.slice(0, 3);
        
        console.log(chosenKeywords)
        let keys = ''
        keywords.forEach(element => {
            keys += element+"+"
        });
        
        let url = 'https://newsapi.org/v2/everything?qInTitle='+ keys + '&apiKey=628232939dc547e3a4c221fef8a21b9b'
         console.log(url)
        let dat = fetch(url);
        dat.then(response => {
            return response.json()
            }).then(res=>{
                if(this.props.data.title && res.articles[0] && res.articles[0].title) {
                    if(this.props.data.title == res.articles[0].title){
                        console.log("No related news!")
                    }else {
                        this.setState({related:res})
                    }
                }                
            })
    }

    componentDidMount(){
        this.fetchRelatedNews(this.props.data.title)
    }

    render(){
        return(

            <div className="detailed-card">
                <div className="news-Title" >
                    <h2>{this.props.data.title}</h2>
                </div>
                <div className="news-Image">
                    {this.props.data.urlToImage? 
                        <img className="news-image" src={this.props.data.urlToImage} /> : <img className="placeholder" src={googleNewsPlaceHolder}/>} 
                </div>
                {this.props.data.source.name && 
                    <div className="news-content"><h3>
                        {this.props.data.source.name} | {this.props.data.publishedAt &&
                    this.formatDate(this.props.data.publishedAt)} </h3> </div>}
                <div className="news-content">
                  {this.props.data.content? this.props.data.content.slice(0,199)+"... " : this.props.data.description}<a href={this.props.data.url}>Read More</a>
                </div>
            </div>
        )
    }
}

export default DetailsCard;