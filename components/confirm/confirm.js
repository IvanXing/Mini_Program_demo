Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: ""
  },
  methods: {
    confirm() {
      this.triggerEvent('confirm', this.data.value)
    },
    cancel() {
      this.triggerEvent('cancel', this.data.value)
    },
    // 随时监听输入
    watchValue(event) {
      console.log(event)
      this.data.value = event.detail.value
    }
  }
})