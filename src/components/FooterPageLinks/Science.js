import React from "react"
import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"

export default class Science extends React.Component{
    render(){
        return(
            <div className="site-footer-page-wrapper">
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="MathOverflow"/>
                        <FooterLink text="Mathematics"/>
                        <FooterLink text="Cross Validated (stats)"/>
                        <FooterLink text="Theoretical Computer Science"/>
                        <FooterLink text="Physics"/>
                        <FooterLink text="Chemistry"/>
                        <FooterLink text="Biology"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Computer Science"/>
                        <FooterLink text="Philosophy"/>
                        <strong><FooterLink text="more (15)"/></strong>
                    </FooterLinkList>
                </div>
            </div>
        )
    }

}