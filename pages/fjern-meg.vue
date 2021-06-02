<template>
  <div>
    <Hero :image="image" :site="site" />

    <div class="max-w-2xl mx-auto mt-20 px-4 md:px-0">
      <p class="leading-8 mb-8 text-xl">
        Vi vil veldig gjerne fjerne din bedrift fra våre nettsider!
        Det eneste kravet vi setter er at din nettside oppfyller kravene definert
        i personvernloven så det blir enkelt for besøkende å ta gode valg.
      </p>

      <p class="leading-8 mb-8 text-xl">
        Dersom bedriften oppfyller kravene kan dere sende inn følgende skjema.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZVeeukt19p931AKXmexZ2D935NnkpMm1VuJ6bmCwwJVQ4gw/viewform?usp=sf_link"
        class="items-center justify-center px-8 py-3 border
                border-transparent text-base font-medium rounded-md text-white bg-indigo-600
                hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        Gå til utfylling
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Fjern meg',
    };
  },
};
</script>
