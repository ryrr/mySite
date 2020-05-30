import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
let Body = (props) => {
    if (props.section === 'home') {
        return (
            <div className={css(styles.home)}>
                <p>
                    Hi I'm Ryan, an aspiring web-developer from NYC. Welcome to my website
				</p>
            </div>
        )
    }
    else if (props.section === 'work') {
        return (
            <div className={css(styles.work)}>
                <a href="https://github.com/RiPRR/SongRater">
                    <img src="https://gh-card.dev/repos/RiPRR/SongRater.svg" />
                </a>
                <a href="https://github.com/RiPRR/citiBiker">
                    <img src="https://gh-card.dev/repos/RiPRR/citiBiker.svg" />
                </a>
                <a href="https://github.com/RiPRR/tonightsTunes">
                    <img src="https://gh-card.dev/repos/RiPRR/tonightsTunes.svg" />
                </a>
                <a href="https://github.com/RiPRR/mySite">
                    <img src="https://gh-card.dev/repos/RiPRR/mySite.svg" />
                </a>
            </div>
        )
    }
    else {
        return (
            <div className={css(styles.starRow)}>
                <div className={css(styles.starCol)}>
                    <img src='https://pbs.twimg.com/media/EZN58KPU4AAD0Dg?format=jpg&name=medium' className={css(styles.starImg)}></img>
                    <img src='https://pbs.twimg.com/media/EZOsTipVcAAOoJ4?format=jpg&name=medium' className={css(styles.starImg)}></img>
                </div>
                <div className={css(styles.starCol)}>
                    <img src='https://pbs.twimg.com/media/EZNwgc0UwAAo6uQ?format=jpg&name=medium' className={css(styles.starImg)}></img>
                    <img src='https://pbs.twimg.com/media/EZBBl34XYAEwHU_?format=jpg&name=medium' className={css(styles.starImg)}></img>
                </div>
            </div>
        )
    }
}
export default Body

const styles = StyleSheet.create({
    work: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home: {
        textAlign: 'center',
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        opacity: '0.5',
        color: 'rgb( 225, 213, 210)'
    },
    starCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starImg: {
        height: '250px',
        margin: '10px',
        cursor: 'pointer'
    }
})

//green 
//text: 105, 113, 93
//bg:   21, 23, 20

//white
//text: 225, 213, 210
//bg:   167, 153, 149

//yellow
//bg:   45, 41, 29
//text: 163, 146, 63 

//red
//bg: 169, 84, 56
//text: 83, 37, 13
