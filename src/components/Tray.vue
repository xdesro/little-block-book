<template>
  <nav class="tray">
    <ul class="tray__list">
      <li class="tray__list-item">
        <router-link
          to="/settings"
          class="tray__link"
          exact-active-class="tray__link--active"
        >
          <Icon class="tray__icon" name="gear" />
        </router-link>
      </li>
      <li class="tray__list-item">
        <router-link
          to="/block"
          class="tray__link"
          exact-active-class="tray__link--active"
        >
          <Icon class="tray__icon" name="block" />
        </router-link>
      </li>
      <li class="tray__list-item">
        <router-link
          to="/mute"
          class="tray__link"
          exact-active-class="tray__link--active"
        >
          <Icon class="tray__icon" name="mute" />
        </router-link>
      </li>
      <li class="tray__list-item">
        <button class="tray__link">
          <Icon class="tray__icon" name="add" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  }
};
</script>

<style lang="scss">
.tray {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  border-top: 1px solid $color__primary--dark;
  color: $color__secondary--dark;
  padding: 2rem;
  &__list {
    display: grid;
    grid-auto-flow: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    justify-items: center;
    justify-content: space-between;
  }
  &__list-item {
    &:last-of-type {
      .tray__link {
        cursor: not-allowed;
      }
    }
  }
  &__icon {
    max-width: 2rem;
    max-height: 2rem;
  }
  &__link {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    margin: 0;
    &--active {
      color: $color__primary--dark;
    }
  }
}
</style>
