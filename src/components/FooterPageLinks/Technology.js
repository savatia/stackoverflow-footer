import React from "react"
import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"

export default class Technology extends React.Component{
    render(){
        return(
            <div className="site-footer-page-wrapper">
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Stack Overflow"/>
                        <FooterLink text="Server Fault"/>
                        <FooterLink text="Super User"/>
                        <FooterLink text="Web Applications"/>
                        <FooterLink text="Ask Ubuntu"/>
                        <FooterLink text="Webmasters"/>
                        <FooterLink text="Game Development"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="TeX - LaTeX"/>
                        <FooterLink text="Software Engineering"/>
                        <FooterLink text="Unix & Linux"/>
                        <FooterLink text="Ask Different (Apple)"/>
                        <FooterLink text="WordPress Development"/>
                        <FooterLink text="Geographic Information Systems"/>
                        <FooterLink text="Electrical Engineering"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Android Enthusiasts"/>
                        <FooterLink text="Information Security"/>
                        <FooterLink text="Database Administrators"/>
                        <FooterLink text="Drupal Answers"/>
                        <FooterLink text="SharePoint"/>
                        <FooterLink text="User Experience"/>
                        <FooterLink text="Mathematica"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Salesforce"/>
                        <FooterLink text="ExpressionEngine® Answers"/>
                        <FooterLink text="Stack Overflow em Português"/>
                        <FooterLink text="Blender"/>
                        <FooterLink text="Network Engineering"/>
                        <FooterLink text="Cryptography"/>
                        <FooterLink text="Code Review"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Magento"/>
                        <FooterLink text="Software Recommendations"/>
                        <FooterLink text="Signal Processing"/>
                        <FooterLink text="Emacs"/>
                        <FooterLink text="Raspberry Pi"/>
                        <FooterLink text="Stack Overflow на русском"/>
                        <FooterLink text="Programming Puzzles & Code Golf"/>
                    </FooterLinkList>
                </div>
                <div className="site-footer-page-col">
                    <FooterLinkList>
                        <FooterLink text="Stack Overflow en español"/>
                        <FooterLink text="Ethereum"/>
                        <FooterLink text="Arduino"/>
                        <FooterLink text="Bitcoin"/>
                        <strong><FooterLink text="more (15)"/></strong>
                    </FooterLinkList>
                </div>
            </div>
        )
    }

}