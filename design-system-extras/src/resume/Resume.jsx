import React from 'react'
import {
  Button,
  Title,
  Dropdown,
  ContextMenu,
  Tags,
  Tabs,
  ProfileCard,
  ResumeExperience,
} from "@ossy/design-system"
import { useResume } from './useResume'

export const Resume = ({
  status,
  profile,
  experiences,
  translations,
  profileCardProps = { },
  actions = []
}) => {

  const {
    work,
    education,
    project,
    other,
    tags,
    categories,
    activeTags,
    toggleActiveTag,
    activeExperienceType,
    toggleActiveExperienceType,
  } = useResume(experiences)

  const tabs = [
    {
      id: 'All',
      label: translations.all,
    },
    {
      id: 'Work',
      label: translations.work,
    },
    {
      id: 'Project',
      label: translations.projects,
    },
    {
      id: 'Education',
      label: translations.education,
    },
    {
      id: 'Other',
      label: translations.other,
    }
  ].filter(x => x.id === 'All'
    ? x
    : categories.includes(x.id)
  )

  const sections = [
    {
      title: translations.work,
      experiences: work
    },
    {
      title: translations.projects,
      experiences: project
    },
    {
      title: translations.education,
      experiences: education
    },
    {
      title: translations.other,
      experiences: other
    }
  ]

  const print = () => {
    window.print()
  }

  return (
    <div data-component="@design-system-extras/resume" data-status={status}>

      <style href="@design-system-extras/resume" precedence="high">{`
        [data-component="@design-system-extras/resume"] {

          --padding: var(--resume-padding, 0);
          --background: var(--resume-background, transparent);
          --header-padding: var(--resume-header-padding, 8px 24px 8px 0);
          --header-justify-content: var(--resume-header-justify-content, center);
          --filter-padding: var(--resume-filter-padding, var(--space-s) var(--space-m));
          --content-background: var(--resume-content-background, transparent);

          background: var(--background);
          padding: var(--padding);
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: fit-content fit-content fit-content;
          grid-template-areas:
            "profile-summary"
            "actions"
            "content";
        }

        [data-component="@design-system-extras/resume"] [data-slot="actions"] {
          min-width: 0;
          box-sizing: border-box;
          grid-area: actions;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--header-padding);
        }

        [data-component="@design-system-extras/resume"] [data-slot="actions"]::-webkit-scrollbar {
          display: none;
        }

        [data-component="@design-system-extras/resume"] .secondary-actions {
          display: none;
          gap: var(--space-s);
        }

        [data-component="@design-system-extras/resume"] [data-slot="profile-summary"] {
          grid-area: profile-summary;
          z-index: 1;
        }

        [data-component="@design-system-extras/resume"] [data-slot="content"] {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          grid-area: content;
          padding: var(--space-l) var(--space-m);
          margin: var(--content-margin);
          gap: var(--space-xl);
          background: var(--content-background);
        }

        [data-component="@design-system-extras/resume"] [data-animation="fade-in"] {
          opacity: 0;
          transition-property: opacity, transform;
          transition-duration: 1s, 1s;
          transition-timing-function: ease-in-out;
          transform: translateZ(0);
        }

        [data-component="@design-system-extras/resume"] [data-scroll] {
          scrollbar-width: none;
          overflow-y: auto;
        }

        [data-component="@design-system-extras/resume"] [data-scroll]::-webkit-scrollbar {
          display: none;
        }

        [data-component="@design-system-extras/resume"][data-status="Success"] [data-animation="fade-in"] {
          opacity: 1;
        }

        [data-component="@design-system-extras/resume"] .content-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-l);
          width: 100%;
          max-width: 700px;
        }

        @media (min-width: 1200px) {
          [data-component="@design-system-extras/resume"] {
            height: 100vh;
            grid-template-columns: 400px 1fr;
            grid-template-rows: min-content 1fr;
            grid-template-areas:
              "profile-summary actions"
              "profile-summary content";
          }

          [data-component="@design-system-extras/resume"] [data-slot="actions"] {
            justify-content: space-between;
          }

          [data-component="@design-system-extras/resume"] .secondary-actions {
            display: flex;
          }
        }

        @media (min-width: 1900px) {
          [data-component="@design-system-extras/resume"] [data-slot="content"] {
            grid-column-start: profile-summary;
            grid-column-end: content;
            grid-row-start: content;
            grid-row-end: content;
          }
        }
      `}</style>

      <ProfileCard
        data-scroll
        data-slot="profile-summary"
        activeTags={activeTags}
        onTagClick={toggleActiveTag}
        translations={translations}
        surface="primary"
        {...profileCardProps}
        {...profile}
      />

      <header className="actions" data-slot="actions" data-surface="primary">

        <Tabs
          tabs={tabs}
          activeTabId={activeExperienceType || 'All'}
          onTabClick={(_, tab) => toggleActiveExperienceType(tab.id)}
          style={{
            borderBottom: !!tags.length ? 'var(--header-border-bottom)' : undefined
          }}
        />

        <div className="secondary-actions">
        {
          actions.map(({ label, contextMenu, ...buttonProps }) => (
            !contextMenu
              ? (
                <Button {...buttonProps}>
                  {label}
                </Button>
              ) : (
                <Dropdown trigger={(
                  <Button {...buttonProps}>
                    {label}
                  </Button>
                )}>
                  <ContextMenu>
                    { contextMenu.map(menuItem => (
                      <ContextMenu.Item {...menuItem}>
                        {menuItem.label}
                      </ContextMenu.Item>
                    ))}
                  </ContextMenu>

                </Dropdown>
              )

          ))
        }
        </div>


        {
          !!tags.length && (
            <Tags
              tags={tags}
              activeTags={activeTags}
              onSelect={toggleActiveTag}
              style={{
                padding: 'var(--filter-padding)',
                display: 'flex',
                // overflowY: 'auto'
              }}
            />
          )
        }
      </header>


      <main className="content" data-slot="content" data-scroll>

        {
          sections
            .filter(x => !!x.experiences.length)
            .map(({ title, experiences }) => (
              <section className="content-section" key={title}>
                <Title variant="primary" style={{ textAlign: 'center' }}>{title}</Title>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-l)'}}>
                  {
                    experiences.map(experience =>
                      <ResumeExperience
                        key={experience.id || experience.title}
                        title={experience.title}
                        subTitle={experience.subTitle}
                        date={experience.date}
                        description={experience.description}
                        website={experience.website}
                        github={experience.github}
                        tags={experience.tags}
                      />
                    )
                  }
                </div>
              </section>
          ))
        }

      </main>

  </div>
  )
}
