import type { NextApiRequest, NextApiResponse } from 'next';
import { cron } from '~/server/cron';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await cron();
    res.status(200).json({ message: 'Cron job successful!' });
  } catch (err) {
    console.log('Cron job error:', err);
    res.status(500).json({ statusCode: 500, message: err });
  }
}
