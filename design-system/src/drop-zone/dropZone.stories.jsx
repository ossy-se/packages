import React, { useState } from 'react'
import { DropZone } from './DropZone.jsx'

export default {
  title: 'Action/DropZone',
  component: DropZone,
};

export const ComponentExample = () => {
  const [droppedValue, setDroppedValue] = useState()

  const dropZoneStyles = {
    width: '200px',
    height: '100px',
    background: 'hsl(0, 0%, 95%)',
    border: '1px solid hsl(0, 0%, 90%)',
    marginBottom: '16px',
    textAlign: 'center'
  }

  const dragableBoxStyles = {
    width: '50px',
    height: '50px',
    background: 'hsl(0, 0%, 95%)',
    border: '1px solid hsl(0, 0%, 90%)',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <section>

      <DropZone onDrop={data => setDroppedValue(data)}>
        <div style={dropZoneStyles}>
          <div style={{ padding: '16px'}}>
            Drop a box on me!
          </div>
          {droppedValue}
        </div>
      </DropZone>

      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px'}}>
        <DropZone.Dragable dragData="Foo" style={dragableBoxStyles}>
          <div>
            Foo
          </div>
        </DropZone.Dragable>
        <DropZone.Dragable dragData="Bar" style={dragableBoxStyles}>
          <div>
            Bar
          </div>
        </DropZone.Dragable>
        <DropZone.Dragable dragData="Baz" style={dragableBoxStyles}>
          <div>
            Baz
          </div>
        </DropZone.Dragable>
      </div>

    </section>
  )
  }

// export const HOCExample = () => {
//     const [droppedValue, setDroppedValue] = useState()
//
//     const dropZoneStyles = {
//       width: '200px',
//       height: '100px',
//       background: 'hsl(0, 0%, 95%)',
//       border: '1px solid hsl(0, 0%, 90%)',
//       marginBottom: '16px',
//       textAlign: 'center'
//     }
//
//     const dragableBoxStyles = {
//       width: '50px',
//       height: '50px',
//       background: 'hsl(0, 0%, 95%)',
//       border: '1px solid hsl(0, 0%, 90%)',
//       borderRadius: '2px',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }
//
//     const DropZone = () => (
//
//     )
//
//
//     const DropZone = asDropZone
//
//     return (
//       <section>
//
//         <DropZone onDrop={data => setDroppedValue(data)}>
//           <div style={dropZoneStyles}>
//             <div style={{ padding: '16px'}}>
//               Drop a box on me!
//             </div>
//             {droppedValue}
//           </div>
//         </DropZone>
//
//         <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px'}}>
//           <DropZone.Dragable dragData="Foo" style={dragableBoxStyles}>
//             <div>
//               Foo
//             </div>
//           </DropZone.Dragable>
//           <DropZone.Dragable dragData="Bar" style={dragableBoxStyles}>
//             <div>
//               Bar
//             </div>
//           </DropZone.Dragable>
//           <DropZone.Dragable dragData="Baz" style={dragableBoxStyles}>
//             <div>
//               Baz
//             </div>
//           </DropZone.Dragable>
//         </div>
//
//       </section>
//     )
//     }
