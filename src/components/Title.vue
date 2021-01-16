<template>
  <div>
    <div class="container">
      <div class="form-item">
        <h2>{{ category }} Title, Meta Description and Keywords generator</h2>
        <div class="item">
          <span class="label">Brand</span>
          <input v-model="brand" @input="create()" />
        </div>
        <div class="item">
          <span class="label">Model Name</span>
          <input v-model="model" @input="create()" />
        </div>
        <div class="item">
          <span class="label">Generated Title</span>
          <textarea
            rows="5"
            class="txt-area"
            :value="titleGenerated"
            id="title"
          ></textarea>
          <button class="copy-button" @click="copyText('title')">
            Copy Title
          </button>
        </div>
        <div class="item">
          <span class="label">Generated Description</span>
          <textarea
            rows="5"
            class="txt-area"
            :value="descGenerated"
            id="description"
          ></textarea>

          <button class="copy-button" @click="copyText('description')">
            Copy Description
          </button>
        </div>
        <div class="item">
          <span class="label">Generated Keywords</span>
          <textarea
            rows="8"
            class="txt-area"
            :value="keywordsGenerated"
            id="keywords"
          ></textarea>
          <button class="copy-button" @click="copyText('keywords')">
            Copy keywords
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brand: '',
      model: '',
      titleGenerated: '',
      descGenerated: '',
      keywordsGenerated: '',
    }
  },
  props: {
    category: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      let title = this.$store.state.templateItems[this.category + 'Title']
      this.titleGenerated = title
        .replaceAll('{brand}', this.brand)
        .replaceAll('{model}', this.model)

      let desc = this.$store.state.templateItems[this.category + 'Description']
      this.descGenerated = desc
        .replaceAll('{brand}', this.brand)
        .replaceAll('{model}', this.model)

      let keywords = this.$store.state.templateItems[this.category + 'Keywords']
      this.keywordsGenerated = keywords
        .replaceAll('{brand}', this.brand)
        .replaceAll('{model}', this.model)
    },
    copyText(id) {
      let copyText = document.getElementById(id)
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand('copy')
    },
  },
}
</script>
<style lang="scss">
.item {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .label {
    margin-right: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
  }
  textarea {
    font-size: 18px;
  }
  .copy-button {
    margin-left: 20px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
