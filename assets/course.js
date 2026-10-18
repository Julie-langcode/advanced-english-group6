/* The list of lessons on the home page.
   To publish a new lesson: create its folder in /lessons/, then change its status from 'soon' to 'ready'
   and make sure "slug" matches the folder name. */
window.COURSE = {
  module: 'Module 1',
  book: 'Outcomes Advanced, 2nd edition',
  lessons: [
    { n: 1, slug: '01-cities', status: 'ready',
      title: 'Cities', topic: 'Describing cities and city life · emphasising and exaggerating · backing up a point',
      pages: 'SB pp. 6–9 · WB pp. 4, 6' },
    { n: 2, slug: '02-urban-renewal', status: 'ready',
      title: 'Urban renewal', topic: 'Three cities that came back · recovery and change · perfect forms · pitch for Oldbury',
      pages: 'SB pp. 10–11, 166 · WB pp. 6–9' },
    { n: 3, slug: '03-culture-and-identity', status: 'soon',
      title: 'Culture and identity', topic: 'Society, culture and stereotypes · cleft sentences',
      pages: 'SB pp. 24–27, 168' },
    { n: 4, slug: '04-relationships-people', status: 'soon',
      title: 'Relationships: people', topic: 'Describing people and giving impressions',
      pages: 'SB pp. 14–19' },
    { n: 5, slug: '05-relationships-kinds', status: 'soon',
      title: 'Relationships: kinds', topic: 'Kinds of relationships · sharing problems · would',
      pages: 'SB pp. 20–21' },
    { n: 6, slug: '06-module-test', status: 'soon',
      title: 'Module test', topic: 'Reading, listening, grammar and vocabulary of Units 1–3',
      pages: 'Units 1–3' }
  ]
};
