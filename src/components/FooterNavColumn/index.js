import React from "react"

import './style.less'

export default ({title, children=undefined}) => {
    return(
        <div className="site-footer-nav-col">
            <div className="site-footer-nav-col-title">{title}</div>
            <div className="site-footer-nav-col-body"> {children}</div>
        </div>

    )
}