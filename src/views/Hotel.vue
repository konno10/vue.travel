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
    <v-pagination v-model="page" :length="hotels.pagingInfo.pageCount" color="#00f" @input="onClickPagination"></v-pagination>
    <v-card>
      <p style="height:60px; padding:16px; margin-top:15px; font-size:20px; background-color:blue; color:white; border-radius:5px 5px 0 0;" v-if="hotels.pagingInfo" class="number_of_searches">
        検索結果{{ hotels.pagingInfo.recordCount }}件
      </p>
      <ul style="padding:20px; border:1px solid gray;">
        <li style="padding:10px;" @click="dialog = true" class="hotelContent" v-for="(hotels, index) in hotels.hotels" :key="index">
          <img style="width:40px; height:40px; border-radius:50%; margin-right:15px;" :src="hotels.hotel[0].hotelBasicInfo.hotelThumbnailUrl">
          <div class="hotelDetail">
            <p style="overflow:hidden; white-space:nowrap; width:390px; text-overflow:ellipsis;">{{ hotels.hotel[0].hotelBasicInfo.hotelName }}</p>
            <p style="font-size:13px; overflow:hidden; white-space:nowrap; width:360px; text-overflow:ellipsis;">{{ hotels.hotel[0].hotelBasicInfo.access }}</p>
          </div>
        </li>
      </ul>
    </v-card>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5  lighten-2" v-for="(hotels, index) in hotels.hotels" :key="index">
              <img :src="hotels.hotel[0].hotelBasicInfo.hotelImageUrl">
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
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
      dialog: false,
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
p{
  margin: 0;
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
