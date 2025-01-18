import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image AND folder:your_folder_name/*')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    return NextResponse.json(result.resources);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}