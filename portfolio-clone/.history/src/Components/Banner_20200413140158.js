import React from 'react'



export default class Banner extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <header className='header'>
                <nav className='navbar'>
                    <div className='start-bootstrap'>Start Bootstrap</div>
                    <div className='buttons-background'>
                    <div className='buttons'>
                        
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