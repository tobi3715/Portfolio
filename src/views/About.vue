<template>
<v-app>
  <body>
      <div class="forside-content">
        <router-link to="/">
          <div id="tilbage"></div>
        </router-link>
        <div class="container_top">
          <router-link to="/Meremig" class="btn">MERE OM MIG</router-link>
          <router-link to="/Projekter" class="btn">MINE PROJEKTER</router-link>
        </div>
        <div id="container_bot">
          <router-link to="/Erfaringer" class="btn">ERFARINGER</router-link>
        </div>
      </div>
  </body>
</v-app>
</template>

<style scoped>
body {
  background-image: url('../assets/baggrund.jpg');
  background-size: cover;
}

#tilbage {
  clip-path: polygon(
    40% 0%,
    40% 20%,
    100% 20%,
    100% 80%,
    40% 80%,
    40% 100%,
    0% 50%);
  background-color: #74e0fd;
  border: 1px solid #74e0fd;
  height: 50px;
  width: 65px;
  transition: all 0.25s ease-in-out;
  margin: -76px 0 0 -532.5px;
  z-index: 1;
}

#tilbage:hover {
  transform: scale(1.2);
}

.forside-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  height: 100vh;
}

.forside-content .btn {
  box-sizing: border-box;
  font-size: 16px;
  padding: 32px 32px;
  transition: color 1s, background 1s;
}

.forside-content .btn:hover {
  background: #74e0fd;
  color: #fff;
}

.container_top {
  width: 600px;
  height: 250px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin-top: -70px;
}

.container_bot {
  width: 300px;
  height: 300px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}

.btn {
  color: #74e0fd;
  text-decoration: none;
  padding: 16px 32px;
  border: 1px solid #74e0fd;
  border-radius: 50%;
  font-weight: normal;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
#tilbage {
  display: none;
}

.forside-content {
  height: 78vh;
} 

.forside-content .btn {
  font-size: 16px;
}

.container_top {
  width: 350px;
  height: 175px;
 
  }
  .btn {
  width: 150px;
  height: 150px;
  }

.btn a {

}

}

</style>
