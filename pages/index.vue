<template>
  <div>
    <Hero/>

    <div class="container mx-auto mt-20 px-4 md:px-0">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div v-for="site in sites" :key="site.url" class="flex">
          <nuxt-link :to="`/${site.slug}/`" class="bg-white shadow hover:shadow-md">
            <img :src="`/img/${site.slug}.jpg`" :alt="site.name">
            <div class="py-6 px-4">
              <h2 class="font-medium">
                {{ site.name }}
              </h2>
              <p class="pt-2 text-sm text-gray-500">
                Org.nr. {{ site.brreg.orgnr }}
              </p>
              <p class="pt-2 text-sm text-gray-500">
                {{ site.name }} har ignorert personvern i {{ timeAgo(site.brreg.regdato) }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sites } from '../database/db.json';

export default {
  layout: 'home',

  async asyncData() {
    return { sites };
  },

  head() {
    return {
      title: 'Hjem',
    };
  },

  methods: {
    timeAgo(date) {
      const [d, m, y] = date.split('.');

      return this.$dayjs(`${y}-${m}-${d}`).fromNow('yy');
    },
  },
};
</script>
