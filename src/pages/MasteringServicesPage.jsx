import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Activity, ArrowUpRight, AudioWaveform, Disc3, Mail, SlidersHorizontal } from "lucide-react";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

const masteringStages = [
  { number: "01", title: "CRITICAL LISTENING", copy: "Every project begins with focused evaluation of the supplied mix. Tonal balance, transient definition, phase coherence, stereo compatibility, low-frequency control, vocal placement, headroom, and mix translation are assessed before processing decisions are made." },
  { number: "02", title: "PRECISION PROCESSING", copy: "Mastering moves are selected deliberately, not applied by preset. Equalization, dynamic equalization, compression, transient control, harmonic shaping, stereo-field management, and limiting are used where they improve the record while protecting its identity and musical dynamics." },
  { number: "03", title: "REFERENCE + TRANSLATION", copy: "The master is evaluated against appropriate references and across the listening environment. The objective is a controlled, balanced presentation that holds together on headphones, speakers, consumer playback systems, and streaming platforms." },
  { number: "04", title: "FINAL DELIVERY", copy: "Approved masters are prepared as high-quality lossless audio files with the requested sample rate, bit depth, channel format, and delivery specifications. Album and EP projects receive attention to sequencing, track-to-track consistency, spacing, and overall cohesion." },
];

