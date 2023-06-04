import axios from 'axios';
import { env } from '~/env.mjs';

const accessToken = env.SLACK_BOT_TOKEN;
const teamId = 'T05AJBX7R7C';
const channelId = 'C05AJBXB3T4';

export async function sendSlackMessage(message: string) {
  const result = await axios({
    method: 'POST',
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    // https://api.slack.com/methods/chat.postMessage#args
    data: {
      channel: channelId,
      unfurl_links: true,
      text: message,
    },
  });

  return result;
}
