import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
let Project = (props) => {
    let [expanded, setExpanded] = useState(false)
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            marginBottom: '20px',
            maxWidth:'500px'
        },
        topContainer:{
            width:'100%',
            minHeight:'10px',
            alignItems:'center',
            backgroundColor:'rgb(0,0,0)',
            borderTopRightRadius:'10px',
            borderTopLeftRadius:'10px',
            opacity:'0.5'
        },
        bottomContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: props.color,
            opacity: '0.5',
            width: '100%',
            borderBottomRightRadius:'10px',
            borderBottomLeftRadius:'10px',
        },
        buttonDiv:{       
            display:'flex',
            justifyContent:'left',
            alignItems:'left',
            paddingLeft:'5px',
            width:'100%',
            "@media (max-width: 600px)": {
                paddingLeft:'5px',
                
            }
        },  
        button: {
            marginTop:'5px',
            borderRadius: '10px',
            height: '22px',
            width: '22px',
            backgroundColor: 'red',
            outline:'none',
            "@media (max-width: 600px)": {
                height: '20px',
                width: '20px',
            }
        },
        projTop: {
            width:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           
        },
        projectName: {
            margin: '0px',
            marginTop:'0px',
            fontFamily: 'Source Code Pro',
            fontSize:'20pt',
            "@media (max-width: 600px)": {
                width:'100%'
            }
        },
        projLinks: {
            paddingTop: '3px',
        },
        projInfo: {
            width:'90%',
            color: 'rgb(167, 153, 149)',
            fontFamily: 'helvetica',
            textAlign: 'left',
            marginLeft:'10px',
            marginRight:'10px',
            "@media (max-width: 600px)": {
                width:'86%'
            }
            
        },
        projectDesc:{
            width:'100%',
            fontSize:'11pt'
        },
        link:{
            color: 'rgb(167, 153, 149)',
            textDecoration:'underline',
        },
        nolink:{
            color: 'rgb(167, 153, 149)',
            textDecoration:'none',
        },
        video:{
            border:'solid red'
        }
    })
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.topContainer)}>
                {props.src ?
                    <div className={css(styles.buttonDiv)}>
                        <button className={css(styles.button)} onClick={() => { setExpanded(!expanded) }}></button>
                    </div>
                    :null
                }
                {expanded ?
                    <video width="100%" height="220" autoPlay loop>
                        <source src={props.src} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    :null
                }
            </div>
            <div className={css(styles.bottomContainer)}>
                    <div className={css(styles.projInfo)}>
                        <div className={css(styles.projTop)}>
                            <h1 className={css(styles.projectName)}><a className={props.info.link?css(styles.link):css(styles.nolink)} href={props.info.link}>{props.info.name}</a></h1>
                            <div className={css(styles.projLinks)}>
                                {props.info.github ? <a href={props.info.github}><i className="fab fa-github fa-2x gitlink"></i></a> : null}
                            </div>
                        </div>
                        <p className={css(styles.projectDesc)}>{props.info.desc}</p>
                    </div>
            </div >
        </div>
    )
}

export default Project