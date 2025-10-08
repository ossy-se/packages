import React from 'react'
import { Text } from '../../text'
import { Button } from '../../button'

const aboutUsStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  borderTop: '1px solid var(--separator-primary)',
  padding: '64px 32px'
}

const aboutUsContentContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--space-l)'
}

const footerLinkStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid var(--separator-primary)',
  fontFamily: 'sans-serif'
}

const footerLinkContentContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const legalStyles = {
  textAlign: 'center',
  padding: '16px',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const SimpleFooter = ({
  logo,
  aboutUs,
  legal,
  navigation = [],
  ...props
}) => (
  <>

    <div style={aboutUsStyles}>
      <div style={aboutUsContentContainerStyles}>
        {logo}
        <Text as="p" style={{ lineHeight: '1.6', maxWidth: '700px' }}>
          {aboutUs}
        </Text>
      </div>
    </div>

    <div style={footerLinkStyles}>
      <div style={footerLinkContentContainerStyles}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px' }}>
            {navigation.map(button => (
              <li style={{ margin: '0 8px' }} key={button.href}>
                <Button variant="link" {...button} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>

    <div style={legalStyles}>
      <Text as="span" variant="small">{legal}</Text>
    </div>

  </>
)
