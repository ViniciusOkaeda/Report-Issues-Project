import { useEffect, useState, useRef } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

import './theme.css';

const ThemeConfig = () => {
    let dropDownRef = useRef();
    const [configOptions, setConfigOptions ] = useState([{

        primaryColor: [
            {
                color: ''
            }
        ],

        themeColor: [
            {
                type: '',
                color: '',
                colorAlternative: '',
                shadowColor: '',
                fontShadowcolor: '',
                borderColor: '',
                containerColor: '',
            }
        ],

        menuColor: [
            {
                type: '',
                color: '',
                fontColor: ''
            }
        ],

        menuStyle: [
            {
                menuWidth: '',
                menuHeight: '',
                menuMinHeight: '',
                menuDisplay: '',
                menuMargin: '',
            }
        ],

    }]);

    const [isActive, setIsActive] = useState(false);
    
    const handleOpenDropDown = () => setIsActive(!isActive);


      useEffect (() => {

        fetch('themeOptions.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => 
            res.json()
            ).then(resp => {
                setConfigOptions(resp.paletteOptions.map(e => e))
            }).catch((error) => {
                console.log(error)
            });

            if(localStorage.getItem('palette-theme-list') == null) {
                var palette_theme_list = {
                    themeColor: '',
                    fontColor: '',
                    fontColorAlternative: '', 
                    shadowColor: '', 
                    fontShadowColor: '', 
                    borderColor: '', 
                    lineColor: '', 
                    containerColor: ''
                }

                localStorage.setItem("palette-theme-list", JSON.stringify(palette_theme_list))

            }
            if(localStorage.getItem('palette-menu-color-list') == null) {
                var palette_menu_color_list = {
                    menuColor: '',
                    menuFontColor: ''
                }

                localStorage.setItem("palette-menu-list", JSON.stringify(palette_menu_color_list))

            }


            var palette_theme_list = JSON.parse(localStorage.getItem('palette-theme-list'))

            setTheme(palette_theme_list);



            var palette_menu_color_list = JSON.parse(localStorage.getItem('palette-menu-list'))
                        
            setMenuColor(palette_menu_color_list);



            const currentMenuWidth = localStorage.getItem('menuWidth');
            const currentMenuHeight = localStorage.getItem('menuHeight');
            const currentMenuMinHeight = localStorage.getItem('menuMinHeight');
            const currentMenuDisplay = localStorage.getItem('menuDisplay');
            const currentMenuMargin = localStorage.getItem('menuMargin');
            setMenuStyle(currentMenuWidth, currentMenuHeight, currentMenuMinHeight, currentMenuDisplay, currentMenuMargin);

    

        let handler = (e) => {
            if(!dropDownRef.current.contains(e.target)){
                setIsActive(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }




      },[])

    const setTheme = (palette_theme_list) => {
        document.documentElement.style.setProperty('--theme-color', palette_theme_list.themeColor);
        document.documentElement.style.setProperty('--font-color', palette_theme_list.fontColor);
        document.documentElement.style.setProperty('--font-color-alternative', palette_theme_list.fontColorAlternative);
        document.documentElement.style.setProperty('--shadow-color', palette_theme_list.shadowColor);
        document.documentElement.style.setProperty('--font-shadow-color', palette_theme_list.fontShadowColor);
        document.documentElement.style.setProperty('--border-color', palette_theme_list.borderColor);
        document.documentElement.style.setProperty('--line-color', palette_theme_list.lineColor);
        document.documentElement.style.setProperty('--container-color', palette_theme_list.containerColor);
    }

    const setPalette = (event) => {

        var palette_theme_list = {
            themeColor: event.target.style.getPropertyValue('--theme-color'),
            fontColor: event.target.style.getPropertyValue('--font-color'),
            fontColorAlternative: event.target.style.getPropertyValue('--font-color-alternative'), 
            shadowColor: event.target.style.getPropertyValue('--shadow-color'), 
            fontShadowColor: event.target.style.getPropertyValue('--font-shadow-color'), 
            borderColor: event.target.style.getPropertyValue('--border-color'), 
            lineColor: event.target.style.getPropertyValue('--line-color'), 
            containerColor: event.target.style.getPropertyValue('--container-color')
        }

        setTheme(palette_theme_list);

        localStorage.setItem("palette-theme-list", JSON.stringify(palette_theme_list))

    }



    const setMenuColor = (palette_menu_list) => {
        document.documentElement.style.setProperty('--menu-color', palette_menu_list.menuColor);
        document.documentElement.style.setProperty('--font-menu-color', palette_menu_list.menuFontColor);
    }

    const setPaletteMenu = (event) => {
        var palette_menu_list = {
            menuColor: event.target.style.getPropertyValue('--menu-color'),
            menuFontColor: event.target.style.getPropertyValue('--font-menu-color')
        }


        setMenuColor(palette_menu_list);

        localStorage.setItem("palette-menu-list", JSON.stringify(palette_menu_list))


    }

    const setMenuStyle = (menuWidth, menuHeight, menuMinHeight, menuDisplay, menuMargin) => {
        document.documentElement.style.setProperty('--menu-width', menuWidth);
        document.documentElement.style.setProperty('--menu-height', menuHeight);
        document.documentElement.style.setProperty('--menu-min-height', menuMinHeight);
        document.documentElement.style.setProperty('--menu-display', menuDisplay);
        document.documentElement.style.setProperty('--menu-margin', menuMargin);
    }

    const setMenuType = (event) => {
        const currentMenuWidth = event.target.style.getPropertyValue('--menu-width');
        const currentMenuHeight = event.target.style.getPropertyValue('--menu-height');
        const currentMenuMinHeight = event.target.style.getPropertyValue('--menu-min-height');
        const currentMenuDisplay = event.target.style.getPropertyValue('--menu-display');
        const currentMenuMargin = event.target.style.getPropertyValue('--menu-margin');

        setMenuStyle(currentMenuWidth, currentMenuHeight, currentMenuMinHeight, currentMenuDisplay, currentMenuMargin);

        localStorage.setItem('menuWidth', currentMenuWidth);
        localStorage.setItem('menuHeight', currentMenuHeight);
        localStorage.setItem('menuMinHeight', currentMenuMinHeight);
        localStorage.setItem('menuDisplay', currentMenuDisplay);
        localStorage.setItem('menuMargin', currentMenuMargin);

    }



    return(

        <div ref={dropDownRef}>
            <div className="configOpenOptions">
                <button onClick={handleOpenDropDown}><SettingsIcon className="configIcon"/> </button>
            </div>
            <div className={`containerStyle ${isActive ? "active" : "inactive"}`}>
                
                <div className="headerStyled">
                    <h2>
                        Theme Mode
                    </h2>
                </div>
                <div className="contentStyed">
                    {configOptions.map(e => e.themeColor.map((th,idx) => {
                        return(
                            <div key={idx} className="themeContent">
                                
                                <div>
                                    <p>{th.type}</p>

                                    <div className="themeContainer" style={{
                                        '--theme-color': th.color,
                                        '--font-color': th.fontColor,
                                        '--font-color-alternative': th.fontColorAlternative,
                                        '--shadow-color': th.shadowColor,
                                        '--font-shadow-color': th.fontShadowColor,
                                        '--border-color': th.borderColor,
                                        '--line-color': th.lineColor,
                                        '--container-color': th.containerColor,
                                    }} onClick={setPalette}>

                                    </div>
                                </div>
                            </div>
                        )
                    }))}
                </div>


                <div className="headerStyled">
                    <h2>
                        Menu Background
                    </h2>
                </div>
                <div className="contentStyed" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}> 
                    {configOptions.map(e => e.menuColor.map((mn,idx) => {
                            return(
                                <div key={idx} className="menuContent">
                                    
                                    <div>

                                        <div className="menuContainer" style={{
                                            '--menu-color': mn.color,
                                            '--font-menu-color': mn.fontColor,
                                        }}
                                        onClick={setPaletteMenu}
                                        >

                                        </div>
                                    </div>
                                </div>
                            )
                    }))}            
                </div>

                <div className="headerStyled">
                    <h2>
                        Layout Menu
                    </h2>
                </div>
                <div className="contentStyed">
                    {configOptions.map(e => e.menuStyle.map((type, idx) => {

                        return(
                            <div key={idx} className="typeContent">

                                <div>
                                    <div className="typeContainer">
                                        <p  style={{
                                            '--menu-width': type.menuWidth,
                                            '--menu-height': type.menuHeight,
                                            '--menu-min-height': type.menuMinHeight,
                                            '--menu-display': type.menuDisplay,
                                            '--menu-margin': type.menuMargin
                                        }} 
                                        onClick={setMenuType}>Type {idx+1}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    }))

                    }
                </div>

            </div>
        </div>
    );
}

export default ThemeConfig;