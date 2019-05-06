import React from "react"
import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"

export default class LifeArts extends React.Component{
    render(){
        return(
            <div className="site-footer-page-wrapper">
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Photography"/>
                        <FooterLink text="Science Fiction & Fantasy"/>
                        <FooterLink text="Graphic Design"/>
                        <FooterLink text="Movies & TV"/>
                        <FooterLink text="Music: Practice & Theory"/>
                        <FooterLink text="Worldbuilding"/>
                        <FooterLink text="Seasoned Advice (cooking)"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Skeptics"/>
                        <FooterLink text="Home Improvement"/>
                        <FooterLink text="Personal Finance & Money"/>
                        <FooterLink text="Law"/>
                        <strong><FooterLink text="more (15)"/></strong>
                    </FooterLinkList>
                </div>
            </div>
        )
    }

}