import React from 'react';
import { Button } from '@ossy/design-system';


// https://twitter.com/jh3yy/status/1762979019446698310
// button:hover span:after {
//     animation: flip 0.2s calc(var(--i) * 0.05s);
//   }
//   @​keyframes flip {
//   20% { content: '_'; }
//   40% { content: var(--c1); }
//   60% { content: var(--c2); }
//   }


// <button>
//   <span style="--i: 0; --c1: 'x'; --c2: '$'; --c3: '≈';">C</span>
//   <span style="--i: 1; --c1: 'ç'; --c2: '&'; --c3: 'π';">l</span>
//   <!-- Other characters -->
//   <span class="sr-only">Click Me</span>
// </button>

export const Ossybot = ({
    style = {},
    surface = "cta",
    icon,
    ...props
}) => {
  return (
    <>
      <style href="@ossy/design-system/ossybot" precedence="high">
        {`
          @keyframes flip {
            0% {
              content: '_';
            }
            60% {
              content: var(--c1);
            }
            100% {
              content: var(--c2);
            }
          }

          /* Define the animation */
          [data-animation="flip"] {
            animation: flip 0.2s calc(var(--i) * 0.05s) infinite;
          }
        `}
      </style>
      <Button
        data-animation="flip"
        prefix={{ name: icon, size: 'm'}}
        variant={surface}
        {...props}
        style={{
            '--size': '64px',
            width: 'var(--size)',
            height: 'var(--size)',
            padding: 'var(--space-m)',
            borderRadius: '999px',
          ...style,
        }}
      />
    </>
  )
}