/**
 * Generate detailed report objects for each student in the list.
 * Including their ID, name, optional average score, and a summary message.
 * @param {Array<{ id: number, name: string, scores: number[] }>} studentsList
 * @param {{ includeAverage?: boolean }} [options={}]
 * @returns {Array<{ id: number, name: string, average?: number, message?: string }>}
 */
export function generateStudentReport(studentsList, { includeAverage = true } = {}) {
  const isValidList = Array.isArray(studentsList) && studentsList.length > 0;

  if (!isValidList) {
    throw new Error('Invalid students list');
  }

  const reportList = [];

  for (const student of studentsList) {
    const { id, name, scores } = student;
    const average = includeAverage
      ? scores.reduce((sum, score) => sum + score, 0) / scores.length
      : undefined;

    const formattedName = name.trim();

    reportList.push({
      id,
      name: formattedName,
      average,
      message: `Student ${formattedName} (ID: ${id}) has an average of ${average?.toFixed(2) ?? 'N/A'}`,
    });
  }

  return reportList;
}
