import React, { useState } from 'react'
import { Overlay } from './Overlay.jsx'

export default {
  title: 'Base/Overlay',
  component: Overlay
}

const Story = props => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOverlayOpen(true)}>
        Open overlay
      </button>
      <Overlay
        isVisible={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        style={{ backgroundColor: 'hsla(0, 0%, 0%, .8)' }}
      >
        <div style={{
          background: 'hsl(0, 0%, 100%)',
          width: '400px',
          height: '250px',
          margin: '48px auto'
        }}>
          Overlay content
        </div>
      </Overlay>
    </>
  )
}

export const Default = Story.bind({})
Default.args = {}
