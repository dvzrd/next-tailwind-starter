import { google } from 'googleapis';

// Reference: https://www.freecodecamp.org/news/create-a-feedback-form-using-nextjs-and-google-sheets-api/

export const handler = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { name, email, phone, description } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GCP_CONTACT_SERVICE_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_GCP_CONTACT_SERVICE_CLIENT_ID,
        private_key:
          process.env.NEXT_PUBLIC_GCP_CONTACT_SERVICE_PRIVATE_KEY &&
          process.env.NEXT_PUBLIC_GCP_CONTACT_SERVICE_PRIVATE_KEY.replace(
            /\\n/g,
            '\n'
          ),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: 'Sheet1!A2:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone, description]],
      },
    });

    res.status(201).json({ message: 'Form data posted', response });
  }
  res.status(200).json({ message: 'Posting form data' });
};

export default handler;
