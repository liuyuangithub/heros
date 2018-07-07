<template>
   <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li> -->
        <!-- <router-link tag="li" active-class="active" to="heroes"><a href="javascript">{{ first }}</a></router-link> -->
        <router-link tag="li" active-class="active" :to="{'name': 'heroes'}"><a href="javascript">{{ heroes }}</a></router-link>
        <router-link tag="li" active-class="active" :to="{'name': 'weapons'}"><a href="javascript">{{ weapons }}</a></router-link>
        <router-link tag="li" active-class="active" :to="{'name': 'equips'}"><a href="javascript">{{ equips }}</a></router-link>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      first: "首页",
      heroes: "英雄列表",
      weapons: "武器列表",
      equips: "装备列表"
    };
  }
};
</script>

<style>
</style>
