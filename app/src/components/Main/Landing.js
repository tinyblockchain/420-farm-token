import React from 'react'
import '../../index.css'
import wallpaper from '../../assets/wallpaper.jpeg'

export default function Landing() {
    const batches = [
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

    const stages = [
        { name: 'Seedling', period: '2-3' },
        { name: 'Vegetative', period: '3-16' },
        { name: 'Flowering', period: '8-11' }
    ]

    const batchList = batches.map(batch => {
        return (
            <li className='landing-li'>
                <span className='highlight'>Day {batch.day}. </span>
                START Germination period batch {batch.batch}
            </li>
        )
    })

    const stageList = stages.map(stage => {
        return (
            <li className='landing-li'>
                <span className='highlight'>{stage.name} </span>
                ({stage.period} weeks)
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
                    {batchList}
                </ul>
                <p className='landing-p' style={{marginTop: 32 }}>
                    Staking your tokens will earn progressive APY rewards during
                    the different stages:
                </p>
                <div className='divider' />
                <ul className='landing-ul'>
                    {stageList}
                </ul>
                <p className='landing-p' style={{marginTop: 32 }}>
                    <span className='highlight'>
                        Minting NFT by providing LP from Uniswap V2 will earn
                        APY rewards and perks!
                    </span>
                </p>
                <p className='disclaimer'>
                    As a user of the 420 Farm platform you by default are in
                    agreement that you do so at your own risk. all liability
                    resides with the user(s). Risk only what you are willing to
                    lose in this game.
                </p>
            </div>
            <div className='wallpaper-container'>
                <img src={wallpaper} alt='wallpaper' className='wallpaper'/>
            </div>
        </div>
    )
}