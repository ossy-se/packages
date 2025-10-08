import React from 'react'
import { Text } from '../text'

export const Table = ({
  header = [],
  data = [],
  ...props
}) => {

  return (
    <table {...props} data-table>
      <style href="@ossy/design-system/table" precedence='high' >
      {`
        [data-table] th {
          padding: var(--space-m);
        }

        [data-table] td {
          padding: var(--space-m);
        }
      `}
      </style>
      <thead>
        <tr>
          { header.map(({ label, ...props }) => (
            <th {...props}>
              <Text>{label}</Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          data.map(column => (
            <tr>
              {header.map(({ key }) => (
                <td>
                  <Text>{column[key]}</Text>
                </td>
              ))}
            </tr>
            // <DropZone.Dragable dragData={resource.id} key={resource.id}>
            //   <Stack.Item>
            //     <div
            //       className="hover:bg-96 inset-stretch-m cursor-pointer sans-serif d-flex align-center justify-between"
            //       style={{ borderBottom: '1px solid var(--separator-primary)' }}
            //       onClick={() => setSelectedResourceId(resource.id)}
            //     >
            //       <div className="d-flex align-center">
            //         <Icon name="Document" style={{ fill: 'hsl(0, 0%, 80%)'}} className="inline-m"/>
            //         <span style={{ marginRight: '32px' }}>{resource.name}</span>
            //
            //         {
            //           // show dateCreated and date updated instead
            //           // <span style={{
            //           //   fontSize: '12px',
            //           //   color: 'hsl(0, 0%, 40%)'
            //           // }}>{resource.id}</span>
            //         }
            //       </div>
            //       <Icon
            //         name="Delete"
            //         onClick={event => {
            //           event.stopPropagation()
            //           removeResource(resource.id)
            //         }}
            //         style={{ fill: 'hsl(0, 0%, 80%)'}}
            //         className="hover:fill-50 mobile:d-none"
            //       />
            //     </div>
            //   </Stack.Item>
            // </DropZone.Dragable>
          ))
        }
      </tbody>
    </table>
  )
}
