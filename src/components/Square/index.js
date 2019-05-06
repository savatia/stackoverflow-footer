import React from "react"
import pose from "react-pose";

import "./style.less"

const Square = pose.div({
    idle: {scale: 1},
    hovered: {scale: 1.5}
})

class SquareWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hovering: false
        }
    }

    render(){
        return(
            <Square
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({hovering: true})}
                onMouseLeave={() => this.setState({hovering: false})}
            >
                {this.props.children}
            </Square>
        )
    }
}

export default SquareWrapper