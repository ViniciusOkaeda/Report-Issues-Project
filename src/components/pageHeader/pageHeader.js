import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import OptionsUser from '../optionsUser/optionsUser';
import MenuIcon from '@mui/icons-material/Menu';
import VillaIcon from '@mui/icons-material/Villa';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PagesIcon from '@mui/icons-material/Pages';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './pageHeader.css'

function PageHeader() {
    console.log("meu window é", window.location)
    const location = useLocation();

    const pageName = location.pathname.slice(1)

    return(
        <div className="pageHeaderContent">

            <div className="pathContainer">
                <div className="pathIcon">
                    {
                    pageName === "dashboard" 
                    ? 
                    <AppsIcon className="menuIcon" sx={{ fontSize: '1.8em'}}/> 
                    : 
                    pageName === "rights" 
                    ? 
                    '' 
                    : 
                    pageName === "history" 
                    ? 
                    '' 
                    : 
                    pageName === "profile" 
                    ? 
                    '' 
                    : 
                    ''
                    }
                </div>


                <h2>{pageName}</h2>
            </div>

            <div className="searchContainer">
                    
            </div>

            <div className="profileContainer">
                    
            </div>
        </div>
    )
}

export default PageHeader

