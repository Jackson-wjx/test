<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {

      };
    },
    watch: {
      $route() {
        window.scrollTo(0, 0);
      },
    },
  };
</script>

<style>
@font-face {
  font-family: "Source Han Sans CN Regular";
  src: url("assets/font/SourceHanSansCN-Regular.otf");
  font-weight: normal;
  font-style: normal;
}

#app{
  /* font-family:"Microsoft YaHei"; */
  font-family:"Source Han Sans CN Regular",serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
