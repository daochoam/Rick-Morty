import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from "react-redux";
import styles from './Favorites.module.css';
import Card from '../Card/Card'
import { connect} from 'react-redux';
import { actionFavorites } from '../../redux';

function Favorites({onClose}) {

    const myFavorites = useSelector((state) => state.myFavorites)

  return (
    <div style={{display:"flex", position:"relative",flexDirection:"column"}}>
    <div className={styles.Favorites}  >
      { myFavorites &&
        myFavorites.map((character,index) => {
          return <Card key={index}
          character={{...character}}
          onClose={onClose} 
          />
          })}
      </div>
      </div>
      )
  };

export default Favorites;
