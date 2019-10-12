<template>

<div class="swiper-container swiper-container-h">
  <Upload
    :on-success="getBack"
    action="http://192.168.199.169:8089/contact/getWechat.do">
    <Button icon="ios-cloud-upload-outline">Upload files</Button>
  </Upload>


  <img src="http://localhost:8089/aboutMe/getimg" />
  </div>
  </template>
<script>
  import Swiper from 'swiper';
  export default {
    data () {
      return {

      }
    },
    methods: {
      getBack(res, file){
        console.log(res)
        console.log(file)
      }
    }
  }
  </script>
