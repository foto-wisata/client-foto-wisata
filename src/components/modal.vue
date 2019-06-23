<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container primary-container">
        <form action="">
          <label for="new-description">Description</label>
          <input type="text" name="new-description" id="new-description" v-bind:value="description">
          <button type="submit" class="btn amber lighten-1 deep-orange-text">Submit</button>
        </form>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button btn red" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['description', 'image']
}
</script>
