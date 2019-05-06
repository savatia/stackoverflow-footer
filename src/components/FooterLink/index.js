import React from "react"

import './style.less'

export default ({text, to}) => {
    return(
        <a href={to} className="site-footer-link">{text}</a>
    )
}