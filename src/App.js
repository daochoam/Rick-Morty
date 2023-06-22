import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form.jsx';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import { getById } from "./services"


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
    getById(id)
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
      {/(\/home)$/.test(pathname) ? <NavBar onSearch={onSearch} /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/home' element={<Cards key={characters.id} Characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {/* <Route path={"*"} element={ <Page404 />} /> */}
      </Routes>
    </div >)
}

export default App;
