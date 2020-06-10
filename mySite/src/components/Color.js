import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
let Color = (props) => {
    const styles = StyleSheet.create({
        container:{
            backgroundColor:props.color,
            opacity:'0.5', 
            borderRadius:'10px',
            fontFamily: 'helvetica',
            color: 'rgb(167, 153, 149)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            "@media (max-width: 600px)": {
                width:'90%'
            }
        },
        top:{
            width:'100%',
        },
        hexInput:{
            margin:'5px',
            borderRadius:'10px',
            fontSize:'30pt',
            width:'30%',
            color:props.color,
            outline:'none',
            opacity:'0.5'
        },
        bottom:{
            backgroundColor:props.color,
            width:'100%',
            borderRadius:'10px',
        },
        title:{
            fontFamily: 'Source Code Pro',
            textAlign:'left',
            fontSize:'25pt',
            margin:'0px',
            width:'80%',
            marginLeft:'15px'
        },
        desc:{
            textAlign:"left",
            marginLeft:'30px',
            width:'80%',
        },
    })
    return(
        <div className={css(styles.container)}>
            <div className={css(styles.top)}>
                <input placeholder='#' className={css(styles.hexInput)}></input>
            </div>
            <div className={css(styles.bottom)}>
                <h2 className={css(styles.title)}>COLOR</h2>
                <p className={css(styles.desc)}>
                    enter a hex code 😳
                </p>
            </div>
        </div>
    )
}

export default Color