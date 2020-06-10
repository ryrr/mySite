import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
let Noise = (props) => {
    const styles = StyleSheet.create({
        starCol: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            "@media (max-width: 600px)": {
                flexDirection: 'column',
            }
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
            marginBottom:'30px',
            "@media (max-width: 600px)": {
                width:'90%'
            }
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
            width:'80%'
        },
        red:{
            color:'red',
            textDecoration:'underline'
        },
        starImg: {
            height: '150px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius:'10px',
            "@media (max-width: 600px)": {
                height: '130px',
            }
        },
    })
    return(
        <div className={css(styles.starItem)}>
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
            <div className={css(styles.starDesc)}>
                <h2 className={css(styles.starTitle)}>NOISE</h2>
                <p className={css(styles.starSecDesc)}>
                    some cool AI generated art created using the <a href='https://github.com/aayars/py-noisemaker' className={css(styles.red)}>py-noisemaker</a> library by @aayars
                </p>
            </div>
        </div>
    )
}
export default Noise