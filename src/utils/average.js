const EXTRA_CREDIT_POINTS = 1;

/**
 * Calculate the student’s average score on a 0–20 scale,
 * optionally adding 1 point of extra credit, capped at 20.
 *
 * @param {number[]} scores
 * @param {boolean} hasExtraCredit
 * @returns {number|undefined}
 */
export function calculateAverage(scores, hasExtraCredit = false) {
  const validScores = scores.filter(
    score => typeof score === 'number' && score >= 0 && score <= 20
  );

  if (validScores.length === 0) {
    return undefined;
  }

  const sum = validScores.reduce((acc, score) => acc + score, 0);

  let average = sum / validScores.length;

  if (hasExtraCredit) {
    average += EXTRA_CREDIT_POINTS;
  }

  if (average > 20) {
    average = 20;
  }

  return average.toFixed(2);
}
