import {Component} from "react";

class Character extends Component {
    constructor(props) {
        super(props);
        this.Id= props.id;
        this.Name = props.name;
        this.Image = props.image;
        this.Status = props.status;
        this.Species = props.species;
        this.Gender = props.gender;
        this.Origin = props.origin;
    }

    static CharacterJSON(obj) {
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

    static getCharacter(obj) {
        const objCharacter = this.CharacterJSON(obj);
        const { props, context, refs, keys, updater, ...Character} = objCharacter;
        return Character
      }
}

export default Character;