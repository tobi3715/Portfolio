<template>
  <v-app>
    <div id="app">
      <nav id="navbar">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/tobias-soellingvraa/" target="_blank">
              Linked
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/" id="forside">Forside</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#footer_container" class="scrollLink" id="kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
      <router-view />
      <footer>
        <div id="footer_container">
          <div id="footer_bottom">
            <div id="footer_box">
              <h3>Email</h3>
              <a href="mailto:soellingvraa52@gmail.com" target="_blank">soellingvraa52@gmail.com</a>
            </div>
            <div id="footer_box">
              <h3>LinkedIn</h3>
              <a
                name="linkedin"
                href="https://www.linkedin.com/in/tobias-soellingvraa/"
              >https://www.linkedin.com/in/tobias-soellingvraa/</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </v-app>
</template>

<style>
/* General styling background-image: url(./assets/design.png); */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

html {
  font-size: 15px;
  scroll-behavior: smooth;
}

body {
  line-height: 1.4;
  background-color: #1d252d;
}

.text-primary {
  color: #74e0fd;
}

/* Navbar */
#navbar {
  display: flex;
  justify-content: space-between;
  background: rgb(24, 24, 24);
  color: #fff;
  padding: 24px 128px;
  z-index: 1;
  border-radius: 3px solid #fff;
  border-bottom: 1px solid #74e0fd;
  height: 10vh;
  flex: 3;
}

#navbar ul {
  display: flex;
  align-items: center;
  list-style: none;
}

#navbar li a {
  text-decoration: none;
  color: #74e0fd;
  padding: 16px;
  font-size: 16px;
  margin: 0 8px;
  border-radius: 5px;
  transition: background-color 0.5s;
}

#navbar li #forside {
  font-weight: bold;
  font-size: 18px;
}

#navbar li a:hover {
  background-color: #74e0fd;
  color: #fff;
}

#kontakt {
  overflow: scroll;
}

footer {
  background: rgb(24, 24, 24);
  height: 11vh;
  display: flex;
  justify-content: center;
  color: white;
  padding: 30px 0 0 0;
}

a {
  text-decoration: none;
  color: #fff;
}

#footer_container {
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 30px;
}

#footer_bottom {
  display: flex;
  justify-content: space-evenly;
}

#footer_bottom p {
  font-size: 8px;
  margin-top: 7px;
}

#footer_bottom a {
  font-size: 8px;
}

footer h3 {
  margin-top: 10px;
  color: #74e0fd;
  font-size: 14px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d252d;
  margin: 0;
  height: 90vh;
}

@media only screen and (max-width: 600px) {
  #navbar {
    padding: 0;
  }

  #navbar li a {
    text-decoration: none;
    color: #74e0fd;
    padding: 16px;
    font-size: 16px;
    margin: 0 8px;
    border-radius: 5px;
    transition: background-color 0.5s;
  }

  footer {
    background: rgb(24, 24, 24);
    height: 16vh;
    display: flex;
    justify-content: center;
    color: white;
    box-sizing: border-box;
    align-items: center;
  }

  #footer_bottom {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 15px;
  }

  #footer_container {
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0px 0 30px 0 !important;
  }

  footer h3 {
    color: #74e0fd;
    font-size: 15px;
  }

  footer p {
    font-size: 8px;
    margin-top: 8px;
  }

  a {
    font-size: 8px;
  }
}
</style>

<script>
</script>
