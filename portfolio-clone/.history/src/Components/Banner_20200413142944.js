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
                <div>
                    <nav className={this.state.toggleSidebar ? 'navbar': ''}>
                        <div className='start-bootstrap'>Start Bootstrap</div>
                        <button className='menu-button' onClick={() => this.toggleSidebar()}>Menu</button>
                        {/* <div className='buttons-background'> */}
                        <div className='buttons'>
                                <div>SERVICES</div>
                                <div>PORTFOLIO</div>
                                <div>ABOUT</div>
                                <div>TEAM</div>
                                <div>CONTACT</div>
                        </div>
                        {/* </div> */}
                    </nav>
                </div>
            </header>
        )
    }
}