/* The lessons on the home page, grouped by module. The current module comes first.
   Lesson status: 'ready' = open (current module) · 'review' = open, earlier module · 'done' = finished, no page · 'soon' = not published yet.
   To publish a new lesson: create its folder in /lessons/, change its status from 'soon' to 'ready'
   and make sure "slug" matches the folder name. */
window.COURSE = {
  book: 'Outcomes Advanced, 2nd edition',
  modules: [
    { id: 2, name: 'Module 2', state: 'current',
      lessons: [
        { n: 3, slug: '03-culture-and-identity', status: 'ready',
          title: 'Culture and identity', topic: 'Society and culture · challenging stereotypes · cleft sentences · essay thesis',
          pages: 'SB pp. 24–27, 168' },
        { n: 4, slug: '04-relationships-people', status: 'soon',
          title: 'Relationships: people', topic: 'Describing people and giving impressions',
          pages: 'SB pp. 14–19' },
        { n: 5, slug: '05-relationships-kinds', status: 'soon',
          title: 'Relationships: kinds', topic: 'Kinds of relationships · sharing problems · would',
          pages: 'SB pp. 20–21' }
      ] },
    { id: 1, name: 'Module 1', state: 'completed', meta: 'Lessons stay open for review',
      lessons: [
        { n: 1, slug: '01-cities', status: 'review',
          title: 'Cities', topic: 'Describing cities and city life · emphasising and exaggerating · backing up a point',
          pages: 'SB pp. 6–9 · WB pp. 4, 6' },
        { n: 2, slug: '02-urban-renewal', status: 'review',
          title: 'Urban renewal', topic: 'Three cities that came back · recovery and change · perfect forms · pitch for Oldbury',
          pages: 'SB pp. 10–11, 166 · WB pp. 6–9' },
        { n: '✓', status: 'done',
          title: 'Module 1 test', topic: 'Listening, vocabulary, grammar, reading and writing · Cities and Urban renewal',
          pages: 'Unit 1' }
      ] }
  ]
};
/* Flat list of lesson pages for the "previous / next lesson" buttons inside lessons. */
window.COURSE.lessons = window.COURSE.modules.reduce(function (a, m) { return a.concat(m.lessons); }, [])
  .filter(function (l) { return typeof l.n === 'number'; }).sort(function (a, b) { return a.n - b.n; });
