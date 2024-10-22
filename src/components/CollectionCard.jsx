import '../styles/_CollectionCard.scss'


export const CollectionCard = ({charactersCollection, deleteCharacter, handleEdit }) => {

    return charactersCollection.map(element => (
        <article className='favorite-element' key={element.id}>
            <h3>{element.name}</h3>
            <h4>Skill: {element.skill}</h4>
            <img src={element.image} alt={`Imagen de perfil del personaje ${element.name}`} />
            <p>Age: {element.age}</p>
            <p>Race: {element.race}</p>
            <button onClick={() => deleteCharacter(element.id)} className="delete-button">Delete character</button>
            <button onClick={() => handleEdit(element)} className="edit-button">Edit character</button>
        </article>
    ));
};