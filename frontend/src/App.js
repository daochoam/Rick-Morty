import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form.jsx';
import NavBar from './components/NavBar/NavBar';
import { actionsCharacters } from './redux';
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { reqCharacter } from "./services"


function App() {
  const { pathname } = useLocation();

  //! HOOKS
  const [characters, setCharacter] = useState([])
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // TODO: onSearch Function
  const onSearch = (id) => {
    if (characters.some((char) => char.Id === parseInt(id))) return alert("The character was previously added")
    // Todo
    reqCharacter.getById(id)
      .then(({ data, message }) => {
        data ? setCharacter((oldCharacters) => [...oldCharacters, data]) : alert(message)
      })
  }

  const onClose = (id) => {
    setCharacter(characters.filter(char => char.Id !== parseInt(id)))
  }

  return (
    <div className='App'>
      {/(\/home)$/.test(pathname) ? <NavBar onSearch={onSearch} /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/home' element={<Cards key={characters.Id} Characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={<Detail onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
        {/* <Route path={"*"} element={ <Page404 />} /> */}
      </Routes>
    </div >)
}

export default App;
