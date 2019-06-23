<template>
    <div class="resolution">
        <div class="resolution-content">
          <p class="resolution-text">{{i}} {{description}}</p>
        </div>
        <div class="resolution-option">
          <a href="#" class="btn-small red darken-4" v-on:click="$emit('delete-resolution', i)">delete</a>
          <a href="#" class="btn-small amber lighten-1" v-on:click="$emit('edit-resolution', i)">edit</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['i', 'description']
}
</script>
