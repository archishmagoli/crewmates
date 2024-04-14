import '../index.css';
import { supabase } from '../client';
import { useState } from 'react';

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({
        name: "",
        speed: 0,
        is_imposter: false,
        color: ""
    });

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('my_crewmates')
        .insert({name: crewmate.name, 
            speed: crewmate.speed, 
            color: crewmate.color,
            is_imposter: crewmate.is_imposter
        })
        .select();

        window.location = "/crewmates/gallery";
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrewmate({
            ...crewmate,
            [name]: value
        });
    };

    const handleSubmit = () => {
        console.log(crewmate);
    }

    return (
        <div className="content">
            <h1>Create a New Crewmate!</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} required /><br /><br />

                <label htmlFor="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" min='0' max='100' value={crewmate.speed} onChange={handleChange} required /><br /><br />

                <label>Is Imposter?</label><br />
                <input type="radio" id="imposter_yes" name="is_imposter" value="yes" checked={crewmate.is_imposter === true} onChange={handleChange} required />
                <label htmlFor="imposter_yes">Yes</label>
                <input type="radio" id="imposter_no" name="is_imposter" value="no" checked={crewmate.is_imposter === false} onChange={handleChange} />
                <label htmlFor="imposter_no">No</label><br /><br />

                <label htmlFor="color">Color:</label><br />
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

                <input className='button' type="submit" value="Submit" />
            </form>
        </div>
        
    );
};
  
export default CreateCrewmate;