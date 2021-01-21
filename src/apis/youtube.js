import axios from 'axios'



const KEY = 'AIzaSyBxq2uYgQGTTYGMNM8NUbwRUa4Ye2Jbh5w'

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
         key : KEY


    }
})