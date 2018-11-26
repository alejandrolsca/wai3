<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  padding: 1.5rem;
}
@mixin box_shadow($level) {
  @if $level == 1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  } @else if $level == 2 {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  } @else if $level == 3 {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  } @else if $level == 4 {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } @else if $level == 5 {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
}
.card {
  margin-bottom: 1rem;
  -webkit-transition: all 250ms;
  -moz-transition: all 250ms;
  transition: all 250ms;
  @include box_shadow(1);
  &:hover {
    @include box_shadow(5);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  &.rounded-corners {
    border-radius: 0.5rem;
  }
}
img {
  &.rounded-corners {
    border-radius: 0.5rem;
  }
}
</style>

