/**
 * Field `type` values accepted for resource template definitions (aligned with
 * Ossy API validation). Keep in sync with `ALLOWED_FIELD_TYPES` in the API.
 *
 * @readonly
 */
export const FIELD_TYPES = Object.freeze([
  'text',
  'textarea',
  'richtext',
  'number',
  'select',
  'multiselect',
  'image',
  'boolean',
  'date',
])

/** @deprecated Use {@link FIELD_TYPES} */
export const RESOURCE_TEMPLATE_FIELD_TYPES = FIELD_TYPES
