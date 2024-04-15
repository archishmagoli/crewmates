import '../App.css';
import { supabase } from '../client';
import { useState } from 'react';

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({
        name: "",
        speed: 0,
        is_imposter: 'no',
        color: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCrewmate({
            ...crewmate,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase
                .from('my_crewmates')
                .insert({
                    name: crewmate.name, 
                    speed: crewmate.speed, 
                    color: crewmate.color,
                    is_imposter: crewmate.is_imposter === 'yes'
                });
    
            if (error) {
                throw error;
            }
    
            alert('Crewmate created successfully!', data);
            window.location.replace("https://www.archishma.github.io/crewmates/");
        } catch (error) {
            alert('Error creating crewmate. Remember that your crewmate`s name MUST be unique.');
        }
    };

    const handleImposterChange = (e) => {
        setCrewmate({
            ...crewmate,
            is_imposter: e.target.value
        });
    };

    return (
        <div>
            <h1>Create a New Crewmate!</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name Your Crewmate:</label>
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} required />
                
                <br /><br />

                <label htmlFor="speed">Select Speed:</label>
                <input type="number" id="speed" name="speed" min='0' max='100' value={crewmate.speed} onChange={handleChange} required />
                
                <br /><br />

                <label>Is this Crewmate an Imposter?</label>
                <br />
                <label className='imposter'>
                    <input type="radio" name="is_imposter" value="yes" checked={crewmate.is_imposter === 'yes'} onChange={handleImposterChange} />Yes
                </label>
                <br />
                <label className='imposter'>
                    <input type="radio" name="is_imposter" value="no" checked={crewmate.is_imposter === 'no'} onChange={handleImposterChange} />No
                </label>
                <br /><br />
                <label htmlFor="color">Choose a Color:</label>
                <select id="color" name="color" value={crewmate.color} onChange={handleChange} required>
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="cyan">Cyan</option>
                    <option value="brown">Brown</option>
                </select><br /><br />

                <input className='button button-submit' type="submit" value="Submit" />
            </form>
        </div>
        
    );
};
  
export default CreateCrewmate;