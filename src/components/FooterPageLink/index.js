import React from "react"
import store from "Src/store"
import FooterLinkList from "Src/components/FooterLinkList"
import FooterPage from "Src/components/FooterPage"

import './style.less'

export default ({text, children=undefined, className=''}) => {
    const page = <FooterPage>{children}</FooterPage>
    return(
        <a href="javascript:;" onClick={() => store.changePage(page)} className={`site-footer-link ` + className }>
            {text}  <span dangerouslySetInnerHTML={{__html: "&rsaquo;"}} className="footer-page-link-chevron"/>
            </a>
    )
}