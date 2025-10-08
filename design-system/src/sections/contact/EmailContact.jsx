import React from 'react'
import { useClipboardCopy } from '../../hooks'
import { Title  } from '../../title'
import { Button } from '../../button'

export const EmailContact = ({
  email,
  buttonLabel = 'Copy email to clipboard'
}) => {
  const [canCopy, copy] = useClipboardCopy()

  return (
    <div data-email-contact >

      <style href="@ossy/design-system/email-contact" precedence='high'>
      {`
        [data-email-contact] {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 150px 32px;
        }
      `}
      </style>

      <div style={{ textAlign: 'center'}}>
        <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
          <Title variant="display">
            {email}
          </Title>
        </a>
        <div className="text-center" style={{ marginTop: '48px' }}>
          { canCopy && (
            <Button variant="cta" onClick={() => copy(email)}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>

    </div>
  )
}
