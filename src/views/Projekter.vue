<template>
<v-app>
  <body>
    <section id="heading">
      <router-link to="/About">
        <div id="tilbage"></div>
      </router-link>
      <h1 class="about-heading">
        Mine
        <span class="text-primary">projekter</span>
      </h1>
    </section>
    <section id="content">
      <div class="projekter">
        <h2>
          Business
          <span class="text-primary">Card</span>
        </h2>
        <a href="https://docdro.id/C2kzdEN" target="_blank" class="btn">KLIK FOR AT SE MERE</a>
      </div>
      <div class="projekter">
        <h2>
          Print
          <span class="text-primary">CV</span>
        </h2>
        <a href="https://docdro.id/aMYlPQj" target="_blank" class="btn">KLIK FOR AT SE MERE</a>
      </div>
      <div class="projekter">
        <h2>
          Video
          <span class="text-primary">CV</span>
        </h2>
        <a
          href="https://www.youtube.com/watch?v=hjxC2Lmuyj8&feature=emb_title"
          target="_blank"
          class="btn"
        >KLIK FOR AT SE MERE</a>
      </div>
      <div class="projekter">
        <h2>
          UX & CC
          <span class="text-primary">Projekt</span>
        </h2>
        <a
          href="https://xd.adobe.com/view/c9ac8593-f606-41e2-4aff-9c3d77c6384a-bf9d/"
          target="_blank"
          class="btn"
        >KLIK FOR AT SE MERE</a>
      </div>
      <div class="projekter">
        <h2>
          Første Semester Eksamen
          <br />
          <span class="text-primary">Rapport</span>
        </h2>
        <a href="https://docdro.id/y6KBapj" target="_blank" class="btn">KLIK FOR AT SE MERE</a>
      </div>
      <div class="projekter">
        <h2>
          Første Semester Eksamen
          <br />
          <span class="text-primary">Produkt</span>
        </h2>
        <a href="https://rumaffald-ac4b6.web.app/" target="_blank" class="btn">KLIK FOR AT SE MERE</a>
      </div>
    </section>
  </body>
</v-app>
</template>

<style scoped>
#tilbage {
  clip-path: polygon(
    40% 0%,
    40% 20%,
    100% 20%,
    100% 80%,
    40% 80%,
    40% 100%,
    0% 50%
  );
  background-color: #74e0fd;
  border: 1px solid #74e0fd;
  height: 50px;
  width: 65px;
  transition: all 0.25s ease-in-out;
  margin: 0 0 0 100px;
  z-index: 1;
}

#tilbage:hover {
  transform: scale(1.4);
}

#heading {
  padding: 48px 0;
  width: 100%;
  height: 50px;
  margin-bottom: 100px;
}

#heading h1 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 48px;
  color: #fff;
}

#heading p.start {
  margin-bottom: 16px;
  color: #fff;
  font-size: 20px;
}

#content {
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
  margin-bottom: 48px;
}

#content h2 {
  text-align: left;
  font-size: 30px;
  color: #fff;
}

#content p.start {
  margin-bottom: 16px;
  color: #fff;
  font-size: 20px;
}

.projekter {
  height: 225px;
  width: 45vw;
  margin-top: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
  display: flex;
  padding: 11px;
  box-sizing: border-box;
  border: solid #74e0fd;
  border-radius: 24px;
  box-shadow: black 16px 16px 16px;
  transition: 1s;
}

.projekter:hover {
  transform: scale(1.02);
  background: #48a9c5;
}

.btn {
  color: #fff;
  text-decoration: none;
  padding: 16px 32px;
  border: 3px solid #84329b;
  border-radius: 50%;
  font-weight: normal;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 1s, background 1s;
  font-size: 12px;
  margin-top: 20px;
}

.btn:hover {
  background: #84329b;
  color: #fff;
}

.cirkel {
  border-radius: 50%;
  border: solid #74e0fd;
  height: 250px;
  width: 250px;
}
/*
Media rules start */
@media only screen and (max-width: 600px) {
  #tilbage {
    display: none;
  }

  .projekter h2 {
    text-align: center;
    font-size: 20px !important;
    margin-bottom: 48px;
    color: #fff;
  }

  .projekter {
    min-width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    max-width: 125px;
    max-height: 125px;
    font-size: 13px;
    margin-top: 30px;
  }
}
</style>
