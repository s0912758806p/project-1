<template>
  <div>
    <footer>
      <div class="ft_box">
        <div class="ft_logo">
          <router-link to="/home">
            <img src="../assets/image/LOGO.png" alt />
          </router-link>
        </div>
        <div class="ft_nav">
          <ul>
            <li>
              <router-link to="/awards">PRESS</router-link>
            </li>
            <li>
              <router-link to="/about">CONTACT</router-link>
            </li>
            <li>
              <router-link to="/abiut">ABOUT</router-link>
            </li>
          </ul>
        </div>
        <div class="ft_icon">
          <ul>
            <li>
              <a href="#">
                <img src="../assets/image/icon-ig.png" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/image/icon-tw.png" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/image/icon-yt.png" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/image/icon-mp.png" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ft_box">
        <div class="ft_term">
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
          </ul>
          <ul>
            <li>Responsibility Statement</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div class="ft_copyright">
          <div>Copyright © 2019 DETOUR . Ownership</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
/* FT */
/* FT */
/* FT */

footer {
  width: 100%;
  height: auto;
  padding-top: 44px;
  padding-bottom: 98px;
  background-color: var(--overlay-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.ft_box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.ft_logo {
  width: 120px;
}

.ft_logo img {
  width: 100%;
}

.ft_nav {
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ft_nav > ul > li {
  margin-top: 20px;
  margin-bottom: 20px;
}

.ft_nav > ul > li > a {
  font-size: 15px;
  color: #fff;
}

.ft_icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.ft_icon > ul > li {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-left: 10px;
}

.ft_icon img {
  width: 100%;
}

.ft_term {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #e1e1e1;
}

.ft_term > ul > li {
  text-align: center;
  margin: 5px;
}

.ft_copyright {
  color: #e1e1e1;
  font-size: 12px;
  margin: 5px;
}

.ft_caveat {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 10%;
  background: #0a1024 url("../assets/image/mobliecravet.png") 50% 50% no-repeat;
  background-size: 100% auto;
  min-width: 60px;
  z-index: 9;
}

@media screen and (min-width: 768px) {
  /* FT */
  .ft_box {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
  }

  .ft_logo {
    width: 50%;
    max-width: 200px;
  }

  .ft_logo > img {
    width: 100%;
    vertical-align: middle;
  }

  .ft_nav {
    width: 40%;
  }

  .ft_nav > ul > li {
    text-align: center;
    display: inline-block;
    margin: 10px;
    padding-left: 20px;
  }

  .ft_icon {
    width: 25%;
  }

  .ft_term {
    width: 25%;
  }

  .ft_copyright {
    text-align: center;
    width: 25%;
  }

  /* CAVEAT */
  .ft_caveat {
    background: #000823 url("../assets/image/caveat.png") 50% 50% no-repeat;
    background-size: 100% auto;
  }
}
</style>
