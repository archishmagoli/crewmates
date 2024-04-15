import '../App.css';
import { supabase } from '../client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditCrewmate = () => {
    let params = useParams();

    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
            .from('my_crewmates')
            .select()
            .filter('id', 'eq', params.id)
            
            setCrewmate(data[0]);
        };

        fetchCrewmate();
    }, [])

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
            const { error } = await supabase
            .from('my_crewmates')
            .update({ name: crewmate.name,
                      speed: crewmate.speed,
                      is_imposter: crewmate.is_imposter,
                      color: crewmate.color
                    })
            .eq('id', params.id)
    
            if (error) {
                throw error;
            }
    
            alert('Crewmate updated successfully!');
            window.location = '/crewmates/details/' + params.id;
            window.location.reload();
        } catch (error) {
            alert('Error updating crewmate. Remember that your crewmate`s name MUST be unique.');

        }
    };

    const handleImposterChange = (e) => {
        setCrewmate({
            ...crewmate,
            is_imposter: e.target.value === 'yes'
        });
    };

    return (
        <div>
            { crewmate === null ? <p>Loading...</p> :
            <div className="content">
                <h1>Edit Your Crewmate</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="name">Crewmate Name:</label>
                    <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} required />
                    
                    <br /><br />

                    <label htmlFor="speed">Crewmate Speed:</label>
                    <input type="number" id="speed" name="speed" min='0' max='100' value={crewmate.speed} onChange={handleChange} required />
                    
                    <br /><br />

                    <label>Is this Crewmate an Imposter?</label>
                    <br />
                    <label className='imposter'>
                        <input type="radio" name="is_imposter" value="yes" checked={crewmate.is_imposter} onChange={handleImposterChange} />Yes
                    </label>
                    <br />
                    <label className='imposter'>
                        <input type="radio" name="is_imposter" value="no" checked={!crewmate.is_imposter} onChange={handleImposterChange} />No
                    </label>
                    <br /><br />
                    <label htmlFor="color">Crewmate Color:</label>
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
            }
        </div>
        
    );
};
  
export default EditCrewmate;