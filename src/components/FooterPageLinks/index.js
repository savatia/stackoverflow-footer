import React from "react"
import store from "Src/store"
import FooterPageLink from "Src/components/FooterPageLink"
import FooterPage from "Src/components/FooterPage"

import TechnologyPage from "Src/components/FooterPageLinks/Technology"
import CultureRecreationPage from "Src/components/FooterPageLinks/CultureRecreation"
import LifeArtsPage from "Src/components/FooterPageLinks/LifeArts"
import SciencePage from "Src/components/FooterPageLinks/Science"
import OtherPage from "Src/components/FooterPageLinks/Other"

import "./style.less"

export default class FooterPageLinks extends React.Component{
    render(){
        let currentPage = store.page.props.children.type
        return(
            <ul className="site-footer-link-list">
                <li>
                    <FooterPageLink text="Technology" className={currentPage === TechnologyPage ? 'active' : ''}><TechnologyPage/></FooterPageLink>
                </li>
                <li>
                    <FooterPageLink text="Life / Arts" className={currentPage === LifeArtsPage ? 'active' : ''}><LifeArtsPage/></FooterPageLink>
                </li>
                <li>
                    <FooterPageLink text="Culture / Recreation" className={currentPage === CultureRecreationPage ? 'active' : ''}><CultureRecreationPage/></FooterPageLink>
                </li>
                <li>
                    <FooterPageLink text="Science" className={currentPage === SciencePage ? 'active' : ''}><SciencePage/></FooterPageLink>
                </li>
                <li>
                    <FooterPageLink text="Other" className={currentPage === OtherPage ? 'active' : ''}><OtherPage/></FooterPageLink>
                </li>
            </ul>
        )
    }
}