import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../css/index.css';
import Body from './Body.js'
import {Helmet} from "react-helmet";
let Site = (props) => {
    let [section, setSection] = useState('home')
    let [color, setColor] = useState('black')
    let [bgColor, setBgColor] = useState('#DEE2FF')
    const styles = StyleSheet.create({
        all: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: "center"
        },
        heading: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleDiv: {
            color: color,
            textAlign: 'center',
        },
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Source Code Pro',
            width: '70%',
            fontSize: '18pt',
            marginBottom: '30px',
            color: color,
            '@media (max-width: 600px)': {
                width: '70%',
                fontSize: '15pt',
                marginBottom: '0px',
            }
        },
        img: {
            height: '250px',
        },
        tab: {
            cursor: 'pointer',
            opacity: '.3',
        },
        selected: {
            cursor: 'pointer',
            opacity: '.6'
        }
    })
    return (
        <div className={css(styles.all)}>
            <Helmet>
                <style>
                    {`body { background-color:${bgColor};}`}
                </style>
            </Helmet>
            <div className={css(styles.heading)}>
                <div className={css(styles.titleDiv)}>
                    <h1 class='title'>ryan rivera</h1>
                </div>
                <div className={css(styles.nav)}>
                    <h2 onClick={() => { setSection('home') }} className={section === 'home' ? css(styles.selected) : css(styles.tab)}>about</h2>
                    <h2 onClick={() => { setSection('star') }} className={section === 'star' ? css(styles.selected) : css(styles.tab)}>*</h2>
                    <h2 onClick={() => { setSection('work') }} className={section === 'work' ? css(styles.selected) : css(styles.tab)}>work</h2>
                </div>
            </div>
            <Body setColor={setBgColor} section={section} color={color}></Body>
        </div>
    )
}


export default Site

