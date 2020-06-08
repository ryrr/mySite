import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
let Project = (props) => {
    let [expanded, setExpanded] = useState(true)
    const styles = StyleSheet.create({
        projectContainer: {
            //border: 'solid red',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            width: 'auto',
            maxWidth: '500px',
            backgroundColor: 'black',
            opacity: '0.5',
            marginBottom: '30px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        projSmall: {
            display: 'flex',
            justifyContent: 'center',
            margin: '10px',
            alignItems: 'center',
            borderRadius: '10px',
            /*
            height: '100px',
            width: '100px',
            backgroundColor: 'rgb(167, 153, 149)'
            */
        },
        projectName: {
            margin: '0px',
            marginTop: '10px',
            fontFamily: 'Source Code Pro',
        },
        projTop: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        },
        projInfo: {
            width: '100%',
            marginRight: '10px',
            marginLeft: '10px',
            color: 'rgb(167, 153, 149)',
            fontFamily: 'helvetica',
            textAlign: 'left'
        },
        projLinks: {
            paddingTop: '3px',
        }

    })
    return (
        <div className={css(styles.projectContainer)}>
            <div className={css(styles.projSmall)} onClick={() => { setExpanded(!expanded) }}></div>
            {expanded ?
                <div className={css(styles.projInfo)}>
                    <div className={css(styles.projTop)}>
                        <h1 className={css(styles.projectName)}>{props.info.name}</h1>
                        <div className={css(styles.projLinks)}>
                            {props.info.github ? <a href={props.info.github}><i className="fab fa-github fa-2x gitlink"></i></a> : null}
                            {props.info.link ? <a href={props.info.link}><i className="fas fa-globe-americas fa-2x weblink"></i></a> : null}
                        </div>
                    </div>
                    <p className={css(styles.projectDesc)}>{props.info.desc}</p>
                </div>
                : null
            }
        </div >
    )
}

export default Project