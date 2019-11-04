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

<style lang="">
/* HD */
/* HD */
/* HD */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  height: 60px;
  background-color: var(--overlay-color);
  position: relative;
  z-index: 1;
  pointer-events: none;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--overlay-color);
}

.hd_web_menu > ul > li {
  display: none;
}

.hd_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hd_logo {
  width: 120px;
  margin-left: 10px;
  position: relative;
  pointer-events: visible;
}

.hd_logo img {
  vertical-align: middle;
  width: 100%;
}

.hd_logo > h1 {
  position: absolute;
  display: none;
}

.hd_wrap .toggler {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  pointer-events: visible;
}

.hd_wrap .hamburger {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hamburger line */
.hd_wrap .hamburger > div {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
}

/* Top and bottom lines */
.hd_wrap .hamburger > div::before,
.hd_wrap .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

/* Moves lines down */
.hd_wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler animate */
.hd_wrap .toggler:checked + .hamburger > div {
  transform: rotate(-135deg);
  background-color: var(--primary-color);
}

/* Turn lines into X */
.hd_wrap .toggler:checked + .hamburger > div::before,
.hd_wrap .toggler:checked + .hamburger > div::after {
  top: 0;
  transform: rotate(-90deg);
}

/* Rotate on hover when checked */
.hd_wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(-225deg);
}

/* Show menu */
.hd_wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.hd_wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}

.hd_wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease;
}

.hd_wrap .menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hd_wrap .menu > div {
  background-color: var(--overlay-color);
  border-radius: 50%;
  width: 300vw;
  height: 300vw;
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: all 0.4s ease;
}

.hd_wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hd_wrap .menu > div > div > ul > li {
  color: #e1e1e1;
  font-size: 35px;
  padding: 10px;
  margin-bottom: 5px;
  pointer-events: visible;
}

.hd_wrap .menu > div > div > ul > li > a {
  color: inherit;
  transition: color 0.4s ease;
}

@media screen and (min-width: 768px) {
  /* HD */
  header {
    height: 100px;
  }

  nav {
    z-index: 2;
  }

  #hd_web_navbar {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }

  .hd_logo {
    width: 200px;
    margin-left: 20px;
  }
  .hd_wrap {
    display: none;
  }

  .hd_web_menu > ul > li {
    font-size: 20px;
    margin: 8px;
    padding: 5px;
    display: inline-block;
    pointer-events: visible;
  }

  .hd_web_menu > ul > li > a {
    color: #e1e1e1;
    position: relative;
  }

  .hd_web_menu > ul > li > a::before {
    content: "";
    width: 0px;
    height: 3px;
    background: #00bcd4;
    position: absolute;
    top: 120%;
    left: 0;
    transition: 0.5s;
  }

  .hd_web_menu > ul > li > a::after {
    content: "";
    width: 0px;
    height: 3px;
    background: #f0f;
    position: absolute;
    top: 120%;
    right: 0;
    transition: 0.5s;
  }

  .hd_web_menu > ul > li:hover > a::before {
    width: 50%;
    transform: translateX(100%);
  }
  .hd_web_menu > ul > li:hover > a::after {
    width: 50%;
    transform: translateX(-100%);
  }
}
</style>
