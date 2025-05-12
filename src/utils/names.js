/**
 * Removes pipe characters from a raw name, splits the result on underscores,
 * and returns a formatted name composed of the first segment and the last segment.
 *
 * @param {string} rawName - The original name string, which may contain '|' and '_' characters.
 * @returns {string} The sanitized name in the format "First Last". If there is only one segment,
 *                   returns that segment.
 *
 * @example
 * // returns "John Doe"
 * sanitizeName("John_Doe");
 *
 * @example
 * // returns "Jane Smith"
 * sanitizeName("Jane|_Middle_Smith");
 */
export function sanitizeName(rawName) {
  const nameWithoutPipes = rawName.replace(/\|/g, '');
  const [firstName, ...rest] = nameWithoutPipes.split('_');

  return `${firstName} ${rest.at(-1)}`.trim();
}
