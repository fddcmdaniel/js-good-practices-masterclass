import { calculateAverage } from './utils/average.js';
import { sanitizeName } from './utils/names.js';

/**
 * Generate detailed report objects for each student in the list.
 * Including their ID, name, optional average score, pass status and a summary message.
 * @param {Array<{ id: number, name: string, scores: number[], hasExtraCredit: boolean }>} studentsList
 * @param {{ includeAverage?: boolean }} [options={}]
 * @returns {Array<{ id: number, name: string, average?: number, passed?: string, message?: string }>}
 */
export function generateStudentReport(studentsList, { includeAverage = true } = {}) {
  const isValidList = Array.isArray(studentsList) && studentsList.length > 0;

  if (!isValidList) {
    throw new Error('Invalid students list');
  }

  const reportList = [];

  for (let i = 0; i < studentsList.length; i++) {
    const { id, name: rawName, scores, hasExtraCredit } = studentsList[i];

    const name = sanitizeName(rawName);
    const average = includeAverage ? calculateAverage(scores, hasExtraCredit) : undefined;

    reportList.push({
      id,
      name,
      average,
      passed: includeAverage ? average > 9.45 ? 'Yes' : 'No' : undefined,
      message: `Student ${formattedName} (ID: ${id}) has an average of ${average ?? 'N/A'}`
    });
  }

  return reportList;
}
