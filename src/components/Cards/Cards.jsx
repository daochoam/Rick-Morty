import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card.jsx';

function Cards(props) {
    return (
      <div style={{display:"flex", position:"relative",flexDirection:"column"}}>
      <div className={styles.Cards}  >{
          props.Characters.map((character,index) => {
            return <Card key={index}
            character={{...character}}
            onClose={props.onClose} 
            />
            })}
        </div>
        </div>
        )
  };

export default Cards;
