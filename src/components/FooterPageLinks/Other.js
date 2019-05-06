import React from "react"

import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"

export default class Other extends React.Component{
    render(){
        return(
            <div className="site-footer-page-wrapper">
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Meta Stack Exchange"/>
                        <FooterLink text="Stack Apps"/>
                        <FooterLink text="API"/>
                        <FooterLink text="Data"/>
                        <FooterLink text="Area 51"/>
                    </FooterLinkList>
                </div>
            </div>
        )
    }

}