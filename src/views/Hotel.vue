<template>
  <diV style="width:500px; margin:0 auto;">
    <pre>{{ hotels.pagingInfo }}</pre>
    <!-- <pre>{{hotels}}</pre> -->
    <hr />
    <div style="text-align:center;">
      <input style="border:1px solid gray; border-radius:30px; padding:5px; margin:30px 0;"
       v-model="keyword" type="text" />
      <button style="margin-left:10px; border:1px solid gray;" @click="onClicked">検索</button>
    </div>
    <v-pagination v-model="page" :length="hotels.pagingInfo.pageCount" color="#000000" @input="onClickPagination"></v-pagination>
    <div style="width:500px;" class="hotel_detail">
      <p style="height:60px; padding:16px; margin-top:15px; font-size:20px; background-color:blue; color:white; border-radius:5px 5px 0 0;" v-if="hotels.pagingInfo" class="number_of_searches">
        検索結果{{ hotels.pagingInfo.recordCount }}件
      </p>
      <ul style="padding:20px; border:1px solid gray;">
        <li style="padding:10px;" class="hotelContent" v-for="(hotels, index) in hotels.hotels" :key="index">
          <img style="width:40px; height:40px; border-radius:50%; margin-right:15px;" :src="hotels.hotel[0].hotelBasicInfo.hotelThumbnailUrl">
          <div class="hotelDetail">
            <p style="overflow:hidden; white-space:nowrap; width:390px; text-overflow:ellipsis;">{{ hotels.hotel[0].hotelBasicInfo.hotelName }}</p>
            <p style="font-size:13px; overflow:hidden; white-space:nowrap; width:360px; text-overflow:ellipsis;">{{ hotels.hotel[0].hotelBasicInfo.access }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <pre>{{ hotels.hotels[0].hotel[0].hotelBasicInfo.hotelName }}</pre> -->
      <!-- <pre v-for="(hoge,index) in hotels.hotels" :key="index">{{hoge.hotel[0].hotelBasicInfo.hotelName}}</pre> -->
      <!-- <pre>{{hotels}}</pre> -->
  </diV>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      hotels: {},
      recordCount: {},
      keyword: "東京",
      page: 1,
    };
  },
  methods: {
    getData(page) {
      axios
        .get(
          `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${encodeURIComponent(
            this.keyword
          )}&applicationId=1077899893552531335&page=${page}&hits=10`
        )
        .then((res) => {
          this.hotels = res.data;
        })
        .catch((err) => {
          alert("エラーです！");
          console.log(err.response);
        });
    },
    onClicked() {
      this.getData(1);
    },
    onClickPagination(page){
      this.getData(page);
    }
  },
  mounted() {
    this.getData(1);
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.pages {
  display: flex;
}
.pages li {
  margin: 0 20px;
}
.hotelContent{
  display: flex;
}
.hotelDetail{
  
}
</style>
