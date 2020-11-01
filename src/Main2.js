import React from 'react'
import ThemeContext from './theme-context'
import ThemedBar from './component/ThemedBar'

const themes = {
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classnames: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    },
}

class Main2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    changTheme(theme){
        this.setState({
            theme,
        })
    }
    render(){
        return(
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="App"> 
                    <header className="App-header">
                        <a href="#theme-switcher" 
                        className="btn btn-light"
                        onClick={() => {this.changTheme('light')}}
                        >浅色主题</a>
                        <a href="#theme-switcher" 
                        className="btn btn-secondary"
                        onClick={() => {this.changTheme('dark')}}
                        >深色主题</a>
                    </header>
                    <ThemedBar />
                </div>
            </ThemeContext.Provider>
            
        )
    }
}
export default Main2