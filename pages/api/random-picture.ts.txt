import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const picturesDir = path.join(process.cwd(), 'public', 'pictures')
  const pictures = fs.readdirSync(picturesDir)
  const randomPicture = pictures[Math.floor(Math.random() * pictures.length)]
  
  res.status(200).json({ picture: `/pictures/${randomPicture}` })
}