import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import ReqCharacters from '../../services/ReqCharacters/ReqCharacters';

function Detail(props) {
    const {detailId}    = useParams();
    console.log({detailId})
    const [character,setCharacter] = useState({})

    useEffect(()=>{
      ReqCharacters.getById(detailId).then((character) =>{
        setCharacter(character.data)
      });
    },[detailId])

    console.log(character)
    return (
        <div className={styles.Detail}>
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
                {key!=='Name'?`${key}: `:null}
                <p className={styles.CardValue}>
                {key==='Name'?character.Name:character[key]}
                </p>
              </h3> )}
            else return null
            })}
        </div>
        )
  };

export default Detail;
