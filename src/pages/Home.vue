<template>
  <div class="home">
    <!--轮播图-->
    <el-carousel class="swiper-container" :interval="4000" type="card" height="360px">
      <el-carousel-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.picImg"/>
      </el-carousel-item>
    </el-carousel>
    <!--热门歌单-->
    <play-list :playList="songList" title="歌单" path="song-sheet-detail" class="section"></play-list>
    <!--热门歌手-->
    <play-list  style="margin-bottom: 30px" :playList="singerList" title="歌手" path="singer-detail" class="section"></play-list>
  </div>
</template>

<script>
import PlayList from '../components/PlayList'
import { swiperList } from '../assets/data/swiper'
import { HttpManager } from '../api/index'

export default {
  name: 'Home',
  components: {
    PlayList
  },
  data () {
    return {
      swiperList: swiperList, // 轮播图列表
      songList: [], // 歌单列表
      singerList: [] // 歌手列表
    }
  },
  created () {
    console.log('%曹明轩的音乐网站', 'font-size: 16px; font-weight: bold')
    // 获取歌单列表
    this.getSongList()
    // 获取歌手列表
    this.getSingerList()
  },
  methods: {
    getSongList () {
      HttpManager.getSongList()
        .then(res => {
          this.songList = res.sort().slice(0, 10)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getSingerList () {
      HttpManager.getAllSinger()
        .then(res => {
          this.singerList = res.sort().slice(0, 10)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss';
</style>
