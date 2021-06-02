const Pageres = require('pageres');
const { writeFileSync } = require('fs');
const axios = require('axios');
const { slugify } = require('strman');
const { sites } = require('./sites.json');

const p = new Pageres();

Promise.all(sites.map(async (site) => {
  const response = await axios.get('https://hotell.difi.no/api/json/brreg/enhetsregisteret', {
    params: {
      query: site.org,
    },
  });

  [site.brreg] = response.data.entries;

  site.slug = slugify(site.name);

  await p
    .src(site.url, ['1440x1000'], { crop: true, filename: site.slug })
    .dest('./static/img')
    .run();

  return site;
})).then((result) => {
  writeFileSync('./database/db.json', JSON.stringify({ sites: result }), 'utf-8');
});
