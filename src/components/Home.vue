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

<style lang="scss" scopedSlots>
@import "../assets/scss/home.scss";
</style>
