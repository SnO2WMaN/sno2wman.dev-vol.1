<template>
  <div class="root">
    <nuxt class="nuxt" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Layout.Default'
})
export default class extends Vue {}
</script>

<style lang="scss">
:root {
  $accent-hue: 172;

  --accent-color: hsl(#{$accent-hue}, 100%, 65%);
  --base-black: hsl(#{30 + $accent-hue}, 15%, 19%);
  --text-black: hsl(#{45 + $accent-hue}, 8%, 85%);
  --bg: hsl(#{35 + $accent-hue}, 12%, 10%);
}

body,
html {
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.root {
  overflow: hidden;
  background: var(--bg);
  width: 100vw;
  height: 100vh;
}
</style>
