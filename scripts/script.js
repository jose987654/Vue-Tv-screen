const conditionalRendering = {
  data() {
    return {
      tv:true,
      bulbon:true,
      chn1:true,
      chn2:true,
      chn3:true,
    };
  },

  methods: {
    tvswitch(){
      this.tv = !this.tv;
    },
    channel1(){
      this.chn1 =true;
      this.chn2 = false;
      this.chn3 = false;
    },
    channel2(){
      this.chn1 =false
      this.chn2 = true;
      this.chn3 = false;
    },channel3(){
      this.chn1 = false;
      this.chn2 = false;
      this.chn3 = true;
    },

  },
};

Vue.createApp(conditionalRendering).mount("#app");
