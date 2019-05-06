import React from "react"

import './style.less'

export default class FooterCopyright extends React.Component{
    render() {
        return (
            <div {...this.props} className="site-footer-copyright">
                    <ul className="-list">
                        <li className="-item"><a className="site-footer-link"
                                                 href="https://stackoverflow.blog?blb=1">Blog</a></li>
                        <li className="-item"><a href="https://www.facebook.com/officialstackoverflow/"
                                                 className="site-footer-link">Facebook</a></li>
                        <li className="-item"><a href="https://twitter.com/stackoverflow" className="site-footer-link">Twitter</a>
                        </li>
                        <li className="-item"><a href="https://linkedin.com/company/stack-overflow"
                                                 className="site-footer-link">LinkedIn</a></li>
                    </ul>

                    <p className="site-footer-copyright-attr">
                        site design / logo © 2018 Stack Exchange Inc; user contributions licensed under <a
                        href="https://creativecommons.org/licenses/by-sa/3.0/" rel="license">cc by-sa 3.0</a>
                        with <a href="https://stackoverflow.blog/2009/06/25/attribution-required/" rel="license">attribution
                        required</a>.
                        <span id="svnrev">rev&nbsp;2018.7.5.30950</span>
                    </p>
            </div>
        )
    }
}