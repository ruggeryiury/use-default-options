import type { PartialDeep, RequiredDeep } from 'type-fest'

/**
 * Iterates the provided `object` to append the values from this key, and return the files appended.
 * - - - -
 * @param {Record<string, any>} object The object with values to be iterable and appended to the return object.
 * @param {Record<string, any>} defaultValues The default values of the object.
 * @returns {Record<string, any>}
 */
const iterateObjectAndAppendDefaultValues = (object: Record<string, any> | undefined, defaultValues: Record<string, any>): Record<string, any> => {
  if (!object) return defaultValues

  const newObject: Record<string, any> = { ...defaultValues }
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object') {
      if (object[key] === null) newObject[key] = object[key] as Record<string, any>
      else if (typeof globalThis.Buffer !== 'undefined' && Buffer.isBuffer(object[key])) newObject[key] = object[key].subarray()
      else if (Array.isArray(object[key])) newObject[key] = object[key]
      else newObject[key] = iterateObjectAndAppendDefaultValues(object[key] as Record<string, any>, defaultValues[key] as Record<string, any>)
    } else newObject[key] = object[key] as Record<string, any>
  }

  return newObject
}

/**
 * Utility function to merge default options with user-defined ones.
 * - - - -
 * @template {Record<string, any>} T
 * @param {RequiredDeep<T>} defaultOptions The default options of the function.
 * @param {Partial<T> | undefined} userOptions `OPTIONAL` User-provided options with properties to override any default option property. If `undefined` or an empty object, no default properties will be merged.
 * @returns {RequiredDeep<T>} The default options merged with given user options.
 */
export const useDefaultOptions = <T extends Record<string, any>>(defaultOptions: RequiredDeep<T>, userOptions?: PartialDeep<T>): RequiredDeep<T> => {
  if (!userOptions) return defaultOptions
  return iterateObjectAndAppendDefaultValues(userOptions, defaultOptions as Record<string, any>) as RequiredDeep<T>
}
