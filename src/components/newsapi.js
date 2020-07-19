// var topurl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8bcdc13d04f144d38b2e837242ebff7d';

var allurl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=8bcdc13d04f144d38b2e837242ebff7d'

var source = 'https://newsapi.org/v2/sources?apiKey=8bcdc13d04f144d38b2e837242ebff7d'

const fetch = require('node-fetch')

// var data = fetch(topurl)

// data.then(response => {
//     return response.json()
//     }).then(res=>{
//         news = [...Object.values(res)]
//         // news.forEach(element => {
//         //     console.log(element)
//         // });
//         console.log( res)
//     })

getTopNews = async function(){
   var topurl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8bcdc13d04f144d38b2e837242ebff7d';
   
   let data = await fetch(topurl);
   let jsonData = await data.json();

   return jsonData;
   // data.then(response => {
   //  return response.json()
   //  }).then(res=>{
   //      news = [...Object.values(res)]
   //      // news.forEach(element => {
   //      //     console.log(element)
   //      // });
   //      return res;
   //  })


} 
    
 module.exports = {
     getTopNews
 }