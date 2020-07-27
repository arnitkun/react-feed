
# React-feed

A news browsing application, built in react and node.

## Features:

 - Uses NewsApi
 - Supports a number of sources from NewsApi, along with the current top news
 - Shows news in an infinte scroll
 - clicking on a news shows further details

## Running:

 - Clone this repository: `https://github.com/arnitkun/react-feed`
 - Run `yarn install` from the root of the repository.
 - Run ```yarn start```
 - Go to `localhost:3000` for the application. 

## Note:

 - Needs a NewsApi Api key (though the application has a developer key coded in )
 - Region limited: country set to `in`, sources limited to 3 as provided by Newsapi for the country in this case.
 - NewsApi limited developer account, can not fetch more than 100 articles at one time.
 - language set to English `en`
 - Source without images are supplied with a logo of the source.
 - Clicking on a source while the "detailed view" for a news is open will reload the feed, except for `Top News` 
    source option, which could be fixed by using the state variable `key`.

## Customizing the App: 

The region, language, available sources are all changeable.
