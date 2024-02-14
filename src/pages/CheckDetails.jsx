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
                <Link to = '/ctf-sol'><button onClick={()=>setIsAuthenticated(true)}>get the ctf</button></Link>
            ) 
            : (<>
                <p>Login Failed</p>
                <Link to='/'>Retry</Link>
            </>)
        )
    }</div>
  );
};

export default CheckDetails;
