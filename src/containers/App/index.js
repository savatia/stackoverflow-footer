import React from "react"
import Square from "Src/components/Square"
import Footer from "Src/components/Footer"

class App extends React.Component{
    render(){
        return (
            [
                <Square key="square-component"/>,
                <Footer key="footer-component"/>
            ]
        )
    }
}

export default App