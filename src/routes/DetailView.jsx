import '../App.css';
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from '../client';

const DetailView = () => {
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
    
    return (
        <>
            {crewmate !== null ? (
                <div className='crewmateDetail' key={crewmate.id}>
                    <h2><b>{crewmate.name}</b></h2>
                    <p><b>Speed: </b>{crewmate.speed}</p>
                    <p><b>Imposter?: </b>{crewmate.is_imposter === true ? 'Yes' : 'No'}</p>
                    <img className='crewmateImage' src={'..\\src\\assets\\' + crewmate.color + '.webp'}></img>
                    <br></br>
                    <Link to={"/crewmates/details/" + crewmate.id + '/edit'}>
                        <button className='button button-info'>
                            Edit Crewmate Details
                        </button>
                    </Link>
                    <br></br>
                    <br></br>
                    <button className='button button-danger'>Delete Crewmate</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
  };
  
  export default DetailView;