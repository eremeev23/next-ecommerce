import type { NextApiRequest, NextApiResponse } from 'next'
import { LinkType } from "~/types";

export type FooterData = {
  for_customers: LinkType[]
  links: LinkType[]
}

const data: FooterData = {
  for_customers: [
    {
      href: '/account',
      title: 'MY ACCOUNT'
    },
    {
      href: '/contacts',
      title: 'CONTACTS'
    },
    {
      href: '/privacy',
      title: 'LEGAL & PRIVACY'
    },
  ],
  links: [
    {
      href: 'https://www.instagram.com/eremeev23/',
      iconName: 'InstagramIcon',
    },
    {
      href: 'https://t.me/eremeev23',
      iconName: 'TelegramIcon',
    },
    {
      href: 'https://www.linkedin.com/in/maksim-eremeev-6446101a9/',
      iconName: 'LinkedInIcon'
    },
    {
      href: 'https://github.com/eremeev23',
      iconName: 'GitHubIcon'
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FooterData>
) {
  res.status(200).json(data)
}
