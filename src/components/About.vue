<template>
  <div>
    <main>
      <section>
        <div class="about_title">
          <div class="about_title_bg">
            <img src="../assets/image/nonebg1.jpg" alt />
          </div>
        </div>

        <div class="about_h2">
          <h2>ABOUT US</h2>
        </div>

        <div class="about_box" data-aos="fade-up" data-aos-duration="1500">
          <div class="about_box_border"></div>
          <div class="about_box_img">
            <img src="../assets/image/detour.jpg" alt />
          </div>
          <div class="about_box_info">
            <h2>Store Manager</h2>
            <p>DETOUR is to promote and love the image of vodka website, in order to take materials, over the mountains, Wade, in order to obtain a clean source, get the purest inspiration, to extract the most perfect vodka, when the store chief through Sweden, by the vodka God summoned, sentimental. So create an image site, named after the word DETOUR, to commemorate that journey.</p>
          </div>
        </div>
        <div class="about_box" data-aos="fade-up" data-aos-duration="2000">
          <div class="about_box_item">
            <div class="about_box_none">
              <img src="../assets/image/maxresdefault.jpg" alt />
            </div>
            <div class="about_box_drinks">
              <img src="../assets/image/5030242.jpg" alt />
            </div>
            <div class="about_box_drinks">
              <img src="../assets/image/oferta_14960918831387_principal2.jpg" alt />
            </div>
            <div class="about_box_txt">
              <h3>Our Varieties</h3>
              <p>If Absolute Vodka is produced by the most professional distillers, it's only because of the land from which its ingredients come. Our spring water is pure. Our sun is mighty and nourishing. The volcanic soil of the Armenian Highland creates uniquely fruitful gardens where our unique local wheats, berries, and herbal remedies grow. These ingredients together make the perfect Vodka.</p>
            </div>
          </div>
        </div>
        <div class="about_box" data-aos="fade-up" data-aos-duration="2500">
          <div class="about_box_map">
            <div class="about_map">
              <img src="../assets/image/map_aa.png" alt />
            </div>
          </div>
          <div class="about_box_map">
            <div class="about_address">
              <h2>Address:</h2>
              <p>No. 300, Zhongda Road, Zhongli District, Taoyuan City, 320</p>
            </div>
            <div class="about_address">
              <h2>TelPhone:</h2>
              <p>03-425-7387</p>
            </div>
            <div class="about_address">
              <h2>Email:</h2>
              <p>DETOUR@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
/* 　↓↓↓↓↓　　Mobile-Style　↓↓↓↓↓　*/

/* ----- Mobile ABOUT START LINE ----- */
.about_title {
  width: 100%;
}
.about_title_bg {
  width: 100%;
  max-height: 800px;
  overflow: hidden;
}
.about_title_bg img {
  width: 100%;
  height: 100%;
}

.about_h2 {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
  display: flex;
  justify-content: center;
}

.about_h2 h2 {
  color: var(--primary-color);
  font-size: 20px;
}

.about_box {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}

.about_box_img {
  width: 100%;
}

.about_box_img img {
  width: 100%;
  height: 100%;
}

.about_box_info {
  width: 100%;
  padding-top: 10px;
}

.about_box_info h2 {
  padding-left: 10px;
  padding-right: 10px;
  background-color: #012875;
  color: #e1e1e1;
  font-size: 18px;
}
.about_box_info p {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  color: #ddd;
  font-size: 12px;
}

.about_box_item {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.about_box_drinks {
  width: 50%;
}
.about_box_drinks img {
  width: 100%;
  height: 100%;
}

.about_box_txt {
  width: 100%;
  padding-top: 10px;
}
.about_box_txt h3 {
  padding-left: 10px;
  padding-right: 10px;
  background-color: #012875;
  font-size: 18px;
  color: #e1e1e1;
}

.about_box_txt p {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  font-size: 12px;
  color: #ddd;
}

.about_box_map {
  width: 100%;
}

.about_map {
  width: 100%;
}

.about_map img {
  width: 100%;
  height: 100%;
}

.about_map {
  font-size: 28px;
  color: #e1e1e1;
}

.about_address {
  width: 100%;
  color: #ddd;
  padding-bottom: 20px;
}

.about_address h2 {
  background-color: #012875;
  color: #e1e1e1;
  padding-left: 10px;
  padding-right: 10px;
}

.about_address p {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

.about_box_border {
  display: none;
}

.about_box_none {
  display: none;
}

/* ----- Mobile ABOUT END LINE ----- */

/* ----- Web ABOUT START LINE ----- */

@media screen and (min-width: 768px) {
  .about_h2 {
    padding-top: 60px;
  }
  .about_h2 h2 {
    font-size: 28px;
  }

  .about_box {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 60px;
    position: relative;
  }

  .about_box_border {
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 3%;
    width: 420px;
    height: 650px;
    border: 2px solid var(--primary-color);
  }

  .about_box_img {
    width: 40%;
    z-index: 1;
  }

  .about_box_info {
    /* background: url('image/url03.png') no-repeat 50% 50%;
        background-size: cover; */
    width: 50%;
    padding: 20px;
  }

  .about_box_info h2 {
    font-size: 22px;
  }
  .about_box_info p {
    font-size: 19px;
  }

  .about_box_item {
    width: 100%;
  }
  .about_box_drinks {
    display: flex;
    width: 50%;
  }
  .about_box_txt {
    width: 50%;
    padding: 20px;
  }
  .about_box_txt h3 {
    font-size: 22px;
  }
  .about_box_txt p {
    font-size: 19px;
  }
  .about_box_none {
    display: flex;
    width: 50%;
  }
  .about_box_none img {
    width: 100%;
    height: 100%;
  }
  .about_address {
    padding: 20px;
  }
  .about_address h2 {
    font-size: 22px;
  }
  .about_address p {
    font-size: 19px;
  }
}

/* ----- Web ABOUT END LINE ----- */
</style>
