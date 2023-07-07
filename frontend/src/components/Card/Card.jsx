import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
import RickMorty from '../../assets/Rick.png'
import { actionsCharacters, actionFavorites } from '../../redux/index';
import { connect, useDispatch } from 'react-redux';
import { Handler } from '../../services';


function Card({character, onClose,addFavorite, removeFavorite}) {
  const dispatch = useDispatch()
  const [isFavorite,setIsFavorite]= useState(false)
  const [isImageRickMorty, setIsImageRickMorty] = useState(false);
  
  const handlerFavorite = () => {
    Handler.handlerFavorite(
      character, 
      { state: isFavorite, 
        setState: setIsFavorite},
      { addFavorite: addFavorite, 
        rmvFavorite: removeFavorite}
    )}
  
  const btnClose = () => {
    removeFavorite(character.Id)
    onClose(character.Id)
  }

    const overDelete = () => {
      setIsImageRickMorty(true);
    };

    const outDelete = () => {
      setIsImageRickMorty(false);
    };
    
    return (
        <div className={styles.Card}>
					{isFavorite ? 
          (<button onClick={handlerFavorite}>❤️</button>) : 
          (<button onClick={handlerFavorite}>🤍</button>)}

          <button className={styles.CardBtn} 
            onClick={btnClose}
            onMouseOver={overDelete} 
            onMouseOut={outDelete}
            title="bomparty">X
          </button>
          
          {Object.keys(character).map((key,index) => {
            if(key==="Image"){
              return (
							<img className={styles.CardImage} 
							src={character[key]}
							alt={character.Name}
							key={index}
							title={character.Name}/>
							)
						}

            if(key!=='Id'){ 
              return ( 
              <h3 className={styles.CardKey}  key={index}  title={character[key]}> 
                {key!=='Name'?`${key}: `:null}
                <p className={styles.CardValue}>
                {key==='Name'?<Link to={`/detail/${character.Id}`} className={styles.CardLink}>{character.Name}</Link>:character[key]}
                </p>
              </h3> )}
            else return null
            })}
          {isImageRickMorty? <img className={styles.CardCancel} src={RickMorty} alt={'noCancel'} />:null}
         </div>
       )
  };

  // const mapStateToProps = (state) => {
  //   return {
  //     myFavorites: state.myFavorites
  //   }
  // }

  const mapDispatchToProps = (dispatch) => {
    return {
      addFavorite: (character) => {dispatch(actionFavorites.addFavorite(character))},
      removeFavorite: (id) => {dispatch(actionFavorites.removeFavorite(id))}
    }
}

export default connect(null, mapDispatchToProps)(Card);
