import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { roster } from "../data/roster.js";

const projectDetails = [
  ["LIL SYNN", "A cinematic emotrap and alternative-pop project built around emotionally direct songwriting and atmospheric production."],
  ["ZIGGY", "A creative project within the Syntient Records roster."],
  ["CHICKENMAN", "A psychedelic delta blues group bringing its own character and energy to the label."],
  ["DIAMOND HEX", "A vocal-forward project pairing soaring vocals with sharp, precise rapping."],
  ["CHASING QUIET", "A project centered on lo-fi songs and understated atmosphere."],
  ["SYNSTATIC", "A project drawing on dubstep and mid-tempo influences, with albums that explore its electronic sound."],
  ["SWITCHLIGHT THEORY", "An indie-rock project whose lyrics begin with free-association writing: writing continuously and freely, following thoughts and unexpected connections without forcing a predetermined subject or structure. The strongest phrases and ideas can then become the foundation for a song."]
];

export default function AboutPage() {
  return (
    <Box className="page-shell">
      <SiteHeader />
      <main className="about-main">
        <Container maxW="7xl">
          <section className="about-intro">
            <div className="eyebrow">INDEPENDENT BY DESIGN</div>
            <Heading as="h1" className="about-title">A LABEL BUILT<br /><span>OUTSIDE THE LINES.</span></Heading>
            <Text className="about-lede">Syntient Records is an independent record label based in California, bringing together distinct artists and creative projects across a wide range of sounds.</Text>
          </section>

          <section className="about-section">
            <div className="about-section-label">01 / THE ROSTER</div>
            <div className="about-section-content">
              <Heading as="h2">Different worlds.<br />Shared independence.</Heading>
              <div className="project-list">
                {projectDetails.map(([name, description], index) => (
                  <article className="project-row" key={name}>
                    <div className="project-number">0{index + 1}</div>
                    <div><Heading as="h3">{name}</Heading><Text>{description}</Text></div>
                    <a href={roster[index].href} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`}><ArrowUpRight size={19} /></a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">02 / THE CREATIVE PROCESS</div>
            <div className="about-section-content">
              <Heading as="h2">Human imagination.<br />New creative tools.</Heading>
              <Text className="about-copy">AI is part of the creative process across Syntient Records and its projects. The label embraces emerging tools as a way to explore ideas, sounds, and creative possibilities.</Text>
              <Text className="about-copy">There are also traditional production contributions within the catalog. A small number of SYNSTATIC tracks were traditionally produced in FL Studio by JP Gaier (IPI #01185440553).</Text>
            </div>
          </section>

          <section className="about-section recognition-section">
            <div className="about-section-label">03 / RECOGNITION</div>
            <div className="about-section-content">
              <div className="eyebrow">SIQA · 2026</div>
              <Heading as="h2">A meaningful milestone.</Heading>
              <Text className="about-copy">LIL SYNN is SIQA verified. In 2026, the album <em>HELLO GOODBYE</em> was shortlisted for nomination for Album of the Year at the SIQA awards show in Los Angeles, held at The Mayan Theatre and televised. The album did not advance into the final five, but being shortlisted was a significant honor and an important step for AI music.</Text>
              <Text className="about-copy">LIL SYNN intends to enter again next year and attend the event.</Text>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">04 / THE FOUNDATION</div>
            <div className="about-section-content">
              <Heading as="h2">Creative vision meets<br />operational experience.</Heading>
              <Text className="about-copy">Jarred brings a broad professional background spanning marketing, business management, and technology. His experience ranges from telecommunications and technical troubleshooting to programming, full-stack development, and process improvement. That mix of creative thinking and practical systems-building informs how the label develops and operates.</Text>
            </div>
          </section>

          <section className="about-closing">
            <div className="eyebrow">SYNTIENT RECORDS</div>
            <Heading as="h2">Independent sound.<br />Room to evolve.</Heading>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </Box>
  );
}