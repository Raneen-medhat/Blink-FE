import React from 'react';
import { sideMenuIcons } from './../../utils/data-source';
import { ReactComponent as LogoutIcon } from './../../assets/images/logout.svg';
import './side_menu.scss';

const Side_menu = () => {
    const renderSideMenuIcons = () => {
       return sideMenuIcons.map((Icon, index) => {
            return <div key={index} className={`iconContainer ${index === 1 && 'selected'}`}>
                        <Icon className='svgIcon' />
                    </div>
        })
    };
    return (
        <section id='sideMenu'> 
            <div className='mainIcon'>
                {renderSideMenuIcons()} 
            </div>
            <LogoutIcon className='svgIcon logout'/>
        </section>
    )
}

export default Side_menu;
