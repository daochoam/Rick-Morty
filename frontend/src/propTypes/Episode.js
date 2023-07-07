import PropTypes from 'prop-types';

class Episode {
  constructor(props) {
    this.Id = props.id;
    this.Name = props.name;
    this.Air_Date = props.air_date;
    this.Season = props.episode.match(/(?<=S)\d+(?=E)/)[0];
    this.Chapter = props.episode.match(/(?<=E)\d+$/)[0];
  }

  static getEpisode(obj) {
    return new Episode({
      id: obj.id,
      name: obj.name,
      air_date: obj.air_date,
      episode: obj.episode
    });
  }
}

Episode.propTypes = {
  Id: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  Air_Date: PropTypes.string.isRequired,
  Season: PropTypes.string.isRequired,
  Chapter: PropTypes.string.isRequired,
};

export default Episode