import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'



class App extends React.Component {
    state = {videos : [], selectedvideo : null}
   
   componentDidMount() {
       this.onTermsubmit('cricket')
   }
   
   
   onTermsubmit = async term => {
   const response = await youtube.get('/search', {
       params : {
           q : term
       }
   })
   this.setState({videos : response.data.items,
       selectedvideo:response.data.items[0]
   }
       )
   }
   
   onVideoSelect = video => {
       this.setState({selectedvideo : video})
   
   }
   
   
   
       render() {
           return (
               <div className= 'ui container'>
                   <SearchBar onSubmitted={this.onTermsubmit}/>
                   <div className='ui grid'>
                       <div className='ui row'>
                           <div className = 'ten wide column'>
                       <VideoDetail video={this.state.selectedvideo}/>

                   </div>
                   <div className='fifteen wide column'>
                     <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>

                   </div>
                   </div>
                   </div>
               </div>
           )
       }
   }
   export default App;
