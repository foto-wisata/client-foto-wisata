Vue.component('modal', {
  props: ['populate'],
  template: `
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container primary-container">
          <form v-on:submit.prevent>
            <label for="new-description">Description</label>
            <input type="text" name="new-description" id="new-description" v-model="$root.resolution.description">
            <input class="btn amber lighten-1" type="file" name="file" v-on:change="$root.imageFileChange" />
            <button type="submit" class="btn amber lighten-1 deep-orange-text" v-on:click="$root.postResolution">Submit</button>
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
    </transition>`
})