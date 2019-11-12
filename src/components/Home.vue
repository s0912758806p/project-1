<template>
  <div>
    <main>
      <section>
        <div class="index_stn_ad">
          <div class="index_stn_ad_vd">
            <video
              src="../assets/video/the_story_of_absolut_178_years_in_under_six_minutes (online-video-cutter.com).mp4"
              muted
              autoplay
            ></video>
          </div>
        </div>
        <!-- 輪播banner -->
        <a href="#" class="swipeBanner">
          <mt-swipe :show-indicators="false">
            <mt-swipe-item>
              <img :src="imgBanner01" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img :src="imgBanner02" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img :src="imgBanner03" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img :src="imgBanner04" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img :src="imgBanner05" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img :src="imgBanner06" alt />
            </mt-swipe-item>
          </mt-swipe>
        </a>
      </section>

      <section>
        <div class="index_stn_box">
          <div class="index_stn_box_h2">
            <div>
              <h2>MAY THE VODKA BE WITH YOU</h2>
            </div>
          </div>
          <div class="index_stn_box_item_title">
            <h3>PRODUCT</h3>
          </div>
        </div>

        <div class="index_stn_bar">
          <div class="index_stn_bar_item" data-aos="fade-up" data-aos-duration="2500">
            <a href="product.html">
              <img src="../assets/image/vodka1.jpg" alt />
            </a>
            <div>
              <h3>Absolut and Detour</h3>
              <p>We have the best quality, the best service, and the love of vodka, and give it to vodka lovers around the world.</p>
            </div>
          </div>
        </div>

        <div class="index_stn_bottle">
          <div class="index_stn_bottle_bg">
            <div class="index_stn_bottle_product_drop" v-show="itemShow === 1">
              <a href="javascript:;">
                <img :src="imgDropBottle" alt />
              </a>
            </div>
            <div class="index_stn_bottle_product_exly" v-show="itemShow === 2">
              <a href="javascript:;">
                <img :src="imgRainBottle" alt />
              </a>
            </div>
            <div class="index_stn_bottle_product_exly" v-show="itemShow === 3">
              <a href="javascript:;">
                <img :src="imgExlyBottle" alt />
              </a>
            </div>
            <div class="index_stn_bottle_product_exly" v-show="itemShow === 4">
              <a href="javascript:;">
                <img :src="imgVokaBottle" alt />
              </a>
            </div>
            <div class="index_stn_bottle_txt" v-show="itemShow === 1">
              <div class="index_stn_bottle_h2">
                <h2>A Drop of Love</h2>
              </div>
              <div class="index_stn_bottle_h3">
                <video src="../assets/video/AbsolutDrop.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div class="index_stn_bottle_txt" v-show="itemShow === 2">
              <div class="index_stn_bottle_h2">
                <h2>Dream to only</h2>
              </div>
              <div id="rainbow_h3" class="index_stn_bottle_h3">
                <video src="../assets/video/Absolut Pride.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div class="index_stn_bottle_txt" v-show="itemShow === 3">
              <div class="index_stn_bottle_h2">
                <h2>The extraordinary of the Marquis</h2>
              </div>
              <div id="exly_h3" class="index_stn_bottle_h3">
                <video
                  src="../assets/video/Absolut Elyx - The Pineapple of Hospitality.mp4"
                  muted
                  controls
                ></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div class="index_stn_bottle_txt" v-show="itemShow === 4">
              <div class="index_stn_bottle_h2">
                <h2>Absolutely the classics.</h2>
              </div>
              <div id="vodka_h3" class="index_stn_bottle_h3">
                <video src="../assets/video/AbsolutVodka.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div id="index_bottle_btn">
              <div id="index_bottle_btn_box_drop" @click="clickItem(1)"></div>
              <div id="index_bottle_btn_box_rainbow" @click="clickItem(2)"></div>
              <div id="index_bottle_btn_box_exly" @click="clickItem(3)"></div>
              <div id="index_bottle_btn_box_vodka" @click="clickItem(4)"></div>
            </div>
          </div>
        </div>

        <div class="index_stn_box">
          <div class="index_stn_box_item_title">
            <h3>OUR SECRET</h3>
          </div>
        </div>

        <div class="index_stn_secret">
          <div class="index_stn_secret_item" data-aos="fade-up" data-aos-duration="2500">
            <a href="oursecret.html">
              <img src="../assets/image/absolutvodkalarsolssonsmith.jpg" alt />
            </a>
            <div class="index_stn_secret_txt">
              <h3>Discover Secret</h3>
              <p>We created with a few close friends in the winter of 1879, constantly looking for people who love vodka to join and explore the world of vodka.</p>
            </div>
          </div>
          <div class="index_stn_secret_item" data-aos="fade-up" data-aos-duration="2500">
            <a href="oursecret.html">
              <img src="../assets/image/160127_em_absolutcraft.jpg" alt />
            </a>
            <div class="index_stn_secret_txt">
              <h3>Learn The Story</h3>
              <p>We created with a few close friends in the winter of 1879, constantly looking for people who love vodka to join and explore the world of vodka.</p>
            </div>
          </div>
        </div>

        <div class="index_stn_box">
          <div class="index_stn_box_item_title">
            <h3>EVENTS</h3>
          </div>
        </div>
        <div class="index_stn_event">
          <div class="index_stn_event_web_img">
            <div class="index_stn_event_web_md" data-aos="zoom-in-right" data-aos-duration="3000">
              <a href="events.html">
                <img src="../assets/image/pexels-drinks1.jpg" alt />
              </a>
              <a href="events.html">
                <img src="../assets/image/Absolut-Midsommar-Weekender-0180.jpg" alt />
              </a>
            </div>
            <div class="index_stn_event_web_md" data-aos="fade-up" data-aos-duration="3000">
              <a href="events.html">
                <img src="../assets/image/cocktails-731898__340.jpg" alt />
              </a>
              <a href="events.html">
                <img src="../assets/image/absolut_midsummer_top_ny.jpg" alt />
              </a>
              <a href="events.html">
                <img src="../assets/image/absolut-midsommar-5_1000_800_50.jpg" alt />
              </a>
            </div>
            <div class="index_stn_event_web_md" data-aos="zoom-in-left" data-aos-duration="3000">
              <a href="events.html">
                <img src="../assets/image/party-3326032__340.jpg" alt />
              </a>
              <a href="events.html">
                <img src="../assets/image/0196_127_absolut_midsommer_6_24_17_5D_3178_5D.jpg" alt />
              </a>
            </div>
          </div>
          <div class="index_stn_event_mobile_img">
            <a href="events.html">
              <img src="../assets/image/mobile_midsommar.jpg" alt />
              <div>
                <h3>Mid-Summer</h3>
                <p>Once a year of summer activity, there are many kinds of entertainment waiting for you.</p>
              </div>
            </a>
          </div>
          <div class="index_stn_event_mobile_img">
            <a href="events.html">
              <img src="../assets/image/mobile_events.jpg" alt />
              <div>
                <h3>Free Your Soul</h3>
                <p>Enjoy each other's warmth and enjoy the days of the moment.</p>
              </div>
            </a>
          </div>
          <div class="index_stn_event_mobile_img">
            <a href="events.html">
              <img src="../assets/image/mobile_cheers.jpg" alt />
              <div>
                <h3>Other Events</h3>
                <p>Here, you can find more active info.</p>
              </div>
            </a>
          </div>
          <div class="index_stn_event_web_map">
            <div class="index_stn_event_web_galaxy">
              <img src="../assets/image/galaxy_web_map.png" alt />
              <div class="index_stn_event_web_wd">
                <div>
                  <h2>DETOUR</h2>
                </div>
                <div>
                  <p>X</p>
                </div>
                <div>
                  <h2>ABSOLUT</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="index_stn_event_mobile_map">
            <div class="index_stn_event_mobile_galaxy">
              <img src="../assets/image/galaxy-2150186__340.png" alt />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";

export default {
  data() {
    return {
      imgDropBottle: require("../assets/image/absolutdrop.png"),
      imgRainBottle: require("../assets/image/absolutrainbow.png"),
      imgExlyBottle: require("../assets/image/absolutexly-11.png"),
      imgVokaBottle: require("../assets/image/absolutvodka.png"),
      itemShow: 1,
      imgBanner01: require("../assets/image/productbg.png"),
      imgBanner02: require("../assets/image/product1.jpg"),
      imgBanner03: require("../assets/image/productbg3.jpg"),
      imgBanner04: require("../assets/image/product4.png"),
      imgBanner05: require("../assets/image/productbg5.jpg"),
      imgBanner06: require("../assets/image/productbg6.jpg")
    };
  },
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  methods: {
    // product bottle change
    clickItem(index) {
      this.itemShow = index;
    }
  }
};
</script>

<style lang="scss" scopedSlots>
@import "../assets/scss/home.scss";
</style>
