import '../styles/_CollectionList.scss'

export const CollectionList = ({ charactersCollection, deleteCharacter }) => {

    const paintCollection = () => {

        const handleDeleteClick = (event) => {
            const characterName = event.target.value;
            //console.log(characterName)
            deleteCharacter(characterName);
        }

        if (charactersCollection.length > 0) {

            return charactersCollection.map((element, index) =>
            (<article className='favorite-element' key={index}>
                <h3>{element.name}</h3>
                <h4>Skill: {element.skill}</h4>
                <img src={element.image} alt={`Imagen de perfil del personaje ${element.name}`}/>
                <p>Age: {element.age}</p>
                <p>Race: {element.race}</p>
                <button onClick={handleDeleteClick} value={element.name} name="delete-button" className="delete-button">Delete character</button>
            </article>
            )
            )
        }
    };


    return (
        <>
        <section className="collection-list">
            <h2>Characters collection</h2>
            <article className='favorites-container'>
            {charactersCollection.length > 0 ? paintCollection() : <p>You do not have any favorite character yet!</p>}
            </article>
        </section>
        </>
    )

};