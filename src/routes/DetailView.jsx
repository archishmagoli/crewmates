import '../App.css';
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from '../client';

import green from '../assets/green.webp';
import blue from '../assets/blue.webp';
import red from '../assets/yellow.webp';
import yellow from '../assets/orange.webp';
import orange from '../assets/pink.webp';
import pink from '../assets/pink.webp';
import purple from '../assets/purple.webp';
import cyan from '../assets/cyan.webp';
import brown from '../assets/brown.webp';

const DetailView = () => {
    const findColor = (color) => {
        switch (color) {
            case 'red':
                return red;
            case 'blue':
                return blue;
            case 'green':
                return green;
            case 'yellow':
                return yellow;
            case 'orange':
                return orange;
            case 'purple':
                return purple;
            case 'pink':
                return pink;
            case 'cyan':
                return cyan;
            case 'brown':
                return brown;
            default:
                break;
        }
    }

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
    }, []);

    const deleteCrewmate = async (e) => {
        e.preventDefault();
    
        try {
            const { error } = await supabase
                .from('my_crewmates')
                .delete()
                .eq('id', params.id);

    
            if (error) {
                throw error;
            }
    
            alert('Successfully deleted crewmate.')
            window.location.replace("http://www.archishma.github.io/crewmates/");
        } catch (error) {
            alert('Error updating crewmate. Remember that your crewmate`s name MUST be unique.');

        }
    };
    
    return (
        <div>
            {crewmate !== null ? (
                <div className='crewmateDetail' key={crewmate.id}>
                    <h2><b>{crewmate.name}</b></h2>
                    <p><b>Speed: </b>{crewmate.speed}</p>
                    <p><b>Imposter?: </b>{crewmate.is_imposter === true ? 'Yes' : 'No'}</p>
                    <img className='crewmateImage' src={findColor(crewmate.color)}></img>
                    <br></br>
                    <Link to={"/crewmates/details/" + crewmate.id + '/edit'}>
                        <button className='button button-info'>
                            Edit Crewmate Details
                        </button>
                    </Link>
                    <br></br>
                    <br></br>
                    <button className='button button-danger' onClick={deleteCrewmate}>Delete Crewmate</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
  };
  
  export default DetailView;