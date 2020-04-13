import React from 'react'



export default class Banner extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <header className='header'>
                <nav className='navbar'>
                    <div className='buttons'>
                        
                            <div>SERVICES</div>
                   
                        <li>
                            <div>PORTFOLIO</div>
                        </li>
                        <li>
                            <div>ABOUT</div>
                        </li>
                        <li>
                            <div>TEAM</div>
                        </li>
                        <li>
                            <div>CONTACT</div>
                        </li>
                    </div>
                </nav>
            </header>
        )
    }
}