<template>
<v-app>
  <body>
    <section id="intro">
      <router-link to="/About">
          <div id="tilbage"></div>
        </router-link>
      <h1>
        Tidslinje af mine
        <span class="text-primary">erfaringer</span>
      </h1>
    </section>
    <section id="skole">
      <h2>
        Skole
        <span class="text-primary">erfaringer</span>
      </h2>
    </section>
    <div class="timeline">
      <ul>
        <li>
          <div class="content">
            <h3>Folkeskole - Nørre Nebel</h3>
            <p>Standard folkeskole forløb.</p>
          </div>
          <div class="time">
            <h4>2005-2015</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Varde Handelsskole / Det Blå Gymnasium - Varde</h3>
            <p>På Varde Handelsskole studerede jeg på linjen 'Global Business', hvor jeg havde Afsætning, Engelsk, Dansk og Spansk på A-niveau. Derudover havde jeg bl.a. fag som Psykologi, Virksomheds Økonomi, International Økonomi, Markedskommunikation mm. Jeg rykkede matematik op på B-niveau.</p>
            <a href="https://docdro.id/PhKmYmE" target="_blank">
              <p>
                <span class="text-primary">Se mit eksamensbevis her</span>
              </p>
            </a>
          </div>
          <div class="time">
            <h4>2015-2018</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Erhvervsakademi Sydvest - Esbjerg</h3>
            <p>Lige nu studerer jeg til Multimediedesigner. Her har jeg fagene Design & Development, Content Creation, User Experience og Business.</p>
          </div>
          <div class="time">
            <h4>2019-2021</h4>
          </div>
        </li>
        <div style="clear: both;"></div>
      </ul>
    </div>
    <section id="job">
      <h2>
        Job
        <span class="text-primary">erfaringer</span>
      </h2>
    </section>
    <div class="timeline">
      <ul>
        <li>
          <div class="content">
            <h3>Avis- og reklameomdeler hos FK Distribution - Nørre Nebel</h3>
            <p>Standard avis- og reklameomdeler.</p>
          </div>
          <div class="time">
            <h4>2011-2013</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Opvasker/Tjener hos Il Mandolino - Henne Strand</h3>
            <p>Jeg startede først med at arbejde hos Il Mandolino, som opvasker, hvilket jeg var i 2 år indtil jeg blev gammel nok til at blive tjener. Derefter var jeg tjener i ca. 5 år. Stedet er meget turistpræget, hvor størstedelen er tyskere, hvilket vil sige jeg hurtigt kan skifte mellem sprog, og kan kommunikere de basale ting på tysk. Derudover taler jeg også flydende engelsk.</p>
          </div>
          <div class="time">
            <h4>2013-2019</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Servicemedarbejder hos Dansk Bassinservice - Oksbøl</h3>
            <p>I mit sabbatår arbejdede jeg (arbejder der stadig ved siden af mit studie) hos Dansk Bassinservice, som servicemedarbejder. Her tjekkede jeg vandkvaliteten for pH og klor, rettede den til, samt rengjorde pool og spa i sommerhusområder.</p>
          </div>
          <div class="time">
            <h4>2018-nu</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Tjener hos Butcher - Esbjerg</h3>
            <p>Efter mine tidligere erfaringer som tjener, begyndte jeg at arbejde hos Butcher som studiejob (sammen med det andet i Oksbøl).</p>
          </div>
          <div class="time">
            <h4>2019-nu</h4>
          </div>
        </li>
        <div style="clear: both;"></div>
      </ul>
    </div>
    <section id="bottom">
    <div id="opsummering">
      <h2>Opsummering</h2>
      <p>På baggrund af mine tidligere og nuværende jobs har jeg fået utrolig mange erfaringer og kvaliteter. Mine tjener jobs har bl.a. gjort, at jeg er god til at have mange bolde i luften på samme tid, bevare overblik og fokus i stressede situationer og være effektiv, samtidig med altid at have et smil på læben. Derudover var det som servicemedarbejder vigtigt at være utrolig præcis og fokuseret, da jeg arbejdede med kemikalier, så fejltagelser kunne være livstruende for både mig selv og andre. Fra alle mine jobs har jeg haft utrolig meget kunde-kontakt, hvilket har gjort at jeg er utrolig serviceminded og imødekommende, samt at jeg ved hvad det vil sige at yde en god service.</p>
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

#intro {
  height: 50px;
  width: 100%;
  padding-top: 3rem;
  font-size: 1.7rem;
  color: #fff;
  margin-bottom: 7rem;
}

#skole {
  height: 50px;
  width: 100%;
  padding-top: 2rem;
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: -2rem;
}

#job {
  height: 50px;
  width: 100%;
  padding-top: 2rem;
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: -2rem;
}

.timeline {
  position: relative;
  margin: 50px auto;
  width: 80vw;
  padding: 40px 0;
  box-sizing: border-box;
}

.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #84329b;
}

a {
  text-decoration: none;
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline ul li {
  line-height: normal;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  list-style: none;
}

.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.content {
  padding-bottom: 3rem;
}

.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  top: 24px;
  right: -7px;
  width: 12px;
  height: 12px;
  background: #74e0fd;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  top: 24px;
  left: -5px;
  width: 12px;
  height: 12px;
  background: #74e0fd;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li h3 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: #74e0fd;
  font-size: 1.4rem;
}

.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  font-weight: lighter;
  font-size: 1.3rem;
}

.timeline ul li .time h4 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  border: solid 3px #74e0fd;
  border-radius: 1.5rem;
  color: #fff;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  border: solid 3px #74e0fd;
  border-radius: 1.5rem;
  color: #fff;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

#bottom {
  display: flex;
  justify-content: center;
}

#opsummering {
  height: 500px;
  width: 60%;
  margin-bottom: 8rem;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  padding: 2rem 3rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: lighter;
  line-height: 1.5;
  text-align: center;
  border: solid 3px #84329b;
  border-radius: 1.5rem;
  box-sizing: border-box;
}

#opsummering h2 {
  color: #74e0fd;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: -12rem;
}

@media only screen and (max-width: 600px) {
#intro {
  padding-top: 2.5rem;
  font-size: 1.5rem;
}

#skole {
  font-size: 1.1rem;
}

#job {
  font-size: 1.1rem;
}

.timeline {
  position: relative;
  margin: 50px auto;
  width: 80vw;
  padding: 40px 0;
  box-sizing: border-box;
}

.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #84329b;
}

a {
  text-decoration: none;
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline ul li {
  line-height: normal;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  list-style: none;
}

.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.content {
  padding-bottom: 3rem;
}

.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  top: 24px;
  right: -7px;
  width: 12px;
  height: 12px;
  background: #74e0fd;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  top: 24px;
  left: -5px;
  width: 12px;
  height: 12px;
  background: #74e0fd;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li h3 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: #74e0fd;
  font-size: 1.4rem;
}

.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  font-weight: lighter;
  font-size: 1.3rem;
}

.timeline ul li .time h4 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  border: solid 3px #74e0fd;
  border-radius: 1.5rem;
  color: #fff;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}

.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  border: solid 3px #74e0fd;
  border-radius: 1.5rem;
  color: #fff;
  box-shadow: 0 0 0 3px rgba(72, 169, 197, 0.2);
}
 
  #opsummering {
    max-height: 400px;
    max-width: 60%;
    text-align: justify;
  }

  #opsummering h2 {
    font-size: 1.1rem;
    
  }

  #opsummering p {
    font-size: 0.6rem;
  }

}
</style>