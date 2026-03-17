import React from 'react';

/**
 * Renders a TypeScript interface from ts2doc doc.json format as a table.
 */
export function InterfaceTable({ doc }) {
  if (!doc || doc.kind !== 'interface') return null;

  const { name, extends: extendsList, description, props } = doc;
  const displayProps = (props || []).filter((p) => p.name !== '*');

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>
        <code>{name}</code>
        {extendsList?.length > 0 && (
          <span style={{ fontWeight: 400, color: '#666', fontSize: '0.9em' }}>
            {' '}
            extends {extendsList.join(', ')}
          </span>
        )}
      </h3>
      {description && (
        <p style={{ marginBottom: '1rem', color: '#666' }}>{description}</p>
      )}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
        }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #eee' }}>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>Property</th>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>Type</th>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>Required</th>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {displayProps.map((prop) => (
            <tr key={prop.name} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px 12px' }}>
                <code>{prop.name}</code>
              </td>
              <td style={{ padding: '8px 12px' }}>
                <code style={{ fontSize: '12px' }}>{prop.type}</code>
              </td>
              <td style={{ padding: '8px 12px' }}>
                {prop.required ? 'Yes' : 'No'}
              </td>
              <td style={{ padding: '8px 12px', color: '#666' }}>
                {prop.description || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
