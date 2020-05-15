import React from 'react';
import { sideMenuIcons } from './../../utils/data-source';
import './side_menu.scss';

const Side_menu = () => {
    const renderSideMenuIcons = () => {
       return sideMenuIcons.map((Icon, index) => {
            return <Icon key={index}/>
        })
    };
    return (
        <section id='side_menu'> {renderSideMenuIcons()} </section>
    )
}

export default Side_menu;
