/**
 * Generate detailed report objects for each student in the list.
 * Including their ID, name, optional average score, pass status and a summary message.
 * @param {Array<{ id: number, name: string, scores: number[] }>} studentsList
 * @param {{ includeAverage?: boolean }} [options={}]
 * @returns {Array<{ id: number, name: string, average?: number, passed?: string, message?: string }>}
 */
export function generateStudentReport(studentsList, { includeAverage = true } = {}) {
  const isValidList = Array.isArray(studentsList) && studentsList.length > 0;

  if (!isValidList) {
    throw new Error('Invalid students list');
  }

  const reportList = [];

  for (var i = 0; i < studentsList.length; i++) {
    var { id, name, scores } = studentsList[i];

    var average = 0;

    if (includeAverage) {
      for (var i = 0; i < scores.length; i++) {
        average += scores[i];
      }

      average /= scores.length;
    } else {
      average = undefined;
    }

    var formattedName = name.trim();

    reportList.push({
      id,
      name: formattedName,
      average,
      passed: includeAverage ? average > 9.45 ? 'Yes' : 'No' : undefined,
      message: `Student ${formattedName} (ID: ${id}) has an average of ${average?.toFixed(2) ?? 'N/A'}`
    });
  }

  return reportList;
}
