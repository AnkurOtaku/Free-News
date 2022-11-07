import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


export default function App() {

  let pageSize = 12;
  const [querry, setQuerry] = useState('globe');
  const [newsFrom, setDateFrom] = useState(1);
  const [newsTo, setDateTo] = useState();
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('in');

  const updateDateFrom = (from) => {
    setDateFrom(from);
  }
  const updateDateTo = (to) => {
    setDateTo(to);
  }
  const updateQuerry = (search) => {
    setQuerry(search);
  }
  const updateProgress = (prog) =>{
    setProgress(prog);
  }
  const updateCountry = (lan) =>{
    setCountry(lan);
  }

  return (
    <Router>
      <Navbar theme='dark' title='Free News' link1='All' link2='About' updateCountry={updateCountry} updateQuerry={updateQuerry} updateDateFrom={updateDateFrom} updateDateTo={updateDateTo} />
      <LoadingBar color='cyan' progress={progress} />
      <Routes>
        <Route path='/search' element={<News updateProgress={updateProgress} querry={querry} newsFrom={newsFrom} newsTo={newsTo} pageSize={pageSize} key='search' category='search' />} />
        <Route path='/' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='general' category='general' />} />
        <Route path='/business' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='business' category='business' />} />
        <Route path='/entertainment' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='entertainment' category='entertainment' />} />
        <Route path='/health' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='health' category='health' />} />
        <Route path='/science' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='science' category='science' />} />
        <Route path='/sports' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='sports' category='sports' />} />
        <Route path='/technology' element={<News updateProgress={updateProgress} country={country} pageSize={pageSize} key='technology' category='technology' />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}