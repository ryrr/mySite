import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Project from './Project.js'
import Noise from './Noise.js';
import Color from './Color.js';
import whipVid from 'url:../media/whiprecording.mp4'

let Body = (props) => {
    const styles = StyleSheet.create({
        hometext:{
            textAlign: 'center',
            fontFamily: 'helvetica',
            fontWeight: 'bold',
            fontSize: '13pt',
            color: props.color,
            opacity:'0.5'
        },
        homeLinks:{
            display:'flex',
            justifyContent:"center",
            color:props.color,
            opacity:'0.5'
        },
        star:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        work: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'70%',
            "@media (max-width: 600px)": {
                width:'90%'   
            }
        },
    })
     //**********************HOME
    if (props.section === 'home') {
        return (
            <div className={css(styles.home)}>
                <p className={css(styles.hometext)}>
                    Hi I'm Ryan, Welcome to my website
				</p>
                <div className={css(styles.homeLinks)}>
                    <p>
                        <a className='links' href='https://github.com/riprr'>github</a>
                         /
                        <a className='links' href='https://google.com'>resume</a>
                    </p>
                </div>
            </div>
        )
    }
     //**********************WORK
    else if (props.section === 'work') {
        let tonightsTunes = {
            name: 'tonightsTunes',
            desc: 'Generate a playlist featuring music from nearby artists',
            link: 'http://tonightstunes.xyz',
            github: 'http://github.com/RiPRR/tonightstunes'
        }
        let citiBiker = {
            name: 'citiBiker',
            desc: "a deeper look into NYC's CitiBike system",
            link: '',
            github: 'https://github.com/RiPRR/citiBiker'
        }
        return (
            <div className={css(styles.work)}>
                <Project src={whipVid} color={props.color} info={tonightsTunes}></Project>        
                <Project color={props.color} info={citiBiker}></Project>
            </div>
        )
    }

    //**********************STAR
    else {
        return (
            <div className={css(styles.star)}>
                <Color setColor={props.setColor}color={props.color}></Color>
                <Noise color={props.color}></Noise>
            </div>
        )
    }
}
export default Body


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
