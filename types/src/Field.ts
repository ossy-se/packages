/**
 * One input in a {@link ResourceTemplate}. The `name` is the key used in `Resource.content` for
 * template-backed documents (alongside the editor’s input `type`, e.g. `text`, `textarea`, `richtext`, `select`).
 */
export interface Field {
    /** Display label; UI may fall back to `name` when omitted. */
    label?: string;
    /** Key stored in the resource’s `content` object. */
    name: string;
    type: string;
    description?: string;
    placeholder?: string;
    required?: boolean;
    /** Allowed values for `select` / multiselect-style field types. */
    options?: string[];
}