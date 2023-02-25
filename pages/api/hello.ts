// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type FooterData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FooterData>
) {
  res.status(200).json({ name: 'John Doe' })
}
