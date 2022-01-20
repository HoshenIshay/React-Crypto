import React from 'react'

function Coin({ name, icon, price, symbol ,websiteUrl }) {
    return (
        <div className='coin'>
            <h2>{name} <img src={icon}/></h2>
            <h4>Price: {price}</h4>
            <h4>Symbol: {symbol}</h4>
            <h4>Website: {websiteUrl}</h4>
        </div>
    )
}

export default Coin
