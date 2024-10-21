import '../styles/_CharacterCard.scss'

export const CharacterCard = ({ randomCharacter, saveCharacter }) => {
   

    const handleSaveClick = () => {
        //console.log('saving')
        saveCharacter();
    };
   
    return (
        <>
        <section className="character-card">
            <h3>{randomCharacter.name}</h3>
            <h4>Skill: {randomCharacter.skill}</h4>
            <img src={randomCharacter.image} alt={`Imagen de perfil del personaje ${randomCharacter.name}`}/>
            <p>Age: {randomCharacter.age}</p>
            <p>Race: {randomCharacter.race}</p>
            <button name='save-button'onClick={handleSaveClick}>Save</button>
        </section>
        </>
    )

}