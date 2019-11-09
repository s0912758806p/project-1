<template>
  <div>
    <header>
      <nav class="hd_box" id="hd_web_navbar">
        <div class="hd_logo">
          <router-link to="/home">
            <img src="../assets/image/LOGO.png" alt="hd_logo" />
          </router-link>
          <h1>DETOUR</h1>
        </div>
        <div class="hd_wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger">
            <div></div>
          </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <router-link to="/product">PRODUCT</router-link>
                  </li>
                  <li>
                    <router-link to="/oursecret">OUR SECRET</router-link>
                  </li>
                  <li>
                    <router-link to="/awards">AWARDS</router-link>
                  </li>
                  <li>
                    <router-link to="/events">EVENTS</router-link>
                  </li>
                  <li>
                    <router-link to="/about">ABOUT</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="hd_web_menu">
          <ul>
            <li>
              <router-link to="/product">PRODUCT</router-link>
            </li>
            <li>
              <router-link to="/oursecret">OUR SECRET</router-link>
            </li>
            <li>
              <router-link to="/awards">AWARDS</router-link>
            </li>
            <li>
              <router-link to="/events">EVENTS</router-link>
            </li>
            <li>
              <router-link to="/about">ABOUT</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopedSlots>
@import "../assets/scss/header.scss";
</style>
