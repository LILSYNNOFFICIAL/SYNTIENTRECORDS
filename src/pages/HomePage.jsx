import { Box, Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowDownRight, ArrowUpRight, Disc3, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { roster, merchUrl } from "../data/roster.js";
import labelLogo from "../../img/file_000000006b4c71f4bbef4905dea0a57f-removebg-preview.png";

const featuredRelease = {
  title: "ECHOES OF US",
  artist: "LIL SYNN",
  format: "ALBUM",
  trackCount: "10 TRACKS",
  artwork: "https://raw.githubusercontent.com/LILSYNNOFFICIAL/LILSYNNOFFICIAL/refs/heads/main/assets/images/icons/album_art/Echoes%20of%20Us.jpg",
  description:
    "A ten-track release tracing connection, memory, distance, and the moments that stay with us. Explore the album and listen on your preferred platform.",
  tracks: ["Keep it Going", "Out of the Blue", "Eight Like Infinity", "Where I Belong", "Finding You"],
  links: [
    { label: "SPOTIFY", href: "https://open.spotify.com/album/7HPi70MuuXFvSm8bSZ6oOk" },
    { label: "APPLE MUSIC", href: "https://music.apple.com/us/album/echoes-of-us/6830461499" },
    { label: "YOUTUBE", href: "https://www.youtube.com/watch?v=cPlMLCBGZTE&list=OLAK5uy_kb4u2aXV7biMk83i3KNPQXsGPh6zSG7vs" },
  ],
};

function getPlatformLabel(href) {
  if (!href) return "LINK PENDING";
  const host = new URL(href).hostname.replace(/^www\./, "");
  if (host.includes("soundcloud.com")) return "SOUNDCLOUD";
  if (host.includes("youtube.com") || host.includes("youtu.be")) return "YOUTUBE";
  if (host.includes("lilsynn.com")) return "ARTIST WEBSITE";
  if (host.includes("facebook.com")) return "FACEBOOK";
  return "OFFICIAL LINK";
}

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
            <a className="hero-cta" href="#featured-release">DISCOVER THE LATEST RELEASE <ArrowDownRight size={16} /></a>
            <div className="hero-index">SR — 2026 <span>SCROLL TO DISCOVER</span></div>
          </Container>
        </section>

        <section id="featured-release" className="featured-release-section section-pad">
          <Container maxW="7xl">
            <div className="section-heading">
              <div>
                <div className="eyebrow">LATEST RELEASE / LIL SYNN</div>
                <Heading as="h2" className="section-title">FEATURED RELEASE<span className="title-period">.</span></Heading>
              </div>
              <Text className="section-note">The latest from the label.<br />Listen, explore, discover.</Text>
            </div>
            <article className="featured-release-card">
              <a className="featured-release-artwork" href={featuredRelease.links[0].href} target="_blank" rel="noreferrer" aria-label="Listen to Echoes of Us on Spotify">
                <img src={featuredRelease.artwork} alt="LIL SYNN, Echoes of Us album artwork" loading="eager" />
                <span className="artwork-index">SYNTIENT RECORDS / RELEASE 001</span>
              </a>
              <div className="featured-release-copy">
                <div className="release-overline"><Disc3 size={15} /> {featuredRelease.artist} <span /> {featuredRelease.format}</div>
                <Heading as="h3" className="featured-release-title">{featuredRelease.title}</Heading>
                <div className="release-specs">{featuredRelease.trackCount}<span /> OFFICIAL ALBUM RELEASE</div>
                <Text className="featured-release-description">{featuredRelease.description}</Text>
                <div className="release-track-preview" aria-label="Track preview">
                  {featuredRelease.tracks.map((track, index) => (
                    <div className="release-track" key={track}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{track}</span>
                    </div>
                  ))}
                  <div className="release-track release-track-more"><span>＋</span><span>5 MORE TRACKS</span></div>
                </div>
                <div className="release-platform-links">
                  {featuredRelease.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}<ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Container>
        </section>

        <section id="featured-artists" className="featured-artists-section section-pad">
          <Container maxW="7xl">
            <div className="section-heading">
              <div>
                <div className="eyebrow">ARTIST SPOTLIGHT</div>
                <Heading as="h2" className="section-title">FEATURED ARTISTS<span className="title-period">.</span></Heading>
              </div>
              <Text className="section-note">Meet the artists behind the releases.<br />Explore their worlds beyond the label.</Text>
            </div>
            <div className="featured-artist-grid">
              <a className="featured-artist-card" href="https://lilsynn.com" target="_blank" rel="noreferrer">
                <div className="featured-artist-image-wrap">
                  <img src="https://raw.githubusercontent.com/LILSYNNOFFICIAL/SYNTIENTRECORDS/refs/heads/main/img/file_00000000b1f881f7b6298756986111bc.png" alt="LIL SYNN artist portrait" loading="lazy" />
                  <span className="featured-artist-number">01 / FEATURED ARTIST</span>
                </div>
                <div className="featured-artist-info">
                  <div><Heading as="h3">LIL SYNN</Heading><Text>CINEMATIC EMOTRAP · ALTERNATIVE POP</Text></div>
                  <span className="featured-artist-link">OFFICIAL WEBSITE <ArrowUpRight size={15} /></span>
                </div>
              </a>
              <a className="featured-artist-card" href="https://youtube.com/channel/UCmeovIW_Qs1pJpLuxIp1gUA?si=vORgaVge8bQHibAV" target="_blank" rel="noreferrer">
                <div className="featured-artist-image-wrap">
                  <img src="https://raw.githubusercontent.com/LILSYNNOFFICIAL/SYNTIENTRECORDS/refs/heads/main/img/file_00000000496c71fd97bfc91bbcedf550.png" alt="Ziggy and Chickenman artist artwork" loading="lazy" />
                  <span className="featured-artist-number">02 / FEATURED ARTIST</span>
                </div>
                <div className="featured-artist-info">
                  <div><Heading as="h3">ZIGGY AND CHICKENMAN</Heading><Text>PSYCHEDELIC DELTA BLUES ROCK</Text></div>
                  <span className="featured-artist-link">YOUTUBE CHANNEL <ArrowUpRight size={15} /></span>
                </div>
              </a>
            </div>
          </Container>
        </section>

        <section className="artist-video-section section-pad">
          <Container maxW="7xl">
            <div className="section-heading">
              <div>
                <div className="eyebrow">OFFICIAL YOUTUBE RELEASES</div>
                <Heading as="h2" className="section-title">WATCH & LISTEN<span className="title-period">.</span></Heading>
              </div>
              <Text className="section-note">Official releases only.<br />Watch directly from YouTube.</Text>
            </div>
            <div className="artist-video-grid">
              <article className="artist-video-group">
                <div className="artist-video-heading"><div><span>01 / LIL SYNN</span><h3>ECHOES OF US</h3></div><a href="https://www.youtube.com/watch?v=cPlMLCBGZTE&list=OLAK5uy_kb4u2aXV7biMk83i3KNPQXsGPh6zSG7vs" target="_blank" rel="noreferrer">VIEW ON YOUTUBE <ExternalLink size={13} /></a></div>
                <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=OLAK5uy_kb4u2aXV7biMk83i3KNPQXsGPh6zSG7vs" title="LIL SYNN - Echoes of Us official YouTube album playlist" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                <p className="artist-video-caption">The complete 10-track album playlist.</p>
                <div className="youtube-video-stack lil-synn-release-stack">
                  <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/QGll3iTjNJA" title="LIL SYNN - I Won't, official release" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                  <div className="youtube-video-meta"><strong>I WON'T</strong><span>OFFICIAL RELEASE · SYNTIENT RECORDS</span></div>
                  <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/PUnX340EGFU" title="LIL SYNN - Where I Belong, official release" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                  <div className="youtube-video-meta"><strong>WHERE I BELONG</strong><span>FROM ECHOES OF US · SYNTIENT RECORDS</span></div>
                </div>
              </article>
              <article className="artist-video-group">
                <div className="artist-video-heading"><div><span>02 / ZIGGY AND CHICKENMAN</span><h3>COSMIC RAIN</h3></div><a href="https://youtube.com/channel/UCmeovIW_Qs1pJpLuxIp1gUA?si=vORgaVge8bQHibAV" target="_blank" rel="noreferrer">VIEW CHANNEL <ExternalLink size={13} /></a></div>
                <div className="youtube-video-stack">
                  <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/GiuSTJkdjTE" title="Ziggy and Chickenman - Cosmic Rain, official release" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                  <div className="youtube-video-meta"><strong>COSMIC RAIN</strong><span>OFFICIAL RELEASE · SYNTIENT RECORDS</span></div>
                  <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/Q4yMHifa4AU" title="Ziggy and Chickenman - Midnight Mind Blow, official release" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                  <div className="youtube-video-meta"><strong>MIDNIGHT MIND BLOW</strong><span>FROM COSMIC RAIN · SYNTIENT RECORDS</span></div>
                  <div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/CJtatp5RUj4" title="Ziggy and Chickenman - Hold On To Nothin, official release" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                  <div className="youtube-video-meta"><strong>HOLD ON TO NOTHIN'</strong><span>FROM COSMIC RAIN · SYNTIENT RECORDS</span></div>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section id="roster" className="roster-section section-pad">
          <Container maxW="7xl">
            <div className="section-heading">
              <div>
                <div className="eyebrow">THE COLLECTIVE</div>
                <Heading as="h2" className="section-title">THE ROSTER<span className="title-period">.</span></Heading>
              </div>
              <Text className="section-note">Distinct artists. Individual identities.<br />One independent label.</Text>
            </div>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 3, md: 4 }}>
              {roster.map((artist) => {
                const platform = getPlatformLabel(artist.href);
                const card = (
                  <>
                    <div className="artist-card-top">
                      <span>{artist.number} / 08</span>
                      <span className="artist-platform">{platform}</span>
                    </div>
                    <div className="artist-card-bottom">
                      <Heading as="h3">{artist.name}</Heading>
                      <Text>{artist.descriptor}</Text>
                      {artist.href ? (
                        <span className="artist-card-action">EXPLORE ARTIST <ArrowUpRight size={14} /></span>
                      ) : (
                        <span className="artist-card-pending">OFFICIAL LINK COMING SOON</span>
                      )}
                    </div>
                    <div className="card-glint" />
                  </>
                );
                return artist.href ? (
                  <a className="artist-card" key={artist.name} href={artist.href} target="_blank" rel="noreferrer" aria-label={"Explore " + artist.name + " via " + platform}>{card}</a>
                ) : (
                  <div className="artist-card artist-card-pending-shell" key={artist.name} aria-label={artist.name + ", official link coming soon"}>{card}</div>
                );
              })}
              <a className="artist-card merch-card" href={merchUrl} target="_blank" rel="noreferrer" aria-label="Shop official LIL SYNN merchandise">
                <div className="artist-card-top">
                  <span>OFFICIAL STORE</span>
                  <span className="artist-platform">MERCH</span>
                </div>
                <div className="artist-card-bottom">
                  <Heading as="h3">MERCH</Heading>
                  <Text>Official LIL SYNN merchandise.</Text>
                  <span className="artist-card-action">SHOP MERCH <ArrowUpRight size={14} /></span>
                </div>
                <div className="card-glint" />
              </a>
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
