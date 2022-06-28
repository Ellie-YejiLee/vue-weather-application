<template>
  <HeaderDisplay />
  <WeatherContent />
</template>

<script>
import WeatherContent from "./components/weather/WeatherContent.vue";
import HeaderDisplay from "./components/HeaderDisplay";
export default {
  name: "App",
  components: {
    HeaderDisplay,
    WeatherContent,
  },
};
</script>

<style></style>
