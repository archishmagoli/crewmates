import '../App.css';
import { supabase } from '../client';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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

    return (
        <div className="content">
            <h1>Crewmate Gallery</h1>
            {
                crewmates === null || crewmates.length === 0 ?
                <div>
                    <h2>No crewmates yet!</h2>
                    <Link to="/crewmates/create">
                        <button className='button'>
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
                        <img className='crewmateImage' src={'src\\assets\\' + crewmate.color + '.webp'}></img>
                    </div>
                )
            }
        </div>
        
    );
  };
  
  export default CrewDetail;