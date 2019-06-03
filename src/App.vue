<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <router-link class="tab-item" :to="{name: 'goods'}">商品</router-link>
      <router-link class="tab-item" :to="{name: 'ratings'}">评论</router-link>
      <router-link class="tab-item" :to="{name: 'seller'}">商家</router-link>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created() {
      this.$axios.get('api/seller')
        .then(res => {
          if (res.data.errno === ERR_OK) {
            this.seller = res.data.data;
          }
        }).catch(error => {
        console.log(error);
      });
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active
        color: rgb(220, 20, 20)
</style>
