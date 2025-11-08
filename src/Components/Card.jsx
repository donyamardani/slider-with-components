import React from 'react'
import Unit from './Unit'

export default function Card({hero}) {
    const {id,name,level,description,img,units}=hero
  return (
   
            <div class="clash-card barbarian">
                <div class={`clash-card__image clash-card__image--${name}`}>
                    <img src={img} alt={`${name}`} />
                </div>
                <div class={`clash-card__level clash-card__level--${name}`}>{level}</div>
                <div class="clash-card__unit-name">{name}</div>
                <div class="clash-card__unit-description">
                   {description}
                </div>

                <div class={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>

                    <Unit units={units}/>
                    <div class="one-third no-border">
                        <div class="stat">150</div>
                        <div class="stat-value">Cost</div>
                    </div>

                </div>

            </div> 
  )
}
