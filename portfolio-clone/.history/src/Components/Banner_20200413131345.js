import React from 'react'



export default class Banner extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <header className='header'>
                <nav>
                    <ul className='buttons'>
                        <li>
                            <a>SERVICES</a>
                        </li>
                        <li>
                            <a>PORTFOLIO</a>
                        </li>
                        <li>
                            <a>ABOUT</a>
                        </li>
                        <li>
                            <a>TEAM</a>
                        </li>
                        <li>
                            <a>CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}