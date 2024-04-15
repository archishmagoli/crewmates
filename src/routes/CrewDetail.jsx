import '../App.css';
import { supabase } from '../client';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import green from '../assets/green.webp';
import blue from '../assets/blue.webp';
import red from '../assets/red.webp';
import orange from '../assets/orange.webp';
import pink from '../assets/pink.webp';
import yellow from '../assets/yellow.webp';
import purple from '../assets/purple.webp';
import cyan from '../assets/cyan.webp';
import brown from '../assets/brown.webp';

const CrewDetail = () => {
    const [crewmates, setCrewmates] = useState(null);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('my_crewmates')
                .select();
            
            setCrewmates(data);
        };

        fetchCrewmates();
    }, [])

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

    return (
        <>
            <h1>Crewmate Gallery</h1>
            <div className='gallery'>
            {
                crewmates === null || crewmates.length === 0 ?
                <div>
                    <h2>No crewmates yet!</h2>
                    <Link to="/crewmates/create">
                        <button className='button button-detail'>
                        Create a Crewmate Here! 
                        </button>
                    </Link>
                </div>
                :
                crewmates.map(crewmate =>
                    <div key={crewmate.id} className='crewmateCard'>
                        <h2><b>{crewmate.name}</b></h2>
                        <p><b>Speed: </b>{crewmate.speed}</p>
                        <p><b>Imposter?: </b>{crewmate.is_imposter === true ? 'Yes' : 'No'}</p>
                        <img className='crewmateImage' src={findColor(crewmate.color)}></img>
                        <br></br>
                        <Link to={"/crewmates/details/" + crewmate.id}>
                            <button className='button button-detail'>
                                View Details 
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
        </>
    );
  };
  
  export default CrewDetail;