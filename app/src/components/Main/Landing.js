import React from 'react'
import '../../index.css'

export default function Landing() {
    const items = [
        { day: 1, batch: 'A' },
        { day: 4, batch: 'B' },
        { day: 7, batch: 'C' },
        { day: 10, batch: 'D' },
        { day: 13, batch: 'E' },
        { day: 16, batch: 'F' },
        { day: 18, batch: 'G' },
        { day: 21, batch: 'H' },
        { day: 24, batch: 'I' },
        { day: 27, batch: 'J' },
    ]
    const listItems = items.map(item => {
        return (
            <li className='landing-li'>
                <span className='highlight'>Day {item.day}. </span>
                START Germination period batch {item.batch}
            </li>

        )
    })

    return (
        <div className='landing'>
            <div className='landing-header'>
                <h2 className='landing-h2'>Grow your<br/>dreams</h2>
            </div>
            <div className='landing-section'>
                <p className='landing-p'>
                    Start Germination period, pooled COIN for up to 3 days.
                    You will receive a proportional percentage of 420,000 tokens
                    during the Germination period. Only 420,000 tokens will be
                    created per Germination periods, for a total of 10
                    Germination periods ending in a fixed supply of 4,200,000
                    tokens. Tokens will be automatically staked.
                </p>
                <div className='divider'/>
                <ul className='landing-ul'>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}