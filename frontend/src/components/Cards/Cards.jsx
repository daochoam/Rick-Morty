import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card.jsx';

function Cards({Characters, onClose}) {
    return (
      <div style={{display:"flex", position:"relative",flexDirection:"column"}}>
      <div className={styles.Cards}  >
        { Characters &&
          Characters.map((character,index) => {
            return <Card key={index}
            character={{...character}}
            onClose={onClose} 
            />
            })}
        </div>
        </div>
        )
  };

export default Cards;
