<template>
  <div>
    <div>{{ $t("hello") }}</div>
    <img :src="`${resource}/images/logo.png`" alt="" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

@Options({
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("setting", {
      language: "getLanguage",
      resource: "getResource",
    }),
  },
  mounted() {
    if (this.language !== this.$i18n.locale) {
      this.$i18n.locale = this.language;
    }
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  text-align: center;
  font-size: 50px;
  margin-top: 60px;
}

</style>
