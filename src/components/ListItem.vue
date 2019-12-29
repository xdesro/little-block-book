<template>
  <article :class="`list-item${expanded ? ' list-item--expanded' : ''}`">
    <button class="list-item__expand" @click="toggleExpanded">
      <IconChevronRight class="list-item__expand-icon" />
    </button>
    <div class="list-item__base">
      <div class="list-item__meta">
        <h3 class="list-item__handle">{{ handle }}</h3>
        <p class="list-item__name">{{ name }}</p>
      </div>
      <div class="list-item__buttons">
        <button class="list-item__button">{{ buttonText }}</button>
        <button class="list-item__button" v-if="expanded">Move</button>
      </div>
    </div>
    <footer v-if="expanded" class="list-item__footer">
      <p class="list-item__description">
        Katie is too much of a cute pie to be allowed on regular internet, she
        must be banned.
      </p>
      <div class="list-item__dates">
        <p>
          Blocked Date:
          <time datetime="blockedDate">{{ blockedDateFormatted }}</time>
        </p>
        <p v-if="updatedDate">
          Updated Date: <time datetime="updatedDate">{{ updatedDate }}</time>
        </p>
      </div>
    </footer>
  </article>
</template>

<script>
import IconChevronRight from "@/components/IconChevronRight";
export default {
  components: { IconChevronRight },
  props: {
    purpose: {
      type: String,
      default: "mute"
    },
    handle: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    blockedDate: {
      type: Date,
      default: "Sun Dec 17 1995 03:24:00 GMT"
    },
    updatedDate: {
      type: Date,
      required: false
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    buttonText() {
      const textOptions = {
        mute: "Unmute",
        block: "Unblock"
      };
      return textOptions[this.purpose];
    },
    blockedDateFormatted() {
      const date = {
        day: new Date(this.blockedDate).toLocaleDateString("en-US", {
          day: "numeric"
        }),
        month: new Date(this.blockedDate).toLocaleDateString("en-US", {
          month: "short"
        }),
        year: new Date(this.blockedDate).toLocaleDateString("en-US", {
          year: "numeric"
        })
      };

      return `${date["day"]} ${date["month"]} ${date["year"]}`;
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss">
.list-item {
  $this: &;
  padding: 1rem 1rem;
  margin-left: -1rem;
  min-height: 5rem;
  margin-right: -1rem;
  border-bottom: 1px solid $color__secondary--dark;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  &__base {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: start;
    grid-gap: 1rem;
    align-items: start;
  }
  &__expand {
    padding: 0;
    margin: 0;
    border: 0;
    width: 0.75rem;
    background: none;
    color: inherit;
    align-self: start;
    grid-row-end: span 2;
    cursor: pointer;
    transition: 0.2s transform;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
    #{$this}--expanded & {
      transform: rotate(90deg);
    }
  }
  &__expand-icon {
    height: 0.75rem;
  }
  &__handle {
    margin: 0;
    font-size: 1.5rem;
  }
  &__name {
    margin: 0;
    color: $color__secondary--dark;
    font-size: 0.75rem;
  }
  &__buttons {
    align-self: baseline;
    justify-self: end;
    justify-items: end;
    display: grid;
    grid-row-gap: 0.5rem;
  }
  &__button {
    border: 1px solid $color__secondary--dark;
    background: none;
    color: $color__secondary--dark;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    font-weight: 700;
    font-size: 0.75rem;

    cursor: pointer;
    transition: all 0.1s;
    &:hover {
      background-color: $color__secondary--dark;
      color: $color__background--dark;
    }
  }
  &__footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    align-items: end;
  }
  &__dates {
    font-weight: 300;
    font-size: 0.625rem;
    text-align: right;
    text-transform: uppercase;
    color: $color__secondary--dark;
  }
  &__description {
    font-size: 0.75rem;
  }
}
</style>
