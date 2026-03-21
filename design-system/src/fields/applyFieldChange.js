function setAtPath(obj, path, value) {
  if (path.length === 0) return obj
  const [head, ...rest] = path
  if (rest.length === 0) {
    return { ...obj, [head]: value }
  }
  const prevChild = obj[head]
  const child =
    prevChild && typeof prevChild === 'object' && !Array.isArray(prevChild)
      ? prevChild
      : {}
  return { ...obj, [head]: setAtPath(child, rest, value) }
}

function changePathFromTarget(t) {
  if (t.type === 'radio') {
    return [t.name]
  }
  if (typeof t.id === 'string' && t.id.length > 0) {
    return t.id.split('.')
  }
  if (typeof t.name === 'string' && t.name.length > 0) {
    return [t.name]
  }
  return []
}

/**
 * Immutable update for document `content` keyed by template field names.
 *
 * - Dotted `id` paths map to nested keys (split on `.`).
 * - Legacy multiselect: checkboxes with `data-ossy-multiselect` and `data-ossy-option`.
 * - Tags-style multiselect: `data-ossy-multiselect-replace` with `id` = field name and
 *   `value` = JSON.stringify(string[]).
 *
 * @param {Record<string, unknown>} data
 * @param {import('react').ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: Partial<HTMLInputElement> & { dataset?: DOMStringMap, value?: string } }} event
 * @returns {Record<string, unknown>}
 */
export function applyFieldChange(data, event) {
  const base =
    data === undefined || data === null
      ? {}
      : typeof data === 'object' && !Array.isArray(data)
        ? { ...data }
        : {}

  const t = event?.target
  if (!t) return base

  if (t.dataset?.ossyMultiselectReplace === 'true') {
    const fieldName = typeof t.id === 'string' ? t.id : ''
    if (!fieldName) return base
    let next
    try {
      next = JSON.parse(t.value || '[]')
    } catch {
      return base
    }
    if (!Array.isArray(next) || !next.every(x => typeof x === 'string')) return base
    return { ...base, [fieldName]: next }
  }

  if (t.type === 'checkbox' && t.dataset?.ossyMultiselect === 'true') {
    const fieldName = t.name
    const option = t.dataset?.ossyOption
    if (!fieldName || option === undefined) return base
    const prev = Array.isArray(base[fieldName]) ? [...base[fieldName]] : []
    const next = t.checked
      ? [...new Set([...prev, option])]
      : prev.filter(x => x !== option)
    return { ...base, [fieldName]: next }
  }

  let value
  if (t.type === 'checkbox') {
    value = t.checked
  } else if (t.type === 'file') {
    value = t.files?.[0]
  } else if (t.type === 'number') {
    value = t.value === '' ? undefined : Number(t.value)
  } else {
    value = t.value
  }

  const path = changePathFromTarget(t)
  if (path.length === 0) return base

  return setAtPath(base, path, value)
}

/** @deprecated Use {@link applyFieldChange} */
export function applyResourceTemplateFieldChange(data, event) {
  return applyFieldChange(data, event)
}
