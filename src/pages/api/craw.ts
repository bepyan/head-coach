import { type NextApiRequest, type NextApiResponse } from 'next';
import { craw } from '~/server/crawling/naver';

export default async function crawRoute(req: NextApiRequest, res: NextApiResponse) {
  const keyword = req.query.keyword;

  if (typeof keyword !== 'string') {
    res.status(400);
    return;
  }

  const data = await craw(keyword);
  res.status(200).json(data);
}
