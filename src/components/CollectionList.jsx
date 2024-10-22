import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CollectionCard } from './CollectionCard';
import '../styles/_CollectionList.scss'


export const CollectionList = ({ charactersCollection, deleteCharacter, editCharacter }) => {
    const [editingCharacter, setEditingCharacter] = useState(null); 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        editCharacter({ ...editingCharacter, ...data }); 
        setEditingCharacter(null); 
    };

    const handleEdit = (character) => {
        setEditingCharacter(character);
        reset(character);
    };

    return (
        <section className="collection-list">
            <h2>Favorite characters collection</h2>
            <article className='favorites-container'>
                {charactersCollection.length > 0 ? (
                    <>
                        {editingCharacter ? (
                            <form onSubmit={handleSubmit(onSubmit)} className="edit-character-form">
                                <div className="input-container">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" {...register('name', {
                                        required: true, pattern: {
                                            value: /^[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÿÇçÑñ\s'-]+$/i
                                            , message: 'Name only admits letters.'
                                        }, minLength: { value: 2, message: 'Name should have more than 2 characters.' }, maxLength: { value: 70, message: 'Name can not have more than 70 characters.' }
                                    })} />
                                    {errors.name && <p>{errors.name.message}</p>}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" id="age" {...register('age', {
                                        required: true, min: { value: 0, message: "Character must be older than 0" },
                                        max: { value: 301, message: "Character must be younger than 301" },
                                    })} />
                                    {errors.age && <p>{errors.age.message}</p>}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="race">Race</label>
                                    <input type="text" id="race" {...register('race', {
                                        required: true, pattern: {
                                            value: /^[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÿÇçÑñ\s'-]+$/i
                                            , message: 'Race only admits letters.'
                                        }, minLength: { value: 2, message: 'Race should have more than 2 characters.' }, maxLength: { value: 70, message: 'Race can not have more than 70 characters.' }
                                    })} />
                                    {errors.race && <p>{errors.race.message}</p>}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="skill">Skill</label>
                                    <input type="text" id="skill" {...register('skill', {
                                        required: true, pattern: {
                                            value: /^[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÿÇçÑñ\s'-]+$/i
                                            , message: 'Skill only admits letters.'
                                        }, minLength: { value: 2, message: 'Skill should have more than 2 characters.' }, maxLength: { value: 70, message: 'Skill can not have more than 70 characters.' }
                                    })} />
                                    {errors.skill && <p>{errors.skill.message}</p>}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="image">Image URL</label>
                                    <input type="text" id="image" {...register('image')} disabled />
                                </div>
                                <button className='save-button' type="submit">Save</button>
                                <button className='cancel-button' type="button" onClick={() => setEditingCharacter(null)}>Cancel</button>
                            </form>
                        ) : (
                            <CollectionCard charactersCollection={charactersCollection} deleteCharacter={deleteCharacter} handleEdit={handleEdit}/>
                        )}
                    </>
                ) : (
                    <p>You do not have any favorite character yet!</p>
                )}
            </article>
        </section>
    );
};
