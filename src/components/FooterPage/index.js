import React from "react"
import store from "Src/store";
import FooterPageLinks from "Src/components/FooterPageLinks"

import './style.less'

const backSVG = {
    __html: `
<svg aria-hidden="true" class="svg-icon iconArrowLeftAlt" width="18" height="18" viewBox="0 0 18 18">
    <path d="M10.58 16L12 14.59 6.4 9 12 3.41 10.57 2l-7 7z"></path>
</svg>
`
}

export default class FooterPage extends React.Component{

    render(){
        return(
            <div>
                <div style={{display: "flex", flexWrap: "row wrap"}}>
                    <div className="site-footer-page-left">
                        <div>
                            <a href="javascript:;"
                               style={{padding: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: "3px"}}
                               onClick={() => store.changePage(undefined)}
                               dangerouslySetInnerHTML={backSVG} className="site-footer-back-link"/>
                        </div>
                        <div>
                            <div className="site-footer-nav-col-title">Stack Exchange Network</div>
                            <FooterPageLinks/>
                        </div>
                    </div>
                    <div style={{flex: "1"}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}