import React, { useEffect, useState } from 'react';
import { useLocation,Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import './CheckDetails.css'
const CheckDetails = ({setIsAuthenticated}) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');
    const password = queryParams.get('password');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    useEffect(() => {
        if (location.pathname === '/CheckDetails') {
            const script = document.createElement('script');
            script.src = '/secure.js';
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [location.pathname]);
  return (
    <div>{
        loading 
        ? (
            <Loader/>
        ) :
        (
            username === 'admin' && password === 'Pr0t3ct!on$2024'
            ? (
                <div className='nice-work'>
                    <Link to = '/ctf-sol'><button className='backtoanswer' onClick={()=>setIsAuthenticated(true)}>get the ctf</button></Link>
                </div>
            ) 
            : (<div className='login-failed'>
                <p>Login Failed</p>
                <Link className =  'restart' to='/'>Retry</Link>
            </div>)
        )
    }</div>
  );
};

export default CheckDetails;
