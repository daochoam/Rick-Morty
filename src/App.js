import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import ReqCharacters from "./services/ReqCharacters/ReqCharacters.jsx"


function App() {
  const { pathname } = useLocation();
  const [characters, setCharacter] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onSearch = (id) => {
    if (characters.some((char) => char.Id === parseInt(id))) return alert("The character was previously added")
    ReqCharacters.getById(id)
      .then(response => {
        if (response.state) { setCharacter((oldCharacters) => [...oldCharacters, response.data]); }
        else alert(response.message)
      })
  }

  const onClose = (id) => {
    setCharacter(characters.filter(char => char.Id !== parseInt(id)))
  }

  return (
    <div className='App'>
      {/(\/home|\/)$/.test(pathname) ? <NavBar onSearch={onSearch} /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Cards key={characters.id} Characters={characters} onClose={onClose} />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {/* <Route path={"*"} element={ <Page404 />} /> */}
      </Routes>
    </div >)
}

export default App;
