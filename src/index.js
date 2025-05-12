import { generateStudentReport } from './report';

const students = [
  { id: 1, name: 'João', scores: [20, 15, 19, 18] },
  { id: 1, name: 'Maria', scores: [20, 20, 19, 13] },
  { id: 1, name: 'José', scores: [20, 17, 19, 12] },
  { id: 1, name: 'Ricardo', scores: [10, 2, 3, 12] }
];

try {
  const report = generateStudentReport(students, { includeAverage: true });

  console.table(report);
} catch (error) {
  console.error('Error: ', error);
}
