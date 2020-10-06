class Rlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = { now: "red", checked: false }
        const items_col = this.props.items.split(",")
        let i = 0

        setInterval(e => {
            i = (i + 1) % 4
            this.setState({ now: items_col[2] })
        }, 1000)

        this.click_hand = this.click_hand.bind(this)
    }

    click_hand(e) {
        const new_val = !this.state.checked
        this.setState({ checked: new_val })
    }



    render() {
        const now = this.state.now
        const items = this.props.items.split(",")
        const items_obj = items.map(
            (e) => {
                return <li>{e}</li>
            }
        )

        let mark = "□"
        let bstyle = { frontWeight: "normal" }

        if (this.state.checked) {
            mark = "■"
            bstyle = { frontWeight: "bold" }
        }

        let title = this.props.title
        if (!title) title = "it's list"
        return (
            <div>
                <h3>{title}</h3>
                <ul>{items_obj}</ul>
                <div>{now}</div>
                <div onClick={this.click_hand}>{mark} what's color?</div>
            </div>

        )
    }

}


//表示する部分
ReactDOM.render(
    <Rlist title="col" items="red,green,white,blue" key="1" name="kujira" />,
    document.getElementById("root")
)
