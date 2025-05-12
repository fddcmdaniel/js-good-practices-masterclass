import { generateStudentReport } from './report';

export async function submitStudentReports(students) {
  try {
    const reports = generateStudentReport(students);
    const response = await fetch('/api/reports', {
      method: 'POST',
      body: JSON.stringify(reports)
    });
    displayStudentsReports(response);
  } catch (error) {
    console.error('Error submitting reports:', error);
  }
}
