import React from 'react'
import '../styles/toolbar.scss'

const Toolbar = () => {
  return (
    <div className='toolbar'>
<div className='toolbar__tools'>
                <button className='toolbar__btn brush'></button>
                <button className='toolbar__btn rectangle'></button>
                <button className='toolbar__btn circle'></button>
                <button className='toolbar__btn eraser'></button>
                <button className='toolbar__btn line'></button>
                <input type="color" className='toolbar__btn'/>
            </div>
            <div className='toolbar__editor'>
                <button className='toolbar__btn undo'></button>
                <button className='toolbar__btn redo'></button>
                <button className='toolbar__btn save'></button>
            </div>
    </div>
  )
}

export default Toolbar