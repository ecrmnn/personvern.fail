<template>
  <div>
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link to="/">
              personvern.fail
            </nuxt-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center
                      justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false" @click="isMobileNavVisible = true">
                <span class="sr-only">Åpne meny</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <nuxt-link to="/fjern-meg" class="font-medium text-gray-500 hover:text-gray-900">
            Fjern meg
          </nuxt-link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-HVhP1c1yUiLoJTxhMiLxOpD61yC9LjDui5_g1pxJJ_xYcw/viewform"
            target="_blank"
            class="font-medium text-gray-500 hover:text-gray-900">Tips oss</a>
        </div>
      </nav>
    </div>
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      v-if="isMobileNavVisible">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <nuxt-link to="/">
              personvern.fail
            </nuxt-link>
          </div>
          <div class="-mr-2">
            <button type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center
                  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="isMobileNavVisible=false">
              <span class="sr-only">Lukk meny</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <nuxt-link to="/fjern-meg" class="block px-3 py-2 rounded-md text-base font-medium
          text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Fjern meg
          </nuxt-link>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-HVhP1c1yUiLoJTxhMiLxOpD61yC9LjDui5_g1pxJJ_xYcw/viewform"
            target="_blank"
            class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Tips oss
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileNavVisible: false,
    };
  },
};
</script>
