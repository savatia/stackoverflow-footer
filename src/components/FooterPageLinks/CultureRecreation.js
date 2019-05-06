import React from "react"
import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"

export default class CultureRecreation extends React.Component{
    render(){
        return(
            <div className="site-footer-page-wrapper">
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="English Language & Usage"/>
                        <FooterLink text="Skeptics"/>
                        <FooterLink text="Mi Yodeya (Judaism)"/>
                        <FooterLink text="Christianity"/>
                        <FooterLink text="English Language Learners"/>
                        <FooterLink text="Japanese Language"/>
                    </FooterLinkList>
                </div>
            </div>
        )
    }

}