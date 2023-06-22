import React, { useState } from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
import RickMorty from '../../assets/Rick.png'

function Card({character={},onClose}) {
    const [estado, setEstado] = useState(false);

    const onDelete = () => {
      setEstado(true);
    };

    const outDelete = () => {
      setEstado(false);
    };
    
    return (
        <div className={styles.Card}>
          <button className={styles.CardBtn} 
            onClick={()=>onClose(character.Id)}
            onMouseOver={onDelete} 
            onMouseOut={outDelete}
            title="bomparty">X
          </button>
          
          {Object.keys(character).map((key,index) => {
            if(key==="Image"){
              return <img className={styles.CardImage} 
                          src={character[key]}
                          alt={character.name}
                          key={index}
                          title={character.name}/>}

            if(key!=='Id'){ 
              return ( 
              <h3 className={styles.CardKey}  key={index}  title={character[key]}> 
                {/*  Muestra los keys execpt Name:  */}
                {key!=='Name'?`${key}: `:null}
                <p className={styles.CardValue}>
                {/* Asigna Enlace solo al Name del Personaje  */}
                {key==='Name'?<Link to={`/detail/${character.Id}`} className={styles.CardLink}>{character.Name}</Link>:character[key]}
                </p>
              </h3> )}
            else return null
            })}
          {estado===true? <img className={styles.CardCancel} src={RickMorty} alt={'noCancel'} />:null}
         </div>
       )
  };

export default Card;