export default function MasteringServicesPage() {
  return (
    <Box className="page-shell">
      <SiteHeader />
      <main className="mastering-main">
        <section className="mastering-hero">
          <Container maxW="7xl">
            <div className="mastering-kicker"><span /> SYNTIENT RECORDS / PROFESSIONAL AUDIO</div>
            <div className="mastering-hero-grid">
              <div>
                <div className="eyebrow">MASTERING SERVICES</div>
                <Heading as="h1" className="mastering-title">THE FINAL<br /><span>SONIC STATEMENT.</span></Heading>
                <Text className="mastering-lede">Your music deserves more than a final export. It deserves a considered, technically disciplined mastering process that brings the record into focus, preserves its character, and prepares it to meet the world at its best.</Text>
                <a className="mastering-primary-cta" href="mailto:SYNOVAMEDIA@GMAIL.COM?subject=MASTERING%20SERVICES%20INQUIRY">INQUIRE ABOUT MASTERING <ArrowUpRight size={16} /></a>
              </div>
              <div className="mastering-hero-art" aria-label="Audio mastering signal visualization">
                <div className="mastering-art-orbit orbit-a" /><div className="mastering-art-orbit orbit-b" />
                <div className="mastering-art-center"><AudioWaveform size={76} strokeWidth={1} /><span>PRECISION / DETAIL / TRANSLATION</span></div>
                <div className="mastering-art-index">SR / MASTERING DIVISION</div>
              </div>
            </div>
            <div className="mastering-proof-row"><span>DECADES OF HANDS-ON EXPERIENCE</span><span>DIGITAL + ANALOGUE WORKFLOWS</span><span>LOSSLESS MASTER DELIVERY</span></div>
          </Container>
        </section>

        <section className="mastering-intro-section">
          <Container maxW="7xl" className="mastering-two-col">
            <div className="mastering-section-index">01 / THE APPROACH</div>
            <div>
              <div className="eyebrow">EXPERIENCE YOU CAN HEAR</div>
              <Heading as="h2" className="mastering-section-title">A master is not simply louder.<br /><span>It is more intentional.</span></Heading>
              <Text className="mastering-copy">Mastering is the final critical stage between a finished mix and a release-ready record. It calls for an experienced ear, a technically reliable monitoring environment, a deep understanding of audio behaviour, and the restraint to know when a track needs refinement and when it needs to be left alone.</Text>
              <Text className="mastering-copy">With decades of experience carefully mastering tracks, the approach here is built around detail, consistency, and musical judgement. Every decision has a reason. The goal is not to force every production into the same sonic template. It is to reveal the strongest version of the individual record while maintaining the emotion, impact, dynamics, and identity that make it distinctive.</Text>
              <Text className="mastering-copy">From intimate, vocal-forward productions to dense, layered arrangements and bass-heavy modern mixes, each project receives focused attention. Low-end definition, midrange clarity, high-frequency balance, transient integrity, stereo image, dynamic range, and perceived loudness are considered as parts of one connected picture.</Text>
            </div>
          </Container>
        </section>

        <section className="mastering-process-section">
          <Container maxW="7xl">
            <div className="eyebrow">THE MASTERING WORKFLOW</div>
            <Heading as="h2" className="mastering-section-title">Technical precision.<br /><span>Musical perspective.</span></Heading>
            <div className="mastering-stage-grid">
              {masteringStages.map((stage) => (
                <article className="mastering-stage" key={stage.number}>
                  <span className="mastering-stage-number">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="mastering-capabilities-section">
          <Container maxW="7xl">
            <div className="mastering-two-col">
              <div className="mastering-section-index">02 / THE ENVIRONMENT</div>
              <div>
                <div className="eyebrow">DIGITAL + ANALOGUE</div>
                <Heading as="h2" className="mastering-section-title">The right tools.<br /><span>The right decisions.</span></Heading>
                <Text className="mastering-copy">Mastering takes place in a professional audio environment designed for critical listening and precision work, with digital and analogue processing options available. The signal path is chosen to suit the material, the intended sound, and the technical requirements of the release. Digital precision and analogue character are not competing philosophies; they are complementary approaches that can be used independently or together when the project calls for it.</Text>
                <div className="mastering-capability-grid">
                  <div><SlidersHorizontal /><strong>TONAL CONTROL</strong><span>Corrective and musical EQ, spectral balance, resonant control, and tonal shaping.</span></div>
                  <div><Activity /><strong>DYNAMIC INTEGRITY</strong><span>Compression, limiting, transient management, crest factor, and controlled loudness.</span></div>
                  <div><AudioWaveform /><strong>STEREO + PHASE</strong><span>Stereo image, mono compatibility, phase coherence, and low-frequency stability.</span></div>
                  <div><Disc3 /><strong>RELEASE FORMATS</strong><span>Lossless WAV and AIFF delivery, with project-specific sample-rate and bit-depth requirements.</span></div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="mastering-delivery-section">
          <Container maxW="7xl">
            <div className="mastering-two-col">
              <div className="mastering-section-index">03 / DELIVERY STANDARDS</div>
              <div>
                <div className="eyebrow">BUILT FOR THE RELEASE</div>
                <Heading as="h2" className="mastering-section-title">Clean, compatible,<br /><span>high-resolution masters.</span></Heading>
                <Text className="mastering-copy">Final delivery is prepared to the agreed technical specification. Lossless PCM exports preserve the full resolution of the approved master without the data reduction associated with lossy formats. WAV and AIFF deliverables can be prepared with the requested sample rate, bit depth, stereo or mono configuration, and file-naming conventions.</Text>
                <Text className="mastering-copy">Where relevant, delivery planning considers sample-peak and true-peak behaviour, loudness targets, inter-sample peaks, codec-encoding headroom, and the destination platform's technical guidance. Streaming loudness is approached with care: loudness normalization is not a reason to sacrifice punch, dynamics, or musicality.</Text>
                <Text className="mastering-copy">For multi-track projects, sequencing and album cohesion matter just as much as the individual masters. Relative level, tonal consistency, perceived loudness, transitions, fades, spacing, and the overall listening arc are reviewed as a complete body of work.</Text>
                <div className="mastering-format-tags"><span>LOSSLESS WAV</span><span>AIFF</span><span>PCM AUDIO</span><span>TRUE-PEAK AWARE</span><span>ALBUM COHESION</span><span>STREAMING-READY</span></div>
              </div>
            </div>
          </Container>
        </section>

        <section className="mastering-offer-section">
          <Container maxW="7xl">
            <div className="mastering-offer-panel">
              <div className="eyebrow">INTRODUCTORY ALBUM + EP OFFER</div>
              <div className="mastering-offer-grid">
                <div><div className="mastering-discount">40<span>% OFF</span></div><Heading as="h2">Give the full project<br />the finishing touch.</Heading><Text>Receive a special 40% discount on album and EP mastering projects through February 14, 2027.</Text></div>
                <div className="mastering-code-card"><span>PROMO CODE</span><strong>#LOVER</strong><small>VALID THROUGH FEBRUARY 14, 2027</small><a href="mailto:SYNOVAMEDIA@GMAIL.COM?subject=MASTERING%20SERVICES%20INQUIRY&body=I%27d%20like%20to%20inquire%20about%20the%20%2340%25%20album%2FEP%20mastering%20promotion.%20Promo%20code%3A%20%23LOVER.">CLAIM THE OFFER <ArrowUpRight size={15} /></a></div>
              </div>
            </div>
          </Container>
        </section>

        <section className="mastering-pricing-section">
          <Container maxW="7xl">
            <div className="mastering-two-col">
              <div className="mastering-section-index">04 / PRICING + TERMS</div>
              <div>
                <div className="eyebrow">STRAIGHTFORWARD PROJECT TERMS</div>
                <Heading as="h2" className="mastering-section-title">Clear terms.<br /><span>Focused collaboration.</span></Heading>
                <div className="mastering-terms-grid">
                  <article><span>BOOKING DEPOSIT</span><strong>$10</strong><p>A $10 deposit is required to initiate and reserve a mastering project. The deposit is returned upon receipt of full payment.</p></article>
                  <article><span>PROJECT PRICING</span><strong>Custom quote</strong><p>Mastering costs vary according to project scope, track count, format requirements, revisions, and delivery needs. Email for a project-specific quote.</p></article>
                  <article><span>PAYMENT OPTIONS</span><strong>Installments accepted</strong><p>Installment payments are accepted when agreed in advance. The payment schedule and delivery milestones will be documented in the project agreement.</p></article>
                  <article><span>AGREEMENT</span><strong>Written contract</strong><p>All services, deliverables, payment arrangements, timelines, revisions, and other terms are subject to a contract agreed between the parties involved and SYNTIENT RECORDS.</p></article>
                </div>
                <p className="mastering-terms-note">The $10 deposit is refundable upon full payment. Final pricing, project acceptance, turnaround, deliverables, revision scope, and any additional conditions will be confirmed in writing before work begins.</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="mastering-contact-section">
          <Container maxW="7xl">
            <div className="mastering-contact-panel">
              <div className="eyebrow">LET'S HEAR WHAT YOU'RE WORKING ON</div>
              <Heading as="h2">Your mix. Your vision.<br /><span>Finished with intention.</span></Heading>
              <Text>Send an inquiry with a brief description of your project, the number of tracks, your intended release format, and any reference material or technical requirements. You'll receive a response to discuss the project and establish a quote.</Text>
              <a className="mastering-primary-cta" href="mailto:SYNOVAMEDIA@GMAIL.COM?subject=MASTERING%20SERVICES%20INQUIRY"><Mail size={16} /> EMAIL YOUR INQUIRY <ArrowUpRight size={16} /></a>
              <div className="mastering-email-address">SYNOVAMEDIA@GMAIL.COM</div>
              <small>PLEASE USE THE SUBJECT LINE: MASTERING SERVICES INQUIRY</small>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </Box>
  );
}
