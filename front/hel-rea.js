class Rlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {now : "red"}
        const items_col = this.props.items.split(",")
        let i = 0

        setInterval(e => {
            i = (i + 1)%4
            this.setState({now : items_col[2]})},1000)
    }



    render() {
        const now = this.state.now
        const items = this.props.items.split(",")
        const items_obj = items.map(
            (e) => {
                return <li>{e}</li>
            }
        )

        const click_hand = (e) =>{
            window.alert("you click me!")
        }

        let title = this.props.title
        if (!title) title = "it's list"
        return (
            <div>
                <h3>{title}</h3>
                <ul>{items_obj}</ul>
                <div>{now}</div>
                <div onClick={click_hand}>what's color?</div>
            </div>

        )
    }

}




//表示する部分
ReactDOM.render(
    <Rlist title="col" items = "red,green,white,blue" key = "1"/>,
    document.getElementById("root")
)
