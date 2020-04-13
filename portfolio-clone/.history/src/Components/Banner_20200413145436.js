import React from 'react'



export default class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            hideSidebar: false
        }
    }

    toggleSidebar() {
        this.setState((prev) => {
            return {
                hideSidebar: !prev.hideSidebar
            }
        })

    }
    render() {
        return (
            <header className='header'>
                <nav className={this.state.toggleSidebar ? 'show': ''}>
                    <div className='start-bootstrap'>Start Bootstrap</div>
                    <div className='buttons-background'>
                            <button className='menu-button' onClick={() => this.toggleSidebar()}>Menu</button>
                    <div className='buttons'>
                        <div className='hider'>

                            <div>SERVICES</div>
                            <div>PORTFOLIO</div>
                            <div>ABOUT</div>
                            <div>TEAM</div>
                            <div>CONTACT</div>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>
        )
    }
}