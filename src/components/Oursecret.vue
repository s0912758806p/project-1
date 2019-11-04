<template>
  <div>
    <section>
      <div class="secret_title">
        <div class="secret_title_img">
          <img src="../assets/image/oursecretbg.png" alt />
          <div class="secret_title_txt">
            <h2>OUR SECRET</h2>
            <p>Since 1879</p>
          </div>
        </div>
      </div>

      <div class="secret_h3">
        <div>
          <h3>OUR SECRET</h3>
        </div>
      </div>

      <div class="secret_box">
        <div class="secret_box_item" data-aos="fade-up">
          <div class="secret_box_item_img">
            <img src="../assets/image/ABSOLUTFlavoursredesign.jpg" alt />
          </div>
          <div class="secret_box_item_txt">
            <h3>CO2 neutral distillation</h3>
            <p>By continuously improving and keeping focus on how we can be more sustainable we have made our distillery one of the most energy-efficient in the world. Today, we have CO2 neutral distillation; a fact we’re proud of.</p>
          </div>
        </div>
        <div class="secret_box_item" data-aos="fade-up">
          <div class="secret_box_item_img">
            <img src="../assets/image/ABSOLUTFlavoursrangebackbar.jpg" alt />
          </div>
          <div class="secret_box_item_txt">
            <h3>One Superb Vodka</h3>
            <p>Crafting the world’s finest vodka is a holistic journey borne from our Swedish tradition in vodka making, commitment to our source and community. Having One Source and One Community means we respectfully control the entire process from seed to bottle.</p>
          </div>
        </div>
      </div>

      <div class="secret_box">
        <div class="secret_box_item" data-aos="fade-up">
          <div class="secret_box_item_img">
            <img src="../assets/image/Vodkaboot-1617x1080.jpg" alt />
          </div>
          <div class="secret_box_item_txt">
            <h3>Glass bottle</h3>
            <p>And just like the other ingredients, even the glass bottles are made in our community, at a nearby glasswork in Limmared. Arriving just in time for them being bottled up. The bottles today have more than 40% recycled clear glass.</p>
          </div>
        </div>
        <div class="secret_box_item" data-aos="fade-up">
          <div class="secret_box_item_img">
            <img src="../assets/image/secret_craft01.jpg" alt />
          </div>
          <div class="secret_box_item_txt">
            <h3>Intricate Processes</h3>
            <p>The distillery and production process built and managed by our own talented people is what influences the overall taste and flavor of our vodka.</p>
          </div>
        </div>
      </div>
      <a href="index.html">
        <div class="secret_bg">
          <div class="secret_bg_img">
            <img src="../assets/image/Studio-Offset-graphic.jpg" alt />
          </div>
          <div class="secret_bg_txt">
            <p>DISCOVER</p>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
/* 　↓↓↓↓↓　　Mobile-Style　↓↓↓↓↓　*/

/* ----- Mobile SECRET START LINE ----- */

.secret_title {
  width: 100%;
  display: flex;
}

.secret_title_img {
  width: 100%;
  background-color: #070710;
  position: relative;
}

.secret_title_img img {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.secret_title_txt {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.secret_title_txt h2 {
  font-size: 28px;
  color: #e1e1e1;
}

.secret_title_txt p {
  font-size: 13px;
  color: #ddd;
}

.secret_box {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 30px;
}

.secret_box_item {
  width: 100%;
  padding: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.secret_box_item_img {
  width: 100%;
  max-height: 98%;
  background-color: #070710;
}

.secret_box_item_img img {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.secret_box_item_txt {
  width: 70%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8) 60%,
    rgba(159, 134, 128, 0.2) 150%
  );
  position: absolute;
  right: 0;
  /* left: 0; */
  bottom: 0;
  color: #616161;
  padding: 15px;
}

.secret_box_item_txt p {
  color: #717171;
}

.secret_bg {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: #090910;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.secret_bg_img {
  width: 100%;
  height: 100%;
}

.secret_bg_img img {
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.secret_bg_txt {
  width: 50%;
  text-align: center;
  position: absolute;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.secret_bg_txt p {
  font-size: 20px;
}

.secret_h3 {
  display: none;
}

/* ----- Mobile SECRET END LINE ----- */

/* ----- Web SECRET START LINE ----- */
@media screen and (min-width: 768px) {
  .secret_title {
    background: url("../assets/image/secret_img2.jpg") no-repeat 50% 50%;
    background-size: 100%;
    /* background-attachment: fixed; */
    width: 100%;
    height: 800px;
  }
  .secret_title_img {
    display: none;
  }

  .secret_h3 {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    padding-top: 40px;
  }

  .secret_h3 h3 {
    color: var(--primary-color);
    font-size: 28px;
  }

  .secret_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  .secret_box_item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .secret_box_item_img {
    width: 50%;
  }

  .secret_box_item_img img {
    opacity: 1;
  }

  .secret_box_item_txt {
    width: 40%;
    height: 300px;
    background: none;
    border: 2px solid #576884;
    position: static;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .secret_box_item_txt h3 {
    background-color: #012875;
    color: #e1e1e1;
    font-size: 22px;
    padding-right: 10px;
    padding-left: 10px;
  }

  .secret_box_item_txt p {
    color: #ddd;
    font-size: 19px;
    padding-right: 10px;
    padding-left: 10px;
  }

  .secret_box_item:nth-child(even) .secret_box_item_img {
    order: 1;
  }

  .secret_bg_txt {
    width: 40%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  .secret_bg_txt p {
    font-size: 25px;
  }

  .secret_bg_txt:hover {
    color: #ddd;
    text-shadow: 1px 1px 1px #616161;
    background-color: var(--primary-color);
    transition: 0.5s;
  }
}

/* ----- Web SECRET END LINE ----- */
</style>
