<template>
  <div class="relative bg-white overflow-hidden">
    <div class="container mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl
        lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 2xl:-right-24 inset-y-0 h-full w-48
          text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Navigation/>

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6
        md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <div v-if="!site">
              <h1 class="text-4xl tracking-tight font-extrabold
              text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">
                  Flere norske bedrifter og aktører
                </span>
                <span class="block text-red-600 xl:inline">
                  bryter personvernloven for egen vinning
                </span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg
              sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Vi har samlet flere av disse aktørene her så du kan unngå dem <br>
                &mdash; og for å gi de et insentiv til å ta personvern på alvor.
              </p>
            </div>
            <div v-else>
              <h1 class="text-4xl tracking-tight font-extrabold
              text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">
                  {{ site.name }}

                </span>
                <span class="block text-red-600 xl:inline">
                  bryter personvernloven for egen vinning
                </span>
              </h1>
            </div>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <nuxt-link to="/fjern-meg"
                  class="w-full flex items-center justify-center px-8 py-3 border
                border-transparent text-base font-medium rounded-md text-white bg-indigo-600
                hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Fjern meg
                </nuxt-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-HVhP1c1yUiLoJTxhMiLxOpD61yC9LjDui5_g1pxJJ_xYcw/viewform"
                  target="_blank"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent
                  text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200
                  md:py-4 md:text-lg md:px-10">
                  Tips oss
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="image" alt="Personvern.fail">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      required: false,
    },

    image: {
      type: String,
      required: false,
      default: 'https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VydmVpbGxhbmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    },
  },

  data() {
    return {
      isMobileNavVisible: false,
    };
  },
};
</script>
