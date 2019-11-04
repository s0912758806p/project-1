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
        <a href="#">
          <div id="slide" @click="bannerCheck">
            <img src="../assets/image/productbg.png" alt />
            <img src="../assets/image/product1.jpg" alt />
            <img src="../assets/image/productbg3.jpg" alt />
            <img src="../assets/image/product4.png" alt />
            <img src="../assets/image/productbg5.jpg" alt />
            <img src="../assets/image/productbg6.jpg" alt />
          </div>
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
          <div class="index_stn_bottle_bg" data-aos="fade-up" data-aos-duration="2500">
            <div id="drop_bottle" class="index_stn_bottle_product_drop">
              <a href="product.html">
                <img src="../assets/image/absolutdrop.png" alt />
              </a>
            </div>
            <div id="rainbow_bottle" class="index_stn_bottle_product_exly">
              <a href="product.html">
                <img src="../assets/image/absolutrainbow.png" alt />
              </a>
            </div>
            <div id="exly_bottle" class="index_stn_bottle_product_exly">
              <a href="product.html">
                <img src="../assets/image/absolutexly-11.png" alt />
              </a>
            </div>
            <div id="vodka_bottle" class="index_stn_bottle_product_exly">
              <a href="product.html">
                <img src="../assets/image/absolutvodka.png" alt />
              </a>
            </div>
            <div id="drop_txt" class="index_stn_bottle_txt">
              <div class="index_stn_bottle_h2">
                <h2>A Drop of Love</h2>
              </div>
              <div class="index_stn_bottle_h3">
                <video src="../assets/video/AbsolutDrop.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div id="rainbow_txt" class="index_stn_bottle_txt">
              <div class="index_stn_bottle_h2">
                <h2>Dream to only</h2>
              </div>
              <div id="rainbow_h3" class="index_stn_bottle_h3">
                <video src="../assets/video/Absolut Pride.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div id="exly_txt" class="index_stn_bottle_txt">
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
            <div id="vodka_txt" class="index_stn_bottle_txt">
              <div class="index_stn_bottle_h2">
                <h2>Absolutely the classics.</h2>
              </div>
              <div id="vodka_h3" class="index_stn_bottle_h3">
                <video src="../assets/video/AbsolutVodka.mp4" muted controls></video>
                <h3>TURN HATE INTO LOVE</h3>
                <p>Love is the most powerful force in the world. And today the world needs it more than ever. That is why our new limited edition bottle is all about turning hate into love. We call it Absolut Drop, and it will stand as a symbol for love and peace – and good spirits.</p>
              </div>
            </div>
            <div id="index_bottle_btn" @click="clickItem">
              <div id="index_bottle_btn_box_drop"></div>
              <div id="index_bottle_btn_box_rainbow"></div>
              <div id="index_bottle_btn_box_exly"></div>
              <div id="index_bottle_btn_box_vodka"></div>
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
export default {
  props: {
    aos: Function
  },
  data() {
    return {};
  },
  methods: {
    clickItem() {
      // product bottle change
      var btn_drop = document.getElementById("index_bottle_btn_box_drop");
      var btn_rainbow = document.getElementById("index_bottle_btn_box_rainbow");
      var btn_exly = document.getElementById("index_bottle_btn_box_exly");
      var btn_vodka = document.getElementById("index_bottle_btn_box_vodka");

      // Drop bottle

      btn_drop.onclick = function() {
        document.getElementById("drop_bottle").style.opacity = "1";
        document.getElementById("exly_bottle").style.opacity = "0";
        document.getElementById("rainbow_bottle").style.opacity = "0";
        document.getElementById("vodka_bottle").style.opacity = "0";

        // txt
        document.getElementById("drop_txt").style.display = "flex";
        document.getElementById("rainbow_txt").style.display = "none";
        document.getElementById("exly_txt").style.display = "none";
        document.getElementById("vodka_txt").style.display = "none";
      };

      // Rainbow bottle

      btn_rainbow.onclick = function() {
        document.getElementById("drop_bottle").style.opacity = "0";
        document.getElementById("rainbow_bottle").style.opacity = "1";
        document.getElementById("exly_bottle").style.opacity = "0";
        document.getElementById("vodka_bottle").style.opacity = "0";

        // txt
        document.getElementById("drop_txt").style.display = "none";
        document.getElementById("rainbow_txt").style.display = "flex";
        document.getElementById("exly_txt").style.display = "none";
        document.getElementById("vodka_txt").style.display = "none";
      };

      // Exly bottle

      btn_exly.onclick = function() {
        document.getElementById("drop_bottle").style.opacity = "0";
        document.getElementById("rainbow_bottle").style.opacity = "0";
        document.getElementById("exly_bottle").style.opacity = "1";
        document.getElementById("vodka_bottle").style.opacity = "0";

        // txt
        document.getElementById("drop_txt").style.display = "none";
        document.getElementById("rainbow_txt").style.display = "none";
        document.getElementById("exly_txt").style.display = "flex";
        document.getElementById("vodka_txt").style.display = "none";
      };

      // Vodka bottle

      btn_vodka.onclick = function() {
        document.getElementById("drop_bottle").style.opacity = "0";
        document.getElementById("rainbow_bottle").style.opacity = "0";
        document.getElementById("exly_bottle").style.opacity = "0";
        document.getElementById("vodka_bottle").style.opacity = "1";

        // txt
        document.getElementById("drop_txt").style.display = "none";
        document.getElementById("rainbow_txt").style.display = "none";
        document.getElementById("exly_txt").style.display = "none";
        document.getElementById("vodka_txt").style.display = "flex";
      };
    },
    bannerCheck() {
      // index banner loop

      var counter = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide = document.querySelector("#slide"),
        items = slide.querySelectorAll("img"), // 抓取所有 img
        itemsCount = items.length, // 圖片總數
        prevBtn = document.createElement("a"), // 上一張按鈕
        nextBtn = document.createElement("a"), // 下一張按鈕
        timer = 4000, // 4 秒換圖
        interval = window.setInterval(showNext, timer); // 設定循環

      prevBtn.classList.add("prev"); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
      nextBtn.classList.add("next"); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
      slide.appendChild(prevBtn); // 將按鈕加到 #slide 裡
      slide.appendChild(nextBtn);

      // 帶入目前要顯示第幾張圖
      var showCurrent = function() {
        var itemToShow = Math.abs(counter % itemsCount); // 取餘數才能無限循環
        [].forEach.call(items, function(el) {
          el.classList.remove("show"); // 將所有 img 的 class="show" 移除
        });
        items[itemToShow].classList.add("show"); // 將要顯示的 img 加入 class="show"
      };

      function showNext() {
        counter++; // 將 counter+1 指定下一張圖
        showCurrent();
      }

      function showPrev() {
        counter--; // 將 counter－1 指定上一張圖
        showCurrent();
      }

      // 滑鼠移到 #slider 上方時，停止循環計時
      slide.addEventListener("mouseover", function() {
        interval = clearInterval(interval);
      });

      // 滑鼠離開 #slider 時，重新開始循環計時
      slide.addEventListener("mouseout", function() {
        interval = window.setInterval(showNext, timer);
      });

      // 綁定點擊上一張，下一張按鈕的事件
      nextBtn.addEventListener("click", showNext, false);
      prevBtn.addEventListener("click", showPrev, false);

      // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
      items[0].classList.add("show");
    }
  }
};
</script>

