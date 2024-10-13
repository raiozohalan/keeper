/**
 * Join multiple class names into a single string
 * @param classes - An array of class names
 * @returns A single string of class names
 */
const classNames = (...classes: string[]) => {
  return classes.join(' ')
}

export default classNames