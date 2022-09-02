import './section.scss'
import React from 'react'

export const Section = props => {
  return (
    <div className={`section ${props.classname}`}>
      { props.children }
    </div>
  )
}

export const SectionContent = props => {

  const bgImage = props.bgImage ? {
    backgroundImage: `url(${props.bgImage})`
  } : {}

  return (
    <div 
      className={`section__content ${props.classname}`}
      style={bgImage}
    >
      { props.children }
    </div>
  )
}

