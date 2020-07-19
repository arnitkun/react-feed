var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8bcdc13d04f144d38b2e837242ebff7d';

const fetch = require('node-fetch')

var data = fetch(url)

data.then(response => {
    return response.json()
    }).then(res=>{
        news = [...Object.values(res.articles)]
        news.forEach(element => {
            console.log(element.source.name)
        });
        console.log(news.length)
    })
