import React, { useCallback, useState } from 'react'
import { View } from '../view'
import { Text } from '../text'
import { Input, Textarea, Select } from '../inputs'
import { Button } from '../button'
import { Tags } from '../tags'
import { useSlot } from '../component-slots'
import { FORM_FIELD_SLOT_PREFIX, formFieldSlotKey } from './formFieldSlotKeys.js'

const fieldInputStyle = { minWidth: '50%' }
const textareaStyle = {
  minWidth: '100%',
  minHeight: '125px',
  lineHeight: '1.6',
  maxWidth: '600px',
}
const richtextStyle = {
  ...textareaStyle,
  minHeight: '180px',
}

const TextField = ({ label, value, onChange, style = {}, ...rest }) => (
  <Input
    {...rest}
    id={label}
    type="text"
    value={value ?? ''}
    onChange={onChange}
    style={{ ...fieldInputStyle, ...style }}
  />
)

const NumberField = ({ label, value, onChange, style = {}, ...rest }) => (
  <Input
    {...rest}
    id={label}
    type="number"
    value={value === undefined || value === null ? '' : value}
    onChange={onChange}
    style={{ ...fieldInputStyle, ...style }}
  />
)

const DateField = ({ label, value, onChange, style = {}, ...rest }) => (
  <Input
    {...rest}
    id={label}
    type="date"
    value={typeof value === 'string' ? value : ''}
    onChange={onChange}
    style={{ ...fieldInputStyle, ...style }}
  />
)

const TextareaField = ({ label, value, onChange, style = {}, ...rest }) => (
  <Textarea
    {...rest}
    id={label}
    value={value ?? ''}
    onChange={onChange}
    rows={2}
    cols={50}
    style={{ ...textareaStyle, ...style }}
  />
)

/** Plain multi-line input until a dedicated rich-text editor is wired. */
const RichtextField = ({ label, value, onChange, style = {}, ...rest }) => (
  <Textarea
    {...rest}
    id={label}
    value={value ?? ''}
    onChange={onChange}
    rows={6}
    cols={50}
    style={{ ...richtextStyle, ...style }}
  />
)

const SelectField = ({ label, options = [], value, onChange, style = {}, ...rest }) => (
  <Select
    {...rest}
    id={label}
    value={value ?? ''}
    onChange={onChange}
    style={{ ...fieldInputStyle, ...style }}
  >
    <option value="" />
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Select>
)

/**
 * Multiselect as a tag cloud (same interaction model as {@link Tags}): click to
 * toggle. Suggested options plus any selected/custom tags appear in the cloud;
 * the row below adds arbitrary tags not in `options`.
 */
const MultiselectTagsField = ({ label, options = [], value, onChange, style = {}, ...rest }) => {
  const selected = Array.isArray(value) ? value : []
  const [draft, setDraft] = useState('')

  const commit = useCallback(
    next => {
      onChange({
        target: {
          id: label,
          dataset: { ossyMultiselectReplace: 'true' },
          value: JSON.stringify(next),
        },
      })
    },
    [label, onChange],
  )

  const toggleTag = useCallback(
    tag => {
      commit(
        selected.includes(tag) ? selected.filter(t => t !== tag) : [...selected, tag],
      )
    },
    [selected, commit],
  )

  const addDraft = useCallback(() => {
    const t = draft.trim()
    if (!t || selected.includes(t)) return
    commit([...selected, t])
    setDraft('')
  }, [draft, selected, commit])

  const cloudTags = [...new Set([...(options || []), ...selected])].sort((a, b) =>
    a.localeCompare(b),
  )

  return (
    <View gap="m" style={style} {...rest}>
      {cloudTags.length > 0 ? (
        <Tags tags={cloudTags} activeTags={selected} onSelect={toggleTag} size="s" gap="xs" />
      ) : (
        <Text as="span" style={{ fontSize: 14, opacity: 0.7 }}>
          No suggestions — add a tag below.
        </Text>
      )}
      <View layout="row" gap="s" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
        <Input
          type="text"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addDraft()
            }
          }}
          placeholder="Add tag…"
          style={{ minWidth: 140, flex: '1 1 140px', maxWidth: '100%' }}
          aria-label={`Add tag for ${label}`}
        />
        <Button type="button" variant="neutral" onClick={addDraft}>
          Add
        </Button>
      </View>
    </View>
  )
}

const checkboxFieldStyles = `
  [data-ossy-field-checkbox-track] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.375rem;
    height: 1.375rem;
    flex-shrink: 0;
  }

  [data-ossy-field-checkbox-track] input {
    position: absolute;
    inset: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
  }

  [data-ossy-field-checkbox-track] input:disabled {
    cursor: not-allowed;
  }

  [data-ossy-field-checkbox-box] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.375rem;
    height: 1.375rem;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: var(--separator-primary);
    border-radius: var(--space-xs, 6px);
    background-color: var(--surface-primary);
    transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
    pointer-events: none;
  }

  [data-ossy-field-checkbox-track] input:focus-visible + [data-ossy-field-checkbox-box] {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 1px var(--color-accent);
  }

  [data-ossy-field-checkbox-track] input:checked + [data-ossy-field-checkbox-box] {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
  }

  [data-ossy-field-checkbox-mark] {
    width: 0.3rem;
    height: 0.55rem;
    border: solid var(--surface-primary);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-0.04rem, -0.04rem);
    opacity: 0;
    transition: opacity 0.12s ease;
    box-sizing: border-box;
  }

  [data-ossy-field-checkbox-track] input:checked + [data-ossy-field-checkbox-box] [data-ossy-field-checkbox-mark] {
    opacity: 1;
  }

  [data-ossy-field-checkbox-track] input:disabled + [data-ossy-field-checkbox-box] {
    opacity: 0.55;
  }
`

