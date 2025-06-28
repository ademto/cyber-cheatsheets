import { load } from 'cheerio';

export function wrapHeaders(html: string): string {
  const $ = load(html);

  $('h2').each(function () {
    const h2 = $(this);
    const wrapper = $('<div class="h2-wrap"></div>');
    wrapper.append(h2.clone());
    h2.replaceWith(wrapper);
  });

  $('h3').each(function () {
    const h3 = $(this);
    const wrapper = $('<div class="h3-wrap"><div class="section"></div></div>');
    wrapper.find('.section').append(h3.clone());
    h3.replaceWith(wrapper);
  });

  return $('body').html() || '';
}
