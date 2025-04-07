import { NextResponse } from 'next/server';
// Removed unused import 'promisify'
import { join } from 'path';
import { writeFile, mkdir } from 'fs/promises';

// Removed unused variable 'upload'

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadsDir = join(process.cwd(), 'public/uploads');

    // Ensure the uploads directory exists
    await mkdir(uploadsDir, { recursive: true });

    const filePath = join(uploadsDir, file.name);
    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/${file.name}`;
    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
