import React from 'react'
import '../styles/setting-bar.scss'
import toolState from '../store/toolState'

const SettingBar = () => {
  return (
    <div className='setting-bar'>
      <div>
        <label htmlFor="line-width">Width</label>
        <input id='line-width' type="number" defaultValue={1} min={1} max={50} onChange={(e) => toolState.setLineWidth(e.target.value)} />
      </div>
      <div>
        <label htmlFor="color-stroke">stroke</label>
        <input id='color-stroke' type="color" onChange={(e) => toolState.setStrokeColor(e.target.value)} />
      </div>
    </div>

  )
}

export default SettingBar