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
                <nav className='navbar'>
                    <div className='start-bootstrap'>Start Bootstrap</div>
                    <div className='buttons-background'>
                    <div className='buttons'>
                            <button className='menu-button' onClick={() => this.toggleSidebar()}>Menu</button>
                            <div>SERVICES</div>
                            <div>PORTFOLIO</div>
                            <div>ABOUT</div>
                            <div>TEAM</div>
                            <div>CONTACT</div>
                    </div>
                    </div>
                </nav>
            </header>
        )
    }
}