<template>
  <div class="about">
    <h1>Templates editor</h1>
    <p>Use {brand} and {model} in template strings</p>
    <br />
    <div class="container">
      <div class="form-item">
        <h2>Skin Title</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.skinTitle"
            class="txt-area"
            @input="update($event, 'skinTitle')"
          ></textarea>
        </div>
      </div>
      <div class="form-item">
        <h2>Skin Meta Description</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.skinDescription"
            class="txt-area"
            @input="update($event, 'skinDescription')"
          ></textarea>
        </div>
      </div>
      <div class="form-item">
        <h2>Skin keywords</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.skinKeywords"
            class="txt-area"
            @input="update($event, 'skinKeywords')"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="form-item">
        <h2>Case Title</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.caseTitle"
            class="txt-area"
            @input="update($event, 'caseTitle')"
          ></textarea>
        </div>
      </div>
      <div class="form-item">
        <h2>Case Meta Description</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.caseDescription"
            class="txt-area"
            @input="update($event, 'caseDescription')"
          ></textarea>
        </div>
      </div>
      <div class="form-item">
        <h2>Case keywords</h2>
        <div class="item">
          <textarea
            :rows="8"
            :value="templateItems.caseKeywords"
            class="txt-area"
            @input="update($event, 'caseKeywords')"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['templateItems']),
  },
  methods: {
    ...mapMutations(['updateItems']),
    update(evt) {
      console.log(evt)
      this.updateItems({ ...this.templateItems, skinTitle: evt.target.value })
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
