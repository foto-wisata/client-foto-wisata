<template>
  <div id="main-content">
    <div id="resolution-paper" class="primary-container">
      <div id="resolution-topbar">
        <p v-show="loggedUser"></p>
        <i class="far fa-calendar-plus" id="logo-add" @click="showModal = true"></i>
        <modal v-if="showModal" @close="showModal = false">
          
        </modal>
      </div>
      <!-- yang di loop dibawah ini -->
      <div class="resolution">
        <div class="resolution-content">
          <p class="resolution-text">1. Lari pagi setiap hari</p>
        </div>
        <div class="resolution-option">
          <a href="#" class="btn-small red darken-4" v-on:click="deleteArticle(article._id)">delete</a>
          <a href="#" class="btn-small  amber lighten-1" >edit</a>
        </div>
      </div>
      <div class="resolution">
        <div class="resolution-content">
          <p class="resolution-text">2. Lulus Hacktiv8 dan punya gaji diatas 10 juta</p>
        </div>
        <div class="resolution-option">
          <a href="#" class="btn-small red darken-4" v-on:click="deleteArticle(article._id)">delete</a>
          <a href="#" class="btn-small  amber lighten-1" >edit</a>
        </div>
      </div>
      <div class="resolution">
        <div class="resolution-content">
          <p class="resolution-text">3. Mengunjungi one piece tower di jepang, tokyo</p>
          <div class="resolution-image">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/2f/a2/0a/caption.jpg" alt="onepiece.png" class="image">
          </div>
        </div>
        <div class="resolution-option">
          <a href="#" class="btn-small red darken-4" v-on:click="deleteArticle(article._id)">delete</a>
          <a href="#" class="btn-small  amber lighten-1" >edit</a>
        </div>
      </div>
      <div class="resolution">
        <div class="resolution-content">
          <p class="resolution-text">4. Beli switch</p>
          <div class="resolution-image">
            <img src="https://cdn.vox-cdn.com/thumbor/IVK5IRRZsFp9KWOr5SYFlctosVM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/57533307/jbareham_1492_170228_0024.0.0.jpg" alt="onepiece.png" class="image">
          </div>
        </div>
        <div class="resolution-option">
          <a href="#" class="btn-small red darken-4" v-on:click="deleteArticle(article._id)">delete</a>
          <a href="#" class="btn-small  amber lighten-1" >edit</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

