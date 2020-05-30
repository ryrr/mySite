import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../css/index.css';
import Body from './Body.js'
let Site = (props) => {
    let [section, setSection] = useState('home')

    return (
        <div className={css(styles.all)}>
            <div className={css(styles.heading)}>
                <div className={css(styles.titleBack)}>
                    <h1 className={css(styles.title)}>ryan rivera</h1>
                </div>
                <div className={css(styles.nav)}>
                    <h2 onClick={() => { setSection('home') }} className={section === 'home' ? css(styles.selected) : css(styles.tab)}>about</h2>
                    <h2 onClick={() => { setSection('star') }} className={section === 'star' ? css(styles.selected) : css(styles.tab)}>*</h2>
                    <h2 onClick={() => { setSection('work') }} className={section === 'work' ? css(styles.selected) : css(styles.tab)}>work</h2>
                </div>
            </div>
            <Body section={section}></Body>
        </div>
    )
}


export default Site


const grafFont = {
    fontFamily: 'GrafFont',
    src: "url('../fonts/RobinGraffitiFilledin.ttf')"
}

const styles = StyleSheet.create({
    all: {
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        letterSpacing: '10px',
        opacity: '0.5',
        color: 'rgb(225, 213, 210)',
        padding: '20px',
        fontSize: '50pt'
    },
    titleBack: {
        borderRadius: '10px',
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Source Code Pro',
        width: '30%',
        marginBottom: '30px',
        color: 'rgb( 225, 213, 210)'
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