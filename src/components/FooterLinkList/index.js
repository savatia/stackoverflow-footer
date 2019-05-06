import React from "react"

import './style.less'

export default ({children=[]}) => {
    let elements = [];

    elements = children;

    if(typeof elements.map === 'function') {
    }
    else {
        elements = []
        console.log(elements)
    }
    return(
        <ul className="site-footer-link-list">
            {
                elements.map((link, index) => {
                    return (
                        <li key={index}>
                            {link}
                        </li>
                    )
                })
            }
        </ul>
    )
}