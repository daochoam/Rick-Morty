import React from 'react';

class Episode extends React.Component {
    constructor(props) {
      super(props);
      this.Id= props.id;
      this.Name= props.name;
      this.Air_Date= props.air_date;
      this.Season= props.episode.match(/(?<=S)\d+(?=E)/)[0];
      this.Chapter=props.episode.match(/(?<=E)\d+$/)[0];
    }

    static EpisodeJSON(obj) {
      return new Episode({
          id: obj.id,
          name: obj.name,
          air_date: obj.air_date,
          episode: obj.episode
      });
    }
  
    static getEpisode(obj) {
      const objEpisode = this.EpisodeJSON(obj);
      const { props, context, refs, keys, updater, ...Episode} = objEpisode;
      return Episode
    }
  }

  export default Episode;