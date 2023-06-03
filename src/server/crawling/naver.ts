import { getHTML } from '~/utils/craw';
import * as cheerio from 'cheerio';

export const craw = async (query: string) => {
  const result: Record<string, any> = {};
  const html = await getHTML(`https://search.naver.com/search.naver?query=${query}`);
  const $ = cheerio.load(html);

  const $view = $('._list_base');
  if ($view.length) {
    result.view = $view
      .find('._svp_item .sub_name')
      .map((i, el) => {
        return {
          rank: i + 1,
          title: $(el).text(),
          href: $(el).attr('href'),
        };
      })
      .toArray();
  } else {
    console.log('VIEW 검색 결과가 없습니다.');
  }

  const $place = $('li[data-laim-exp-id=loc_plc]');
  if ($place.length) {
    result.place = $place
      .find('.place_bluelink')
      .map((i, el) => {
        return {
          rank: i + 1,
          title: $(el).text(),
        };
      })
      .toArray();
  } else {
    console.log('플레이스 검색 결과가 없습니다.');
  }

  return result;
};
