import React from "react"
import FooterLogo from "Src/components/FooterLogo"
import FooterNav from "Src/components/FooterNav"
import FooterCopyright from "Src/components/FooterCopyright"
import { view } from 'react-easy-state';
import posed from 'react-pose'

import store from "Src/store"

import "./style.less"

const Page = posed.div({
    open: { x: '0%', opacity: 1 },
    closed: { x: '100%', opacity: 0 }
});

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prevPage: undefined,
        }
    }

    render() {
        // const  Item = posed({hostRef} => return item({ref: hostRef}))
        return (
            <footer className="site-footer">
                <div className="site-footer-wrapper">
                    <FooterLogo/>
                    <FooterNav/>
                    <FooterCopyright/>
                    <Page className="footer-pose-page" pose={store.page === undefined ? 'closed' : 'open'}>{store.page}</Page>

                </div>

            </footer>
        )
    }
}

export default view(Footer)