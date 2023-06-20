import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom' 
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as Icon } from '../../assets/logoNav.svg';

const navNavigate = [
  {name:'Home', link:'/home'},
  {name:'About', link:'/about'},
  {name:'Credits', link:'/credits'}
]

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: ''
    };
  }

  CharacterRnd = () => {
    const Characters = ["Rick", "Morty", "Beth", "Jerry","Summer"];
    const characterSelected = Characters[Math.floor(Math.random() * Characters.length)];
    this.setState({ character: characterSelected });
  };

  cleanCharacter = () => {
    this.setState({ character: '' });
  };
  
  
  render() {      
      return (
        <div className={styles.NavBar} >
          <div className={styles.NavLogo} key='NavLogo' >
            <NavLink to="/" className = {styles.NavIcon} onMouseOver={this.CharacterRnd} onMouseOut={this.cleanCharacter} title={`go home ${this.state.character}`} >
              <Icon width="50" height="50" />
            </NavLink>
          </div>
          <div className={styles.NavDir} >
                {navNavigate.map((route,index)=>{
                  return  <NavLink to={route.link} key={index}> {route.name} </NavLink>
                })}
          </div>
            {this.props.onSearch?<SearchBar className={styles.SearchBar} onSearch={this.props.onSearch}/>:null}
        </div>
      );
    }
  }

  export default NavBar;