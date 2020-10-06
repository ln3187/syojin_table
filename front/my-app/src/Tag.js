import React from "react"

export class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "yosemite" }

    }

    render() {
        return (
            <div>{this.state.value}</div>
        )
    }

}