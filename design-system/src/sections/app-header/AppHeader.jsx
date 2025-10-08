import { useMemo } from 'react'
import { Button } from '../button'
import { PageSection } from '../page-section'

const contentContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const navListStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
  fontFamily: 'sans-serif',
}

export const AppHeader = ({
  logo: Logo,
  title: Title,
  primarySlot: PrimarySlot,
  secondarySlot: SecondarySlot,
  as = 'header',
  variant = 'primary',
  maxWidth = 'full',
  style = {},
  ...props
}) => {

 const headerStyles = useMemo(() => {

   const commonStyles = {
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     padding: '16px 32px',
     borderBottom: '1px solid hsl(0, 0%, 95%)',
   }

   const primaryStyles = {
     borderBottom: '1px solid hsl(0, 0%, 95%)',
   }

   const altPrimaryStyles = {
     borderBottom: '1px solid var(--surface-alt-primary)',
   }

   return true
    ? { ...commonStyles, ...altPrimaryStyles, ...style }
    : { ...commonStyles, ...primaryStyles, ...style }
 }, [style])

  return (
    <PageSection
      as={as}
      surface={variant}
      maxWidth={maxWidth}
      style={headerStyles}
      {...props}
    >
      <div style={contentContainer}>

        {
          !!Logo && (<Logo />)
        }

        <nav>
          <ul style={navListStyles}>
            <li>
              <Link to="/consultants">
                <Button variant={variants.buttonLink} as="a">
                  Consultants
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/free-resources">
                <Button variant={variants.buttonLink} as="a">
                  Free resources
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <Button variant="cta" as="a">
                  Reach out
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </PageSection>
  )
}
