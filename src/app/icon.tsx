import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
 
// Route segment config
export const runtime = 'nodejs'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Icon() {
  try {
    // Read the profile picture from the public folder
    const imagePath = join(process.cwd(), 'public', 'images', 'avatar.jpg')
    const imageBuffer = await readFile(imagePath)
    const imageBase64 = imageBuffer.toString('base64')
    const imageDataUrl = `data:image/jpeg;base64,${imageBase64}`
    
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={imageDataUrl}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fallback to a simple design if image fails to load
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'linear-gradient(90deg, #000 0%, #333 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: '50%',
          }}
        >
          G
        </div>
      ),
      {
        ...size,
      }
    )
  }
}
