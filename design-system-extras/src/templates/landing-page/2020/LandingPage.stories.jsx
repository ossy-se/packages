import React from 'react'
import { Page } from "@ossy/design-system"
import { LandingPage2020 } from './LandingPage.jsx'

export default {
  title: 'Design System Extras/Templates/Landing page/2020',
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => <Page {...props}/>

export const Default = Story.bind({})
Default.args = {
  sections: LandingPage2020,
  hero: {
    title: 'Angular och React expertis. Design i hjärtat.',
    text: `
      Med expertis inom React & Angular,
      har jag en passion för att skapa webbapplikationer som inte bara är tekniskt avancerade,
      utan också estetiskt tilltalande.
      När min tekniska kunskap möter min kärlek till design,
      skapar jag lösningar som verkligen lyfter ditt företags digitala närvaro.
    `,
    actions: [
      { label: 'Kontakt', href: '#contact' },
      { label: 'Online CV', variant: 'cta', href: '/sv/resume' }
    ]
  },

  socialProof: {
    title: 'Litad på av',
    columns: [
      {
        title: 'Mikael Schulz',
        logo: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/HFHn21DSCu2f1Gwwzr-xh.png'
      },
      {
        title: 'tepit',
        logo: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/QdwAa6w1mBu8cC0x667Vw.png'
      },
      {
        title: 'Plexus Sanitas',
        logo: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/Of3veKFzLTxAY4qYTmBuW.png'
      },
      {
        title: 'OSSY',
        logo: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/PBFpT6d48OPG9kXzT49r7.png'
      }
    ]
  },

  services: [
    {
      title: 'Apputveckling med Angular & React',
      text: `
        Oavsett om du siktar på en responsiv hemsida eller komplex webbapplication,
        kan jag med min expertis inom Angular och React leverera lösningar
        som är kraftfulla, skalbara, användarvänliga, och estetiskt tilltalande.
        Min erfarenhet täcker allt från initial konceptualisering till lansering och underhåll.
      `
    },
    {
      title: 'Designsystem & Komponentbibliotek',
      text: `
        I den digitala världen är igenkännbarhet nyckeln till en suverän användarupplevelse.
        Jag kan hjälpa dig med att implementera och integrera designsystem som säkerställer
        en enhetlig och igenkännbar stil över alla dina digitala gränssnitt.
        Tillsammans bygger vi komponentbibliotek som gör det snabbt och enkelt att skapa nya sidor och funktioner,
        samtidigt som vi behåller den höga designstandarden.
        Låt oss tillsammans skapa digitala upplevelser som dina användare kommer att älska.
      `
    }
  ],

  projects: {
    title: 'Mina projekt',
    text:`
      Under min karriär har jag haft förmånen att arbeta med en rad professionella projekt
      som har bidragit till att formge min expertis inom systemutveckling.
      Många av dessa projekt är av konfidentiell natur eller bundna av affärsavtal,
      och kan därför inte visas offentligt här. Men utanför den professionella
      sfären brinner jag för teknik och skapande, vilket reflekteras i de många hobbyprojekt
      jag tar mig an på min fritid.
      Nedan finner du ett urval av några professionella project jag kan visa
      samt många personliga skapelser som jag gärna delar med mig av.
    `,
    categories: [
      {
        title: 'Hemsidor och designsystem',
        links: [
          [
            {
              label: 'Plexus Sanitas',
              href: 'https://www.plexus-sanitas.com/'
            }
          ],
          [
            {
              label: 'Mikael Shulz',
              href: 'https://www.mikaelschulz.com/'
            }
          ],
          // [
          //   {
          //     label: 'Tepit',
          //     href: 'https://tepit.ossy.se'
          //   }
          // ],
          [
            {
              label: 'Ossy',
              href: 'https://ossy.se/'
            }
          ]
        ]
      },
      {
        title: 'Applicationsutveckling',
        links: [
          [
            {
              label: 'Content management system',
              href: 'https://cms.ossy.se'
            }
          ],
          [
            {
              label: '@ossy/cms-client-react',
              href: 'https://www.npmjs.com/package/@ossy/cms-client-react'
            }
          ],
          [
            {
              label: '@ossy/cli',
              href: 'https://www.npmjs.com/package/@ossy/cli'
            }
          ],
          [
            {
              label: '@ossy/deployment-tools',
              href: 'https://www.npmjs.com/package/@ossy/deployment-tools'
            }
          ]
        ]
      }
    ]
  },

  about: {
    columns: [
      {
        name: 'Oskars Sylwan',
        role: 'Systemutvecklare',
        imgSrc: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/j9SeL8EG7f8vEiJCPPgZa.png',
        text: `
          Frontendutvecklare med fokus på att bygga administrativa system och dashboards i moderna JavaScript ramverk.
          Erfarenhet finns både inom Angular och React och kommer från större bolag, myndigheter, och startups.
          Jag är van vid att ta ansvar för frontenddelar i utvecklingsprocessen vilket inkluderar planering,
          arkitektur, utveckling, sätta riktlinjer, lära ut, och onboarda nya utvecklare.
        `
      }
    ]
  },

  contact: {
    columns: [
      {
        title: 'Kontakta mig',
        maxWidth: 's',
        text: `
          Jag ser fram emot att höra från dig och diskutera hur vi kan samarbeta på ditt nästa projekt.
          Även om jag är tillgänglig för samtal mellan kl. 09:00 och 16:00 på vardagar,
          finner många att det enklaste sättet att nå mig är genom att skicka ett meddelande på LinkedIn.
          Tveka inte att ta kontakt!
        `
      },
      {
        list: [
          { label: 'oskarssylwan.com', href: 'https://oskarssylwan.com/' },
          { label: 'LinkedIn', href: 'www.linkedin.com/in/oskarssylwan' },
          { label: 'oskars.sylwan@ossy.se', href: 'mailto:oskars.sylwan@ossy.se' },
          { label: '+46 73 097 15 98' }
        ]
      }
    ]
  }

}
