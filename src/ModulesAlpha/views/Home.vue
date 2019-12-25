<template>
  <div class="home">
    <HelloWorld msg="Welcome to AlphaModules Home" />
    <el-button>Element Button</el-button>
  </div>
</template>

<script>
// @alpha is an alias to /src/ModulesAlpha
import HelloWorld from "@alpha/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
