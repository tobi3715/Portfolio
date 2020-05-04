<template>
<v-app>
  <body>
    <section id="about">
      <div id="container">
        <section id="back">
          <router-link to="/About">
          <div id="tilbage"></div>
        </router-link>
        <h1 class="about-heading">
          Lær mig at
          <span class="text-primary">kende</span>
        </h1>
        </section>
        <div id="foto">
          <img src="../assets/mig.jpg" alt="Billede a mig" class="curve" />
          <p>
            Jeg har altid været fan af teknologi og computere, og det at skabe og designe noget man kan vise frem og være stolt af, synes jeg er utrolig fedt. Jeg er som person meget glad og udadvendt, og så går jeg meget op i at alle omkring mig har det godt. Arbejdsmæssigt er jeg professionel, og stræber efter at tilfredsstille kundernes behov. På en arbejdsplads synes jeg det er utrolig vigtigt, at der er en god balance mellem professionalisme og socialt velværd. Der skal være plads til et godt grin eller et skørt tiltag, samtidig med at arbejdet bliver udført. Derudover er jeg utrolig lærenem.
            På baggrund af mine tidligere og nuværende jobs har jeg fået mange erfaringer. Bl.a. er jeg god til at have mange bolde i luften på samme tid og bevare overblikket i stressede situationer. Derudover har jeg haft utrolig meget kundekontakt, så jeg ved hvad det vil sige at yde en god service. I min fritid er jeg aktiv, hvor jeg både spiller fodbold og går i fitness. Ellers er jeg sammen med mine venner, hvor jeg altid er god for at få en øl eller to.
          </p>
        </div>
        <div id="cv-container">
          <div class="video-cv">
            <h2>
              VIDEO
              <span class="text-primary">CV</span>
            </h2>
            <iframe
              width="75%"
              height="80%"
              src="https://www.youtube.com/embed/hjxC2Lmuyj8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </body>
</v-app>
</template>

<style scoped>
#back {
height: 50px;
width: 100%;
margin-bottom: 100px;
}

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

#about {
  padding: 3rem 0rem;
}

#about h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
}

#about h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin: -20px 0 20px 0;
}

#foto {
  padding: 0 75px 0 75px;
  align-items: center;
}

#foto p {
  line-height: 1.8;
  color: #fff;
  font-size: 1.4rem;
  text-align: justify;
}
#foto .curve {
  width: 30%;
  height: auto;
  min-width: 150px;
  float: left;
  margin-right: 7.5rem;
  border-radius: 50%;
  -webkit-shape-outside: circle();
  shape-outside: circle();
}

#cv-container {
  margin-top: 85px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  top: 81px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
}

.video-cv {
  margin-top: 50px;
  width: 100%;
  height: 700px;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
#tilbage {
  display: none;
}

#foto p {
  line-height: 1.8;
  color: #fff;
  font-size: 1.4rem;
  text-align: start;
  padding-top: 150px;
}
}
</style>
