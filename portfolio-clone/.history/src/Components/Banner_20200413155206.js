import React from 'react'



export default class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            hideSidebar: true
        }
    }

    toggleSidebar() {
        this.setState((prev) => {
            return {
                hideSidebar: !prev.hideSidebar
            }
        })
        console.log(this.state.hideSidebar)
        
    }
    render() {
        return (
            <header className='header'>
                <nav>
                    <div className='start-bootstrap'>Start Bootstrap</div>
                            <button className='menu-button' onClick={() => this.toggleSidebar()}>Menu</button>
                            <div className={this.state.hideSidebar ? 'hide': ''}>
                                <div className='buttons-background'>
                                    <div className='buttons'>
                                        <a href='/services' className='button'>SERVICES</div>
                                        <div className='button'>PORTFOLIO</div>
                                        <div className='button'>ABOUT</div>
                                        <div className='button'>TEAM</div>
                                        <div className='button'>CONTACT</div>
                                    </div>
                                </div>
                            </div>
                </nav>
            </header>
        )
    }
}