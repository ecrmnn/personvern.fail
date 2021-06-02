<template>
  <div>
    <Nuxt />

    <footer class="mt-20 border-t border-gray-300 py-12 container mx-auto text-center text-sm">
      <p>
        Bygget med <span title="kjærlighet" class="px-1">❤️</span> og
        <span title="kaffe" class="px-1">☕️</span>
        av <a href="https://www.github.com/ecrmnn">ecrmnn</a>.
        <a href="https://www.github.com/ecrmnn/personvern.fail">Åpen kildekode</a>.
      </p>
      <p>
        <a href="https://www.personvern.fail">Personvern.fail</a>
        er ikke assosiert med
        <a href="https://www.datatilsynet.no">Datatilsynet</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    // Adds trailing slash to match sitemap.xml
    let canonical = `${process.env.BASE_URL}`;

    if (this.$route.path !== '/') {
      canonical += `${this.$route.path}/`;
    }

    return {
      meta: [{
        hid: 'og:url',
        property: 'og:url',
        content: canonical,
      }],
      link: [{
        hid: 'canonical',
        rel: 'canonical',
        href: canonical,
      }],
    };
  },
};
</script>
