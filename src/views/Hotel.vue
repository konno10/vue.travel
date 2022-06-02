<template>
  <diV>
    <pre>{{hotels.pagingInfo}}</pre>
    <hr>
    <ul v-if="hotels.pagingInfo" class="pages">
      <li @click="getData(hotels.pagingInfo.page - 1)">＜</li>
      <li v-if="(hotels.pagingInfo.page > 4)">...</li>
      <li v-else>1</li>
      <li v-if="(hotels.pagingInfo.page > 4)">{{hotels.pagingInfo.page-2}}</li>
      <li v-else>2</li>
      <li v-if="(hotels.pagingInfo.page > 4)">{{hotels.pagingInfo.page-1}}</li>
      <li v-else-if="(hotels.pagingInfo.page > 95)">95</li>
      <li v-else>3</li>
      <li v-if="(hotels.pagingInfo.page > 4)">{{hotels.pagingInfo.page}}</li>
      <li v-else-if="(hotels.pagingInfo.page > 95)">96</li>
      <li v-else>4</li>
      <li v-if="(hotels.pagingInfo.page > 4)">{{hotels.pagingInfo.page+1}}</li>
      <li v-else-if="(hotels.pagingInfo.page > 95)">97</li>
      <li v-else>5</li>
      <li v-if="(hotels.pagingInfo.page > 4)">{{hotels.pagingInfo.page+2}}</li>
      <li v-else>6</li>
      <li  v-if="(hotels.pagingInfo.page > 4)">...</li>
      <li v-else>{{hotels.pagingInfo.pageCount}}</li>
      <li @click="getData(hotels.pagingInfo.page + 1)">＞</li>
    </ul>
    <input v-model="keyword" type = text>
    <button @click="onClicked">検索</button>
    <div class="hotel_detail">
      <p  v-if="hotels.pagingInfo" class="number_of_searches">検索結果{{hotels.pagingInfo.recordCount}}件</p>
      <ul>
        <li v-for="(hotel,index) in hotels.hotels.hotel" :key="index">
          <p class="hotel_name"></p>
          <p>{{hotel.hotelBasicInfo.hotelName}}</p>
        </li>
      </ul>
    </div>
    <pre>{{hotels.hotels[0].hotel[0].hotelBasicInfo.hotelName}}</pre>
  </diV>
</template>


<script>
import axios from "axios";
export default {
  data(){
    return{
      hotels:{},
      recordCount:{},
      keyword:'東京',
      };
  },
  methods:{
    getData(page){
      axios.get(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${encodeURIComponent(this.keyword)}&applicationId=1077899893552531335&page=${page}&hits=10`)
      .then((res) => {
        this.hotels = res.data;
      })
      .catch((err)=>{
        alert('エラーです！');
        console.log(err.response)
      })
    },
    onClicked(){
      this.getData();
    }
  },
  mounted(){
    this.getData(1)
  },
};
</script>

<style>
li {
  list-style: none;
}
.pages{
  display: flex;
}
.pages li{
  margin: 0 20px;
}

</style>
