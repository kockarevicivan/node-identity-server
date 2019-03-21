/**
 * @file Defines all helper functions for object transformation.
 * @author Ivan Kockarevic
 */

/**
 * Removes/Manages field that were added by Mongo by default.
 * @param doc Mongo document.
 * @param ret JSON object that will be returned.
 */
export function transform(doc: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
    delete ret.createdAt;
    delete ret.updatedAt;
}
