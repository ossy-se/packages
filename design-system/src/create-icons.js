const fs = require('fs');


const OUTPUT_PATH = './icons/icons2';

const iconFileNames = fs.readdirSync('./node_modules/css.gg/icons/svg')
    .map(x => x.replace('.svg', ''))
    .map(x => x.toLowerCase())

fs.rmSync(OUTPUT_PATH, { recursive: true, force: true })
fs.mkdirSync(OUTPUT_PATH, { recursive: true, force: true })

iconFileNames.forEach((fileName) => {
    const iconName = fileName.replace('.svg', '');

    const svg = fs.readFileSync(`./node_modules/css.gg/icons/svg/${fileName}.svg`, 'utf8')
        .replace('<svg', '<svg {...props}')
    
    const jsx = `
import React from 'react'

export default props => ${svg}

`

    fs.writeFileSync(`${OUTPUT_PATH}/${iconName}.jsx`, jsx)
    
})

const iconImports = iconFileNames.map((fileName) => `'${fileName}': lazy(() => import('./icons2/${fileName}.jsx')), \n`).join('')

const iconsJsx = `
'use client'
import React, { lazy, Suspense, useMemo } from 'react'
import { css } from 'glamor'

export const Icons = {
    ${iconImports}
}

const iconSizes = css({
    '[data-size="s"]' {
      width: 'var(--icon-size-s, 18px)',
      height: 'var(--icon-size-s, 18px)',
    },
    '[data-size="m"]' {
      width: 'var(--icon-size-m, 24px)',
      height: 'var(--icon-size-m, 24px)',
    },
    '[data-size="l"]' {
      width: 'var(--icon-size-l, 48px)',
      height: 'var(--icon-size-l, 48px)',
    },
    '[data-size="xl"]' {
      width: 'var(--icon-size-l, 64px)',
      height: 'var(--icon-size-l, 64px)',
    },
  })

export const Icon2 = ({ name, variant, size = 's', ...props }) => {
    const Icon = Icons[name]

    const styles = useMemo(() => {
        return css({
          color: \`var(--on-icon-\${variant}, var(--on-icon-default))\`,
          fill: \`var(--on-icon-\${variant}, var(--on-icon-default))\`,
          fontSize: \`var(--icon-\${variant}--size, var(--icon-default--size))\`,
          ':hover': {
            color: \`var(--on-icon-\${variant}--hover, var(--on-icon-default--hover))\`,
            fill: \`var(--on-icon-\${variant}--hover, var(--on-icon-default--hover))\`,
            cursor: \`var(--icon-\${variant}--cursor, var(--on-icon-default--cursor))\`,
          },
          ':focus': {
            color: \`var(--on-icon-\${variant}--hover, var(--on-icon-default--hover))\`,
            fill: \`var(--on-icon-\${variant}--hover, var(--on-icon-default--hover))\`,
          },
          ':disabled': {
            color: \`var(--on-icon-\${variant}--disabled, var(--on-icon-default--disabled))\`,
            fill: \`var(--on-icon-\${variant}--disabled, var(--on-icon-default--disabled))\`,
            cursor: 'not-allowed'
          },
        })
      }, [variant])

    return (
        <Suspense fallback={<></>}>
            <Icon {...props} data-size={size} {...styles} {...iconSizes} />
        </Suspense>
    )
}
`

fs.writeFileSync(`./icons/Icon2.jsx`, iconsJsx)