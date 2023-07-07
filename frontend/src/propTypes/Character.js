import PropTypes from 'prop-types';

class Character {
    constructor(props) {
        this.Id = props.id;
        this.Name = props.name;
        this.Image = props.image;
        this.Status = props.status;
        this.Species = props.species;
        this.Gender = props.gender;
        this.Origin = props.origin;
    }

    static getCharacter(obj) {
        return new Character({
            id: obj.id,
            name: obj.name,
            status: obj.status,
            species: obj.species,
            gender: obj.gender,
            origin: obj.origin.name,
            image: obj.image
        });
    }
}

Character.propTypes = {
    Id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
    Species: PropTypes.string.isRequired,
    Gender: PropTypes.string.isRequired,
    Origin: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
};

export default Character