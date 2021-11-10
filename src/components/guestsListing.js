import React from "react"
import styled from "styled-components"

import GuestGrantKirkhope from "../images/guests/grant-kirkhope.jpg"
import GuestMetalJesusRocks from "../images/guests/metal-jesus-rocks.jpg"
import GuestHowardScottWarshaw from "../images/guests/howard-scott-warshaw.jpg"
import GuestNerdelandslaget from "../images/guests/nerdelandslaget.jpg"
import GuestChristopherRobin from "../images/guests/christopher-robin.jpg"
import GuestTripHawkins from "../images/guests/trip-hawkins.jpg"
import GuestSpillquiz from "../images/guests/spillquiz.jpg"
import GuestDavidWise from "../images/guests/davidwise.jpg"
import GuestBattletoads from "../images/guests/battletoadslive.jpg"
import GuestRetroHour from "../images/guests/retrohour.jpg"
import GuestDavidBrevik from "../images/guests/davidbrevik.jpg"
import GuestCompletionist from "../images/guests/completionist.jpg"
import GuestRomero from "../images/guests/romero.jpg"
import GuestAshens from "../images/guests/ashens.jpg"

const GuestsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
`

const GuestStyle = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  @media (min-width: 1024px) {
    width: calc((100% / 3) - 40px);
    margin: 20px;
  }
  img {
    max-width: 100%;
    border-radius: 20px;
  }
  p {
    text-align: left;
    line-height: 1.2em;
  }
  h3 {
    text-align: left;
  }
`

const Guest = (props) => (
  <GuestStyle>
    <img src={props.guestImage} alt="guests" />
    <h3>{props.guestTitle}</h3>
    {props.children}
    <time>
      <span role="img" aria-label="emoji">
        ⌚
      </span>{" "}
      {props.guestTime}
    </time>
  </GuestStyle>
)

