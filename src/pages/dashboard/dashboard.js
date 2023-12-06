import React from "react";
import './dashboard.css'
import ThemeConfig from "../../theme/themeConfig";
import Menu from "../../components/menu/menu";
import PageHeader from "../../components/pageHeader/pageHeader";


function Dashboard() {

    return(
        <div className="content">
            <Menu />
            <ThemeConfig />


            <div className="container">

                <div className="displayContent">
                    <PageHeader />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
