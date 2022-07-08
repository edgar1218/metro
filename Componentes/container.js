import React from 'react'
import Navegar from './Navegar'

const Container = (props) => {
  return (
    <div>
        <Navegar/>
        <div>
            {props.children}
        </div>

    </div>
  )
}

export default Container