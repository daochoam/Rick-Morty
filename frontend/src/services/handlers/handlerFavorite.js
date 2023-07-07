/**
 * @handlerFavorite { props, state: { state, setState }, fun: { add(), remove() } }
 * @param {*} props props fo the characters.
 * @param {*} state {state: Boolean , setState: function()}.
 * @param {*} fun { addFavorite: function(), rmvFavorite: function() }.
 */
const handlerFavorite = (
    character,
    state = {
        state: Boolean,
        setState: () => { }
    },
    fun = {
        addFavorite: () => { },
        rmvFavorite: () => { }
    }) => {
    if (state.state) {
        state.setState(false)
        fun.rmvFavorite(character.Id)
    }
    else {
        state.setState(true)
        fun.addFavorite(character)
    }
}

export default handlerFavorite