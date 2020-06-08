import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Project from './Project.js'
let Body = (props) => {
    const styles = StyleSheet.create({
        work: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        home: {
            
        },
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
            backgroundColor:'rgb(0,0,0,0.5)',    
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',  
            width:'100%'
        },
        starItem:{
            borderRadius:'10px',
            fontFamily: 'helvetica',
            color: 'rgb(167, 153, 149)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        starDesc:{
            backgroundColor:props.color,
            opacity:'0.5',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            width:'100%'
        },
        starTitle:{
            fontFamily: 'Source Code Pro',
            textAlign:'left',
            fontSize:'25pt',
            margin:'0px',
            width:'80%',
            marginLeft:'15px'

        },
        starSecDesc:{
            textAlign:"left",
            marginLeft:'30px',
            width:'100%'
        },
        starImg: {
            height: '150px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius:'10px'
        },
        red:{
            color:'red',
            textDecoration:'underline'
        }
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
                <Project color={props.color} info={tonightsTunes}></Project>
                <Project color={props.color} info={citiBiker}></Project>
            </div>
        )
    }

    //**********************STAR
    else {
        return (
            <div className={css(styles.starItem)}>
                <div className={css(styles.starRow)}>
                    <img src='https://pbs.twimg.com/media/EZN58KPU4AAD0Dg?format=jpg&name=medium' className={css(styles.starImg)}></img>
                    <img src='https://pbs.twimg.com/media/EZOsTipVcAAOoJ4?format=jpg&name=medium' className={css(styles.starImg)}></img>
                    <img src='https://pbs.twimg.com/media/EZNwgc0UwAAo6uQ?format=jpg&name=medium' className={css(styles.starImg)}></img>
                    <img src='https://pbs.twimg.com/media/EZBBl34XYAEwHU_?format=jpg&name=medium' className={css(styles.starImg)}></img>
                </div>
                <div className={css(styles.starDesc)}>
                    <h2 className={css(styles.starTitle)}>NOISE</h2>
                    <p className={css(styles.starSecDesc)}>
                        some cool AI generated art created using the <a href='https://github.com/aayars/py-noisemaker' className={css(styles.red)}>py-noisemaker</a> library by @aayars
                    </p>
                </div>
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
