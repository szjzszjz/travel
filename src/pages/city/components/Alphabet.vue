<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style scoped>
  .list{
    background: red;
    position: absolute;
    top: 6rem;
    right: 0;
    bottom: 0;
    width: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item{
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: center;
  }
</style>
