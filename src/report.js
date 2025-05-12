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
    const { id, name, scores, hasExtraCredit } = studentsList[i];
    let average = 0;
    let totalScores = 0;

    if (includeAverage) {
      for (let j = 0; j < scores.length; j++) {
        if(typeof scores[j] !== 'number' || scores[j] < 0 || scores[j] > 20) {
          continue;
        }

        totalScores++;
        average += scores[j];
      }

      if(totalScores) {
        average /= totalScores;
      } else {
        average = undefined;

        return;
      }

      if(hasExtraCredit) {
        average += 1;
      }

      if(average > 20) {
        average = 20;
      }
    } else {
      average = undefined;
    }

    const nameWithNoPipes = name.replace(/\|/g, '');
    const [firstName, ...rest] = nameWithNoPipes.split('_');
    const formattedName = (firstName + ' ' + rest.at(-1)).trim();

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
