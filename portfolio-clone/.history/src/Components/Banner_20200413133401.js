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
                   
                            <div>PORTFOLIO</div>
                   
                            <div>ABOUT</div>
                    
                            <div>TEAM</div>
                   
                            <div>CONTACT</div>
                     
                    </div>
                </nav>
            </header>
        )
    }
}