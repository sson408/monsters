import React from 'react'
import './card.styles.css'

export const Card = prop => (
    <div className="card-container">
        <img alt="monsters" src={`https://robohash.org/${prop.monsters.id}?set=set2&size=180x180`}></img>
        <h2>{prop.monsters.name}</h2>
        <p>{prop.monsters.email}</p>
    </div>
)