<template>
  <div class="block">
    <h1 class="view__title">Block<br />List</h1>
    <section class="list">
      <ListItem
        v-for="(listItem, index) in listItems"
        :key="index"
        :handle="listItem.handle"
        :name="listItem.name"
        :purpose="purpose"
      />
    </section>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem";
export default {
  components: {
    ListItem
  },
  data() {
    return {
      purpose: "block",
      listItems: [
        { handle: "@xdesro", name: "Henry Desroches" },
        { handle: "@wutweetclann", name: "Tofu Loaf" }
      ]
    };
  }
};
</script>

<style lang="scss">
.view {
  &__title {
    font-weight: bold;
    font-size: 72px;
    line-height: 0.8;
    text-transform: uppercase;
    letter-spacing: -0.06em;

    color: #efefef;
  }
}
.list {
  padding-bottom: 5rem;
  display: grid;
}
</style>
