import React from "react"

export default class Valin extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }

    }

    doChange(e) {
        const n_val = e.target.value
        this.setState({ value: n_val })

        if (this.props.onChange) {
            this.props.onChange({
                target: this,
                value: n_val
            })
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value })
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={e => this.doChange(e)} />
        )
    }
}