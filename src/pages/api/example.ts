import { type NextApiRequest, type NextApiResponse } from 'next';
import { appRouter } from '~/server/api/root';
import { createTRPCContext } from '~/server/api/trpc';

export default async function example(req: NextApiRequest, res: NextApiResponse) {
  const ctx = await createTRPCContext({ req, res });
  const caller = appRouter.createCaller(ctx);

  const hello = await caller.example.hello({ text: 'hello world' });
  res.status(200).json(hello);
}
