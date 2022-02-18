<template>
  <div class="test-page">
    <span> media play with rtspsouce</span>
    <div class="video-warp">
      <div class="vxgplayer"
           id="vxg_media_player1"
           url="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
           autostart
           controls
           avsync
           nmf-src="video_play_plugins/pnacl/Release/media_player.nmf"
           nmf-path="media_player.nmf"
           width="800"
           height="400">
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "testVlcPlay",
  data() {
    return {
      videoWarpShow: false,
      videoPlayUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
    }
  },
  mounted() {
    this.playVideo();
  },
  methods: {
    playVideo() {
      // rtsp://218.204.223.237:554/live/1/0547424F573B085C/gsfp90ef4k0a6iap.sdp
      // rtsp://218.204.223.237:554/live/1/66251FC11353191F/e7ooqwcfbqjoo80j.sdp
      //  rtsp://211.139.194.251:554/live/2/13E6330A31193128/5iLd2iNl5nQ2s8r8.sdp
      // 设置url 播放
      window.vxgplayer('vxg_media_player1').stop();
      window.vxgplayer('vxg_media_player1').src("rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov");
      window.vxgplayer('vxg_media_player1').play();
    }
  },
  destroy() {
    window.vxgplayer.dispose();
  }
}
</script>

<style scoped>
.test-page {
  width: 100%;
  height: 500px;
}
.video-warp {
  width: 100%;
  height: 100%;
}
</style>