<style lang="">
/* 　↓↓↓↓↓　　Mobile-Style　↓↓↓↓↓　*/

/* ----- Mobile INDEX START LINE ----- */

/* STN */
/* STN */
/* STN */
section {
  background-color: #070710;
  font-size: 12px;
}

/* VD */
.index_stn_ad {
  display: none;
}

/* banner css */
#slide {
  width: 100%;
  position: relative;
  max-width: 1200px;
}

#slide img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 0.8s;
}
#slide img:first-child {
  position: static;
}
#slide img.show {
  opacity: 1;
  visibility: visible;
}
#slide .prev,
#slide .next {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.4s;
  background-color: rgba(0, 0, 0, 0.12);
  padding: 14px 12px;
}
#slide .prev:hover,
#slide .next:hover {
  background-color: rgba(0, 0, 0, 0.24);
}
#slide .prev:after,
#slide .next:after {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}
#slide .prev {
  left: 0;
}
#slide .prev:after {
  transform: rotate(-135deg);
  margin-left: 4px;
}
#slide .next {
  right: 0;
}
#slide .next:after {
  transform: rotate(45deg);
  margin-right: 4px;
}

/* 1 */
.index_stn_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
}

.index_stn_box_item_title {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  position: relative;
}

.index_stn_box_item_title > h3 {
  padding: 20px 40px;
  font-size: 20px;
  vertical-align: middle;
  color: var(--primary-color);
}

