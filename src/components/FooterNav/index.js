import React from "react"
import FooterNavColumn  from "Src/components/FooterNavColumn"
import FooterLinkList  from "Src/components/FooterLinkList"
import FooterLink  from "Src/components/FooterLink"
import FooterPageLink  from "Src/components/FooterPageLink"

import TechnologyPage from "Src/components/FooterPageLinks/Technology"
import CultureRecreationPage from "Src/components/FooterPageLinks/CultureRecreation"
import LifeArtsPage from "Src/components/FooterPageLinks/LifeArts"
import SciencePage from "Src/components/FooterPageLinks/Science"
import OtherPage from "Src/components/FooterPageLinks/Other"

import "./style.less"
import store from "Src/store";

export default class FooterNav extends React.Component{
    render(){
        return(
            <div  {...this.props} className="site-footer-nav">
                <FooterNavColumn title="Stack Overflow">
                    <FooterLinkList>
                        <FooterLink to="#" text="Questions"/>
                        <FooterLink to="#" text="Jobs"/>
                        <FooterLink to="#" text="Developer Jobs Directory"/>
                        <FooterLink to="#" text="Salary Calculator"/>
                        <FooterLink to="#" text="Help"/>
                        <FooterLink to="#" text="Mobile"/>
                        <FooterLink to="#" text="Disable Responsiveness"/>
                    </FooterLinkList>
                </FooterNavColumn>
                <FooterNavColumn title="Products">
                    <FooterLinkList>
                        <FooterLink to="#" text="Teams"/>
                        <FooterLink to="#" text="Talent"/>
                        <FooterLink to="#" text="Engagement"/>
                        <FooterLink to="#" text="Enterprise"/>
                    </FooterLinkList>
                </FooterNavColumn>
                <FooterNavColumn title="Company">
                    <FooterLinkList>
                        <FooterLink to="#" text="About"/>
                        <FooterLink to="#" text="Press"/>
                        <FooterLink to="#" text="Work Here"/>
                        <FooterLink to="#" text="Legal"/>
                        <FooterLink to="#" text="Privacy Policy"/>
                        <FooterLink to="#" text="Contact Us"/>
                    </FooterLinkList>
                </FooterNavColumn>
                <FooterNavColumn title="Stack Exchange Network">
                    <FooterLinkList>
                        <FooterPageLink text="Technology"><TechnologyPage/></FooterPageLink>
                        <FooterPageLink text="Life / Arts"><LifeArtsPage/></FooterPageLink>
                        <FooterPageLink text="Culture / Research"><CultureRecreationPage/></FooterPageLink>
                        <FooterPageLink text="Science"><SciencePage/></FooterPageLink>
                        <FooterPageLink text="Other"><OtherPage/></FooterPageLink>
                    </FooterLinkList>
                </FooterNavColumn>
            </div>
        )
    }
}