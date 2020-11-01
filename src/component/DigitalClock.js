import React from 'react'
//React的生命周期
class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    //组件初始化
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    //组件更新
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    //组件卸载
    componentDidUpdate(currentprops,currentState){
        console.log(currentState)
    }
    render(){
        return(
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default DigitalClock