.index_stn_box_h2 {
  width: 100%;
  position: relative;
  z-index: 0;
  background-color: var(--overlay-color);
}

.index_stn_box_h2 > div {
  text-align: center;
}

.index_stn_box_h2 > div > h2 {
  font-size: 25px;
  color: #ddd;
}

.index_stn_bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.index_stn_bar_item {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 2px;
  padding: 15px;
}

.index_stn_bar_item img {
  width: 100%;
  height: 100%;
}

.index_stn_bar_item h3 {
  font-size: 20px;
  background-color: #012875;
  color: var(--primary-color);
  padding-left: 10px;
  padding-right: 10px;
}

.index_stn_bar_item p {
  color: #ddd;
  padding-left: 10px;
  padding-right: 10px;
}

.index_stn_bottle {
  display: none;
}

/* 2 */

.index_stn_secret {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}
.index_stn_secret_item {
  width: 100%;
  padding: 15px;
  position: relative;
  margin-bottom: 20px;
}

.index_stn_secret_item img {
  width: 100%;
  height: 100%;
}

.index_stn_secret_txt {
  width: 90%;
  font-size: 12px;
  position: absolute;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8) 60%,
    rgba(159, 134, 128, 0.2) 150%
  );
  bottom: 5px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
}

.index_stn_secret_txt h3 {
  font-size: 18px;
  color: #616161;
}

/* 3 */

