import { craw } from './crawling/naver';
import { sendSlackMessage } from './slack';

export async function cron() {
  const data = await craw('부부상담');
  await sendSlackMessage(JSON.stringify(data, null, 2));

  return {
    summary: `test`,
    results: [],
    errors: [],
  };
}