const BooleanField = ({ label, value, onChange, style = {}, disabled, ...rest }) => (
  <>
    <style href="@ossy/design-system/field-checkbox" precedence="medium">
      {checkboxFieldStyles}
    </style>
    <label
      data-ossy-field-checkbox
      htmlFor={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-s, 8px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        minHeight: 'var(--space-l, 24px)',
        ...style,
      }}
      {...rest}
    >
      <span data-ossy-field-checkbox-track>
        <input
          id={label}
          name={label}
          type="checkbox"
          checked={!!value}
          onChange={onChange}
          disabled={disabled}
          aria-label={label}
        />
        <span data-ossy-field-checkbox-box aria-hidden="true">
          <span data-ossy-field-checkbox-mark />
        </span>
      </span>
      <Text
        as="span"
        style={{
          fontSize: 'var(--text-default-font-size, 16px)',
          fontFamily: 'var(--text-default-font-family, sans-serif)',
          lineHeight: 1.2,
          color: value
            ? 'var(--text-default-color, CanvasText)'
            : 'color-mix(in srgb, var(--text-default-color, CanvasText) 52%, transparent)',
          userSelect: 'none',
        }}
      >
        {value ? 'On' : 'Off'}
      </Text>
    </label>
  </>
)

const ImageField = ({ label, onChange, style = {}, ...rest }) => (
  <Input {...rest} id={label} type="file" onChange={onChange} style={{ ...fieldInputStyle, ...style }} />
)

const FIELD_COMPONENTS = {
  text: TextField,
  textarea: TextareaField,
  richtext: RichtextField,
  number: NumberField,
  select: SelectField,
  multiselect: MultiselectTagsField,
  image: ImageField,
  boolean: BooleanField,
  date: DateField,
}

/**
 * Default {@link ComponentsProvider} `slots` map for {@link Fields}.
 * Keys are `form.field.<type>` (see {@link formFieldSlotKey}).
 *
 * @type {Record<string, import('react').ComponentType<any>>}
 */
export const DEFAULT_FORM_FIELD_SLOTS = Object.fromEntries(
  Object.entries(FIELD_COMPONENTS).map(([type, Comp]) => [
    `${FORM_FIELD_SLOT_PREFIX}.${type}`,
    Comp,
  ]),
)

function FormFieldRow({ field, data, onChange }) {
  const { name, type, options, required, ...fieldRest } = field
  const typeKey = typeof type === 'string' ? type.trim() : type || 'text'
  const slotKey = formFieldSlotKey(typeKey)
  const Slotted = useSlot(slotKey)
  const Fallback = FIELD_COMPONENTS[typeKey] || TextField
  const Field = Slotted === undefined ? Fallback : Slotted

  const fieldProps = {
    ...fieldRest,
    label: name,
    options,
    required,
    value: data[name],
    onChange,
  }

  return (
    <View gap="xs">
      <Text as="span" style={{ fontWeight: 'bold' }}>
        {name}
        {required ? ' *' : ''}
      </Text>
      {Field === null ? null : <Field {...fieldProps} />}
    </View>
  )
}

/**
 * Renders labeled inputs for each entry in a template `fields` array.
 * Use {@link applyFieldChange} to derive the next `data` object from native
 * `onChange` events (and from multiselect tag commits).
 *
 * Resolves controls via {@link useSlot}(`form.field.<type>`) first, then built-ins
 * in {@link DEFAULT_FORM_FIELD_SLOTS}. Pass {@link DEFAULT_FORM_FIELD_SLOTS} into
 * {@link ComponentsProvider} when you want slots to resolve without per-type fallbacks.
 *
 * @param {{
 *   data: Record<string, unknown>,
 *   onChange: import('react').ChangeEventHandler,
 *   fields?: { name: string, type?: string, options?: string[] }[],
 *   templateFields?: { name: string, type?: string, options?: string[] }[],
 * }} props
 */
export function Fields({ data, onChange, fields: fieldsProp, templateFields, ...props }) {
  const list = fieldsProp ?? templateFields ?? []

  return (
    <View gap="s" {...props}>
      {list.map(field => (
        <FormFieldRow key={field.name} field={field} data={data} onChange={onChange} />
      ))}
    </View>
  )
}

/** @deprecated Use {@link Fields} */
export const ResourceTemplateFields = Fields

/** @deprecated Use {@link Fields} */
export const EditFields = Fields