.index_stn_event {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.index_stn_event_mobile_img {
  width: 100%;
  padding: 15px;
}

.index_stn_event_mobile_img a {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
}

.index_stn_event_mobile_img img {
  width: 100%;
  height: 100%;
}

.index_stn_event_mobile_img div {
  position: absolute;
  color: #fff;
  margin-left: 20px;
}

.index_stn_event_mobile_img h3 {
  font-size: 18px;
}

.index_stn_event_mobile_img p {
  color: #ddd;
}

.index_stn_event_web_img {
  display: none;
}

.index_stn_event_mobile_map {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.index_stn_event_mobile_galaxy img {
  width: 100%;
}

.index_stn_event_web_wd {
  display: none;
}

.index_stn_event_web_map {
  display: none;
}

/* ----- Mobile INDEX END LINE ----- */

/* 　↓↓↓↓↓　　Web-Style　↓↓↓↓↓　*/

/* ----- Web INDEX START LINE ----- */

@media screen and (min-width: 768px) {
  /* STN */
  section {
    background: url("../assets/image/background01.png") no-repeat 50% 50%;
    background-size: cover;
    background-color: #070710;
    color: #e1e1e1;
  }

  @font-face {
    font-family: "blacksword";
    src: url("../assets/image/font/blacksword/Blacksword.otf");
  }

  .index_stn_box_item_title > h3 {
    color: #e1e1e1;
  }

  .index_stn_ad {
    width: 100%;
    height: 100%;
    max-height: 800px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }

  .index_stn_ad_vd {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
  }

  .index_stn_ad_vd > video {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #slide {
    display: none;
  }

  .index_stn_box {
    padding-top: 60px;
  }

  .index_stn_ad_vd {
    z-index: 1;
  }
  .index_stn_box_h2 {
    width: 100%;
    height: 100px;
    position: relative;
    z-index: 1;
    bottom: 85px;
    background-color: var(--overlay-color);
  }
  .index_stn_box_h2 > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .index_stn_box_h2 > div > h2 {
    font-size: 35px;
  }
  /* web txt title_h2:35px title_h3:28px h2:25px h3:18px p:16px */
  /* 1 */
  .index_stn_box_item_title h3 {
    font-size: 28px;
    color: var(--primary-color);
  }

  .index_stn_bar {
    /* background: url('image/url03.png') no-repeat 50% 50%;
        background-size: 50%; */
    width: 100%;
  }

  .index_stn_bar_item {
    display: flex;
    width: 100%;
  }

  .index_stn_bar_item div {
    width: 50%;
    margin-left: 5%;
    color: #ddd;
  }

  .index_stn_bar_item h3 {
    font-size: 22px;
    color: var(--primary-color);
  }

  .index_stn_bar_item p {
    font-size: 19px;
  }

  .index_stn_bottle {
    /* background: url('image/url03.png') no-repeat 50% 50%;
        background-size: cover; */
    /* background-attachment: fixed; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    margin-top: 60px;
  }

  .index_stn_bottle_bg {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    position: relative;
  }

  .index_stn_bottle_product_drop {
    width: 25%;
    padding: 15px;
    opacity: 1;
  }

  .index_stn_bottle_product_drop img {
    width: 100%;
    height: 100%;
  }

  .index_stn_bottle_product_rainbow {
    position: absolute;
    opacity: 0;
    left: 0;
    width: 25%;
    padding: 15px;
    transition: 0.5s ease;
  }

  .index_stn_bottle_product_raimbow img {
    width: 100%;
    height: 100%;
  }

  .index_stn_bottle_product_exly {
    position: absolute;
    opacity: 0;
    left: 0;
    width: 25%;
    padding: 15px;
    transition: 0.5s ease;
  }

  .index_stn_bottle_product_exly img {
    width: 100%;
    height: 100%;
  }

  .index_stn_bottle_product_vodka {
    position: absolute;
    opacity: 0;
    left: 0;
    width: 25%;
    padding: 15px;
    transition: 0.5s ease;
  }

  .index_stn_bottle_product_vodka img {
    width: 100%;
    height: 100%;
  }

  /* color hex btn */
  #index_bottle_btn {
    width: 7%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  #index_bottle_btn_box_drop {
    cursor: pointer;
    background: linear-gradient(
      -45deg,
      rgba(69, 126, 233, 0.9) 25%,
      rgba(0, 45, 252, 1) 150%
    );
    width: 36px;
    height: 36px;
    border-radius: 25%;
    margin-bottom: 10px;
  }

  #index_bottle_btn_box_rainbow {
    cursor: pointer;
    background: linear-gradient(-45deg, #f99, #ff9, #9f9);
    width: 36px;
    height: 36px;
    border-radius: 25%;
    margin-bottom: 10px;
  }

  #index_bottle_btn_box_exly {
    cursor: pointer;
    background: linear-gradient(-45deg, #e1aa8b, #a17a64);
    width: 36px;
    height: 36px;
    border-radius: 25%;
    margin-bottom: 10px;
  }

  #index_bottle_btn_box_vodka {
    cursor: pointer;
    background: linear-gradient(-45deg, #c0c0c0, #9a9a9a);
    color: #012875;
    width: 36px;
    height: 36px;
    border-radius: 25%;
    margin-bottom: 10px;
  }

  .index_stn_bottle_txt {
    width: 60%;
    max-width: 1200px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transition: 1s;
    width: 60%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transition: 1s;
  }

  .index_stn_bottle_h2 {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
  }

  .index_stn_bottle_h2 h2 {
    font-size: 35px;
    font-family: "blacksword";
    color: var(--primary-color);
  }

  .index_stn_bottle_h3 {
    padding: 15px;
  }

  .index_stn_bottle_h3 h3 {
    background-color: #012875;
    font-size: 22px;
    color: var(--primary-color);
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
  }

  .index_stn_bottle_h3 p {
    font-size: 19px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    color: #ddd;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .index_stn_bottle_h3 video {
    width: 100%;
    height: 100%;
  }

  #rainbow_txt {
    /* position: absolute;
        right:11.5%; */
    width: 60%;
    max-width: 1200px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transition: 1s;
  }

  #rainbow_h3 h3 {
    background: linear-gradient(-45deg, #f99, #ff9, #9f9);
    color: #616161;
  }

  #exly_txt {
    /* position: absolute;
        right: 11.5%; */
    width: 60%;
    max-width: 1200px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transition: 1s;
  }

  #exly_h3 h3 {
    background: linear-gradient(-45deg, #e1aa8b, #a17a64);
    color: #d1d1d1;
  }

  #vodka_txt {
    /* position: absolute;
        right: 11.5%; */
    width: 60%;
    max-width: 1200px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    transition: 1s;
  }

  #vodka_h3 h3 {
    background: linear-gradient(-45deg, #c0c0c0, #9a9a9a);
    color: #012875;
  }

  /* 2 */
  .index_stn_secret {
    /* background: url('image/url02.png') no-repeat 50% 50%;
        background-size: 100%; */
    /* background-attachment: fixed; */
    width: 100%;
    flex-flow: column;
  }

  .index_stn_secret_item {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .index_stn_secret_item img {
    width: 100%;
    height: 100%;
  }

  .index_stn_secret_item:nth-child(even) a {
    order: 1;
  }

  .index_stn_secret_txt {
    position: static;
    width: 100%;
    text-align: left;
    justify-content: center;
    align-items: center;
    background: none;
    padding: 20px;
    margin: 15px;
  }

  .index_stn_secret_txt h3 {
    width: 100%;
    background-color: #012875;
    font-size: 22px;
    color: var(--primary-color);
    padding-left: 10px;
    padding-right: 10px;
    top: 50%;
  }
  .index_stn_secret_txt p {
    font-size: 19px;
    color: #ddd;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* 3 */
  .index_stn_event_mobile_img {
    display: none;
  }

  .index_stn_events {
    display: none;
  }

  .index_stn_event {
    width: 100%;
    padding: 15px;
  }

  .index_stn_event_web_img {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
  }

  .index_stn_event_web_md {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-flow: column;
    width: 33.333333%;
    margin: 5px;
  }
  .index_stn_event_web_md > a {
    margin-bottom: 10px;
    transition: 0.5s;
  }

  .index_stn_event_web_md img {
    width: 100%;
    height: 100%;
  }

  .index_stn_event_web_md a:hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  .index_stn_event_web_map {
    width: 100%;
    margin-top: 5px;
    display: flex;
  }

  .index_stn_event_web_galaxy {
    background: url("../assets/image/star2.jpg") no-repeat 50% 50%;
    background-size: 100% 100%;
    background-attachment: fixed;
    width: 100%;
    /* max-height: 660px; */
    /* padding: 10px; */
    position: relative;
  }

  .index_stn_event_web_map img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .index_stn_event_web_wd {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .index_stn_event_web_wd div {
    padding: 10px;
  }

  .index_stn_event_web_wd h2 {
    font-size: 35px;
  }

  .index_stn_event_web_wd p {
    color: #f00;
    font-size: 28px;
  }

  .index_stn_event_mobile_map {
    display: none;
  }
}
/* ----- Web INDEX END LINE ----- */
</style>
