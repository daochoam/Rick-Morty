const handleInputChange = (event, state, setState) => {
    const property = event.target.name
    const value = event.target.value

    setState({ ...state, [property]: value })
}

export default handleInputChange