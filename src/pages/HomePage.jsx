import { Box, Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { roster } from "../data/roster.js";
import labelLogo from "../../img/file_000000006b4c71f4bbef4905dea0a57f-removebg-preview.png";

export default function HomePage() {
  return (
    <Box className="page-shell">
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <Container maxW="7xl" className="hero-content">
            <div className="hero-kicker"><span /> INDEPENDENT RECORD LABEL · CALIFORNIA</div>
            <img className="hero-logo" src={labelLogo} alt="Syntient Records logo" />
            <Heading as="h1" className="hero-title">INDEPENDENT SOUND.<br /><span>UNLIMITED EXPRESSION.</span></Heading>
            <Text className="hero-subtitle">A home for the unconventional.</Text>
            <a className="hero-cta" href="#roster">EXPLORE THE ROSTER <ArrowDownRight size={16} /></a>
            <div className="hero-index">SR — 2026 <span>SCROLL TO DISCOVER</span></div>
          </Container>
        </section>

        <section id="roster" className="roster-section section-pad">
          <Container maxW="7xl">
            <div className="section-heading">
              <div>
                <div className="eyebrow">THE COLLECTIVE</div>
                <Heading as="h2" className="section-title">THE ROSTER<span className="title-period">.</span></Heading>
              </div>
              <Text className="section-note">Eight distinct projects.<br />One independent spirit.</Text>
            </div>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 3, md: 4 }}>
              {roster.map((artist) => {
                const card = (
                  <>
                    <div className="artist-card-top"><span>{artist.number} / 08</span><ArrowUpRight size={19} /></div>
                    <div className="artist-card-bottom">
                      <Heading as="h3">{artist.name}</Heading>
                      <Text>{artist.descriptor}</Text>
                      {artist.comingSoon && <span className="artist-card-pending">OFFICIAL LINK COMING SOON</span>}
                    </div>
                    <div className="card-glint" />
                  </>
                );
                return artist.href ? (
                  <a className="artist-card" key={artist.name} href={artist.href} target="_blank" rel="noreferrer">{card}</a>
                ) : (
                  <div className="artist-card artist-card-pending-shell" key={artist.name} aria-label={artist.name + ", official link coming soon"}>{card}</div>
                );
              })}
            </SimpleGrid>
          </Container>
        </section>

        <section className="manifesto-section">
          <Container maxW="7xl">
            <div className="manifesto-panel">
              <div className="eyebrow">OUR POINT OF VIEW</div>
              <Heading as="h2">Sound has no single shape.</Heading>
              <Text>We bring distinct creative identities together under one independent roof. Different voices, different worlds, and the freedom to make something that does not fit a template.</Text>
              <Button asChild className="outline-cta"><RouterLink to="/About">GET TO KNOW THE LABEL <ArrowUpRight size={16} /></RouterLink></Button>
              <div className="manifesto-watermark">SR</div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </Box>
  );
}
