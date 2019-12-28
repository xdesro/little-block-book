<template>
  <nav class="top-nav">
    <ul class="top-nav__list">
      <li class="top-nav__list-item">
        <router-link
          to="/block"
          class="top-nav__link"
          exact-active-class="top-nav__link--active"
        >
          Block
        </router-link>
      </li>
      <li class="top-nav__list-item">
        <router-link
          to="/mute"
          class="top-nav__link"
          exact-active-class="top-nav__link--active"
        >
          Mute
        </router-link>
      </li>
    </ul>
    <!-- <router-link to="/settings">Settings</router-link> -->
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top-nav {
  margin-bottom: 8rem;
  &__list {
    padding: 0;
    margin: 0;
    display: grid;
    // place-items: center;
    place-content: center;
    grid-auto-flow: column;
    grid-gap: 1rem;
    list-style-type: none;
    text-transform: uppercase;
    font-weight: 500;
    color: $color__secondary--dark;
  }
  &__link {
    color: inherit;
    text-decoration: none;
    &--active {
      color: $color__primary--dark;
    }
  }
}
</style>
