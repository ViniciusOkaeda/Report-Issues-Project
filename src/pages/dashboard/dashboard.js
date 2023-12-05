import React from "react";
import './dashboard.css'
import ThemeConfig from "../../theme/themeConfig";
import Menu from "../../components/menu/menu";


function Dashboard() {

    return(
        <div className="content">
            <Menu />
            <ThemeConfig />


            <div className="container"></div>
        </div>
    )
}

export default Dashboard