const Guests = (props) => (
  <GuestsList>
    <Guest
      guestImage={GuestMetalJesusRocks}
      guestTitle="Metal Jesus Rocks"
      guestTime="Søndag 30. august 18:00"
    >
      <p>
        Metal Jesus Rocks er kjent for de fleste som en langhåret YouTuber med
        kjærlighet for spill.
      </p>
      <p>
        Youtube-kanalen hans med samme navn har over 750.000-abbonnenter. Blant
        de mest populære er "Top 10 Xbox 360 Games - All Time," "Top 10
        PlayStation 2 / PS2 Games" og "FOUND: Ultra-Rare Nintendo Prototype N64
        Add-On (US Version of 64DD)."
      </p>
      <p>Han har også tidligere jobbet for spillselskapet Sierra On-Line.</p>
    </Guest>
    <Guest
      guestImage={GuestRomero}
      guestTitle="Brenda og John Romero"
      guestTime="Søndag 30. august"
    >
      <p>
        På søndag 30. august får vi besøk av to vaskeekte legender på streamen
        vår! Brenda og John Romero stikker nemlig innom.{" "}
        <span role="img" aria-label="emoji">
          😻
        </span>
      </p>
      <p>
        Både Brenda og John har årevis med erfaring fra spillindustrien, han med
        Doom-, Wolfenstein 3D- og Quake-seriene, hun med Wizardry-serien. Nå
        lager de spill sammen i Romero Games!
      </p>
      <p>Han har også tidligere jobbet for spillselskapet Sierra On-Line.</p>
    </Guest>
    <Guest
      guestImage={GuestGrantKirkhope}
      guestTitle="Grant Kirkhope"
      guestTime="Lørdag 29. august 19:00"
    >
      <p>
        Kirkhope er en britisk spillmusiker som har jobbet på spill som
        Banjo-Kazooie, Donkey Kong 64, GoldenEye 007, og Perfect Dark.
      </p>
      <p>
        Han har blitt nominert til både BAFTA, for musikken til Viva Pinata, og
        ASCAP for Civilization: Beyond Earth.
      </p>
      <p>
        Han har også stemmen til flere spillkarakterer, blant annet Donkey Kong
        i Donkey Kong Country, og flere karakterer i Banjo Kazooie.
      </p>
    </Guest>
    <Guest
      guestImage={GuestHowardScottWarshaw}
      guestTitle="Howard Scott Warshaw"
      guestTime="Lørdag 29. august 20:00"
    >
      <p>
        Warshaw står bak et av de mest legendariske spillene i spillhistorien:
        E.T The Extra Terrestrial. Et spill som gjennom historien har blitt
        anklaget for kræsjen i spillbransjen tidlig på 80-tallet.
      </p>
      <p>
        Warshaw var ansatt som spillutvikler hos Atari og skapte andre kjente
        spill som Raiders Of The Lost Ark og Yar's Revenge.
      </p>
      <p>Warshaw jobber i dag som psykoterapeut i Silicon Valley.</p>
    </Guest>
    <Guest
      guestImage={GuestNerdelandslaget}
      guestTitle="Nerdelandslaget"
      guestTime="Lørdag 29. august 14:00"
    >
      <p>
        Andreas Hedemann fra podcasten Nerdelandslaget tar turen innom
        Retromessa sammen med kona si, Camilla Kierulf Jørgensen.
      </p>
      <p>
        Podcasten har rundet over 60 episoder siden starten i 2019, og har raskt
        blitt en av de mest populære spillpodcastene i Norge.
      </p>
      <p>
        Hedemann og Jørgensen kommer til studio for å slå av en prat og game med
        Spelledåsene.
      </p>
    </Guest>
    <Guest
      guestImage={GuestChristopherRobin}
      guestTitle="Christopher Robin Omdal fra FlippKlipp"
      guestTime="Lørdag 29. august 10:30"
    >
      <p>
        Christopher Robin jobber daglig som redaksjonsmedlem i NRK Supers
        YouTube-tilbud FlippKlipp.
      </p>
      <p>
        Han er kjent for å være en ivrig gamer med et øye for retrospill, og
        kommer i studio for å spille og prate om spill med Retromessa-crewet.
      </p>
    </Guest>
    <Guest
      guestImage={GuestSpillquiz}
      guestTitle="Spillquiz med Magnus og Jon Cato"
      guestTime="Lørdag 29. august, kveld"
    >
      <p>
        Den legendariske spillquizzen til Jon Cato Lorentzen og Magnus Tellefsen
        dukker opp i Retromessa-streamen lørdag kveld.
      </p>
      <p>
        Dette blir en skikkelig feinschmecker-quiz for spillkjennere, så benk
        deg i sofaen med penn og papir!
      </p>
    </Guest>
    <Guest
      guestImage={GuestDavidWise}
      guestTitle="Minikonsert med David Wise"
      guestTime="Søndag 30. august, 20:30"
    >
      <p>
        David Wise står bak musikken til legendariske spill som Donkey Kong
        Country. På søndag avslutter vi med en minikonsert fra legenden. Dette
        vil du ikke gå glipp av!
      </p>
    </Guest>
    <Guest
      guestImage={GuestBattletoads}
      guestTitle="Live Battletoads speedrun med kommentarer fra skaperne"
      guestTime="Lørdag 29. august, 14:30"
    >
      <p>
        David Wise og Kevin Bayliss skapte henholdsvis musikken og grafikken til
        det første Battletoads spillet. Nå blir de med som kommentatorer på
        speedrun av selve spillet!
      </p>
      <p>
        Det betyr at vi får en unik mulighet til å få et innblikk i utformingen
        av et av de mest omdiskuterte NES-spillene.
      </p>
    </Guest>
    <Guest
      guestImage={GuestRetroHour}
      guestTitle="The Retro Hour med Dan, Ravi og Joe"
      guestTime="Lørdag 29. august, 14:30"
    >
      <p>
        Retro Hour er en av våre favorittpodcaster, hvor Dan, Ravi og Joe fra
        Nottingham intervjuer rubbel og bit av historiske personer fra
        spillbransjen.
      </p>
      <p>
        I fjor hostet de flere av panelene under retrospillmessen, i år er det
        vi som skal intervjue dem!
      </p>
    </Guest>
    <Guest
      guestImage={GuestDavidBrevik}
      guestTitle="David Brevik"
      guestTime="Søndag 30. august, 19:00"
    >
      <p>
        Brevik stod bak Blizzard-spillserien Diablo, noen av de mest
        minneverdige PC-spillene fra 90-tallet.
      </p>
      <p>
        Han er en veteran fra spillbransjen som også har jobbet med spill som
        NBA Jam og Aero the Acro-Bat. Brevik trakk seg ut av Blizzard etter
        Diablo-serien og startet spillselskapet Skystone Games i 2020.
      </p>
    </Guest>
    <Guest
      guestImage={GuestCompletionist}
      guestTitle="The Completionist Jirard Khalil og Jesse Cox"
      guestTime="Søndag 30. august, 20:00"
    >
      <p>
        Publikumsfavoritt Jirard Khalih, bedre kjent som The Completionist,
        dukker opp på streamen vår søndag, sammen med kompis og YouTuber Jesse
        Cox.
      </p>
      <p>
        Khalil har gjestet Retrospillmessen flere ganger tidligere og drar
        alltid fullt hus på vårt panelrom. Vi gleder oss til et gjensyn med den
        hardtarbeidende YouTuberen.
      </p>
    </Guest>
    <Guest
      guestImage={GuestTripHawkins}
      guestTitle="Trip Hawkins"
      guestTime="Lørdag 29. august, 12:30"
    >
      <p>
        Hawkins er en av de virkelige legendene innen spillindustrien. Ikke bare
        grunnla han et av de største spillselskapene i historien Electronic
        Arts, han skapte også sin egen spillkonsoll 3DO, som riktignok floppet
        på spektakulært vis.
      </p>
      <p>
        Han dukker også opp i den nye Netflix-serien Highscore. Du finner Trip
        på hans{" "}
        <a href="https://www.facebook.com/tripthroughsiliconvalley">
          facebook-side Trip through Silicon Valley
        </a>
        , og hans instagram{" "}
        <a href="https://www.instagram.com/thetriphawkins">thetriphawkins</a>
      </p>
    </Guest>
    <Guest
      guestImage={GuestAshens}
      guestTitle="Ashens"
      guestTime="Søndag 30. august"
    >
      <p>
        Ashens er en britisk{" "}
        <a href="https://www.youtube.com/channel/UCxt9Pvye-9x_AIcb1UtmF1Q">
          YouTuber
        </a>{" "}
        med over 1 million subscribers.
      </p>
      <p>
        På kanalen hans finner du alt fra retrogaming til matlaging og rare
        oppfinnelser. Vi har vært fans i årevis, og gleder oss til å få han på
        besøk på stream.
      </p>
    </Guest>
  </GuestsList>
)

export default Guests
