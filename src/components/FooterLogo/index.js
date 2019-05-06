import React from "react"

import Square from "Src/components/Square"
import "./style.less"

function createMarkup() {
    return{
        __html: `
        <svg aria-hidden="true" class="svg-icon native iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37">
            <g>
                <path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9z"></path>
                <path d="M23.1 25.99l.68-2.95-16.1-3.35L7 23l16.1 2.99zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5zM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM7 30h16v-3H7v3z" fill="#F48024"></path>
            </g>
        </svg>
        `
    }

}


export default class FooterLogo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a {...this.props} className="site-footer-logo" href="//stackoverflow.com/" target="_blank">
                <Square><div  dangerouslySetInnerHTML={createMarkup()}/></Square>
            </a>
        )
    }
}