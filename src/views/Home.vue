<template>
<v-app>
  <body>
    <!-- Forside -->
    <header id="forside">
      <div class="forside-content">
        <div class="container">
          <h1>
            VELKOMMEN TIL MIT PORTFOLIO
            <br />
            <b></b>
          </h1>
          <h2>
            Mit navn er
            <b>Tobias Søllingvraa</b> og
            <br />jeg studerer
            <b>Multimediedesign</b>
            <br />
            <br />
            <br />
          </h2>
          <span class="text-primary">
            <h2>
              Klik herunder for at se mere
              <br />
              <br />
            </h2>
          </span>
          <router-link to="/About" class="btn">KLIK MIG</router-link>
        </div>
      </div>
    </header>
  </body>
</v-app>
</template>

<style scoped>
body {
  background-image: url("../assets/baggrund.jpg");
  background-size: cover;
}

/*Forside content */

.forside-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 81px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  height: 90vh;
}

.forside-content h1 {
  font-size: 36px;
  margin-bottom: 24px;
}

.forside-content h2 {
  font-size: 22px;
  margin-bottom: 24px;
  font-weight: normal;
}

.forside-content .btn {
  font-size: 14px;
  padding: 14px 150px;
  transition: color 1s, background 1s;
}

.forside-content .btn:hover {
  background: #74e0fd;
  color: #fff;
}
.btn {
  color: #48a9c5;
  text-decoration: none;
  display: inline-block;
  padding: 16px 32px;
  border: 1px solid #74e0fd;
  border-radius: 50px;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .forside-content {
    height: 78vh;
  }

  .forside-content h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .forside-content h2 {
    font-size: 19px;
    margin-bottom: 24px;
    font-weight: normal;
  }

  .forside-content .btn {
    font-size: 16px;
    padding: 25px 48px;
    transition: color 1s, background 1s;
  }
  .btn {
    color: #74e0fd;
    text-decoration: none;
    display: inline-block;
    padding: 16px 32px;
    border: 1px solid #74e0fd;
    border-radius: 50px;
    font-weight: bold;
    height: 75px;
    width: 300px;
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
