import { Field } from "./Field";

/**
 * Schema for a structured content type in a workspace. Imported via the workspace API and merged
 * with built-in system templates when the API returns a workspace or template list.
 *
 * **Relation to {@link Resource}** — Creating a document resource requires `type` to equal this
 * template’s `id`. Editors and clients use `fields` to render forms; `content` on the resource
 * should align with those field names (by convention; enforcement may vary by API version).
 */
export interface ResourceTemplate {
    /** Stable identifier; becomes `Resource.type` for instances of this template. */
    id: string;
    name: string;
    description?: string;
    icon?: string;
    /** Used by built-in templates for UI grouping; optional on custom imports. */
    categoryName?: string;
    fields: Field[];
}
