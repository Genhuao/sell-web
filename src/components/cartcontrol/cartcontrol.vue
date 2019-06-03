<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCart"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count');
          this.food.count = 1;
        } else {
          this.food.count++;
        }
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      position: relative
      display: inline-block;
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
      &.move-enter-active, &.move-leave-active
        opacity: 1
        transition: all 0.3s linear
        transform: translateX(0) rotate(0)
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translateX(24px) rotate(180deg)
    .cart-count
      display: inline-block;
      font-size: 10px
      vertical-align: top
      padding-top: 6px
      line-height: 24px
      text-align: center
      width: 12px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block;
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
</style>
