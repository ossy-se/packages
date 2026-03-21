/** Prefix for {@link Fields} component slot keys. */
export const FORM_FIELD_SLOT_PREFIX = 'form.field'

/**
 * Slot key for a template field type, e.g. `form.field.text`.
 *
 * @param {string | undefined} type
 * @returns {string}
 */
export function formFieldSlotKey(type) {
  const t = typeof type === 'string' ? type.trim() : type
  return `${FORM_FIELD_SLOT_PREFIX}.${t || 'text'}`
}
