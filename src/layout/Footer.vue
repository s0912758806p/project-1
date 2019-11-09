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

<style lang="scss" scopedSlots>
@import "../assets/scss/footer.scss";
</style>
