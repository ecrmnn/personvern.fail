<template>
  <div>
    <Hero :image="image" :site="site" />

    <div class="max-w-2xl mx-auto mt-20 px-4 md:px-0">
      <p class="leading-8 mb-8 text-xl">
        <a :href="site.url">{{ site.name }}</a> er en av flere norske aktører som
        bryter personvernloven for egen vinning. Dette gjør de ved å gjøre det
        vanskelig eller umulig for brukeren å spesifisere hvilke personopplysninger
        de ønsker å dele.
      </p>

      <p class="leading-8 mb-8 text-xl">
        Personvernloven trådde i kraft 20. juni 2018.
        Den gjør det tydelig at det skal være enkelt å bestemme om man ønsker å dele
        personopplysninger eller ikke. Det skal være mulig å kun benytte
        nødvendige cookies på en nettside og si nei til alt annet.
        {{ site.name }} har dermed brutt personvernloven i over {{ timeSinceLaw }}
      </p>

      <p class="leading-8 mb-8 text-xl">
        {{ site.name }} oppfyller ikke alle krav til informasjon
        og åpenhet i henhold til personvernloven.
        {{ site.name }} bryter dermed et eller flere krav spesifisert av Datatilsynet
      </p>

      <ul class="pl-6 list-decimal text-xl">
        <li class="mb-4">
          Virksomhetene ikke kan bruke juridisk eller teknisk sjargong
          når de kommuniserer om personopplysninger
        </li>
        <li class="mb-4">
          Informasjonen skal være forståelig for målgruppen, og
          ha klart språk og god struktur
        </li>
        <li class="mb-4">
          Informasjonen skal være konkret (virksomheter bør unngå formuleringer
          som «vi kan bruke personopplysninger til …»
        </li>
        <li class="mb-4">
          Informasjon om behandling av personopplysninger må være adskilt
          fra annen informasjon (for eksempel brukervilkår)
        </li>
        <li class="mb-4">
          Det skal ikke være nødvendig for brukerne/kundene
          å måtte lete etter informasjon om behandling av personopplysninger
        </li>
        <li class="mb-4">
          Det skal være lett for den enkelte å
          finne frem i informasjonen (for eksempel dersom hun bare lurer på hvordan
          personopplysninger behandles når hun tar kontakt med kundeservice)
        </li>
        <li class="mb-4">
          Den enkelte skal ikke måtte sette seg inn
          i store mengder informasjon for å forstå hva som skjer med egne opplysninger
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sites } from '../database/db.json';

export default {
  async asyncData({ params }) {
    const site = sites.find(({ slug }) => params.slug === slug);

    return { site };
  },

  head() {
    return {
      title: this.site.name,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `${this.site.name} bryter personvernloven for egen vinning`,
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.site.name,
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: `${this.site.name} bryter personvernloven for egen vinning`,
      }],
    };
  },

  computed: {
    image() {
      return `/img/${this.site.slug}.jpg`;
    },

    timeSinceLaw() {
      return this.$dayjs('2018-07-20').fromNow(true);
    },
  },
};
</script>
