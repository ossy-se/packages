/**
 * A resource is one item in a workspace tree (folder, structured document, media file, job record, etc.).
 *
 * **Relation to {@link ResourceTemplate}** — For document-like resources, `type` is the template’s
 * `id`. The template’s `fields[].name` values describe the expected keys on `content`. The API also
 * uses native `type` values (e.g. `directory`) and MIME types for binary uploads.
 *
 * @typeParam T — Shape of `content`; for template-backed resources, usually a record keyed by field names.
 */
export interface Resource<T = unknown> {
    id: string;
    name: string;
    /** Absolute path prefix for this resource; API normalizes with leading and trailing `/`. */
    location: string;
    /** Workspace aggregate id this resource belongs to. */
    belongsTo: string;
    /**
     * Discriminator: resource template id, `directory`, or MIME type (file resources), depending on how the resource was created.
     */
    type: string;
    createdBy: string;
    created: string;
    lastUpdated: string;
    content: T;
    /** Present on API-backed media and other resources that support visibility rules. */
    access?: 'public' | 'restricted';
    /** When present (e.g. `['removed']`), the resource is treated as deleted in the event-sourced view. */
    status?: string[];
}