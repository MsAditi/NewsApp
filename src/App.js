
import './App.css';

import React, {useState} from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

const App =(props)=> {
   const apiKey=process.env.REACT_APP_NEWS_API;
   
   const[progress,setProgresss]=useState(0);
   const setProgress=(progress)=>
   {
    setProgresss(progress);
   }
 
    return (
      
      <div>
      <Router>
      <NavBar/>
      <LoadingBar height ='3' color='#f11946' progress={progress} />
       <Routes>
       <Route path="/general" element=
        {<News setProgress={setProgress} pageSize="5" category="general" country="in" apiKey={apiKey}/>}/>
        <Route path="/sports" element=
        {<News setProgress={setProgress} pageSize="5" category="sports" country="in" apiKey={apiKey}/>}/>
         <Route path="/business" element=
        {<News setProgress={setProgress} pageSize="5" category="business" country="in" apiKey={apiKey}/>}/>
         <Route path="/technology" element=
        {<News setProgress={setProgress} pageSize="5" category="technology" country="in" apiKey={apiKey}/>}/>
         <Route path="/entertainment" element=
        {<News setProgress={setProgress} pageSize="5" category="entertainment" country="in" apiKey={apiKey}/>}/>
         <Route path="/science" element=
        {<News setProgress={setProgress} pageSize="5" category="science" country="in" apiKey={apiKey}/>}/>
       </Routes>
       </Router>
        
      </div>
    )
  }
export default App


