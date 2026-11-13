import { useEffect } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { roster } from "../data/roster.js";

const technologyProjects = [
  {
    name: "SYNSOUND",
    category: "AUDIO INTELLIGENCE",
    description: "An evolving acoustic-analysis platform spanning a hosted web/PWA experience and an Android companion. Its documented platform capabilities include live audio capture, signal processing, noise reduction, speech enhancement, graphic and parametric EQ, dynamic EQ, spectrum and spectrogram analysis, transcription workflows, acoustic-event analysis, and infrasonic and ultrasonic exploration.",
    href: "https://github.com/NeuroSyn-Dev/SYNSOUND",
    label: "Explore SYNSOUND"
  },
  {
    name: "SYNMOTION AI",
    category: "AI VIDEO + MOTION",
    description: "An in-development video-production environment bringing scripting, storyboarding, character references, visual direction, cinematography, timeline editing, procedural 3D, audio workstations, scene assembly, and quality-control workflows into one connected production system.",
    href: "https://github.com/NeuroSyn-Dev/SYNMOTION-AI",
    label: "Explore SYNMOTION AI"
  },
  {
    name: "MeepSheep / SynTalk / SYNEAR",
    category: "CONNECTED AI SYSTEMS",
    description: "A family of focused tools built by NeuroSyn-Dev. SynTalk is designed for permission-aware communication and coordination between independently operated AI agents and tools. SYNEAR is an MCP audio-intelligence service for analyzing and comparing audio and returning structured evidence.",
    href: "https://github.com/LILSYNNOFFICIAL/MeepSheep",
    label: "Explore MeepSheep"
  },
  {
    name: "RuRu AI",
    category: "VIDEO GENERATION SDK",
    description: "An extended AI video-generation SDK that connects multiple generation providers through a developer-friendly workflow. Its documented enhancements include character-reference consistency, script-to-scene interpretation, model selection, cost previews, dialogue options, and long-form video assembly for videos up to five minutes.",
    href: "https://github.com/LILSYNNOFFICIAL/RuRu-AI",
    label: "Explore RuRu AI"
  },
  {
    name: "SYN Studio",
    category: "CREATIVE AUTHORING",
    description: "A Rust-first visual authoring environment for the SYN creative-document format. Its developing architecture brings design, motion, media, code, AI, canvas-based editing, animation tracks, keyframes, validation, and portable project export into a shared document model.",
    href: "https://github.com/LILSYNNOFFICIAL/SYN-STUDIO",
    label: "Explore SYN Studio"
  },
  {
    name: "BlueNote",
    category: "AI PRODUCTIVITY",
    description: "A local-first life and work workspace for projects, notes, tasks, documents, calendars, contacts, OCR, planning, and creative organization. It is designed to give complex creative work a structured home instead of scattering it across disconnected tools.",
    href: "https://github.com/LILSYNNOFFICIAL/BLUENOTE",
    label: "Explore BlueNote"
  },
  {
    name: "SYNTHESIS",
    category: "DESKTOP ENGINEERING",
    description: "A local-first desktop workspace for security and network workflows. It translates plain-language objectives into reviewable plans, uses 11 registered tool adapters, validates targets, and keeps execution bounded by explicit authorization and safety controls.",
    href: "https://github.com/LILSYNNOFFICIAL/SYNTHESIS",
    label: "Explore SYNTHESIS"
  },
  {
    name: "synOUT",
    category: "PRIVACY WORKSPACE",
    description: "A browser-based privacy workspace for reviewing possible data-broker exposure, organizing opt-out and deletion requests, and tracking follow-up work. Its documentation distinguishes heuristic matches and queued requests from independently confirmed removals.",
    href: "https://github.com/LILSYNNOFFICIAL/synOUT",
    label: "Explore synOUT"
  },
  {
    name: "AI PDF Studio",
    category: "DOCUMENT ENGINEERING",
    description: "An AI-assisted document and agreement authoring environment with 101 editable templates, visual editing, natural-language document operations, reusable design themes, structured signature fields, quality review, and PDF export.",
    href: "https://github.com/LILSYNNOFFICIAL/AI-PDF-STUDIO",
    label: "Explore AI PDF Studio"
  },
  {
    name: "SYN_LAUNCH",
    category: "ANDROID + DEVELOPER TOOLS",
    description: "A mobile-first Termux catalog and launcher for security, networking, privacy, forensics, cloud, and developer utilities. It includes searchable tool metadata, installation guidance, compatibility diagnostics, bounded checks, and curated toolsets.",
    href: "https://github.com/LILSYNNOFFICIAL/syn_launch",
    label: "Explore SYN_LAUNCH"
  },
  {
    name: "LIL SYNN Creator Systems",
    category: "MUSIC + CREATIVE WORKFLOWS",
    description: "The LIL SYNN digital platform is a custom-built web ecosystem bringing together releases, a music catalog, video archives, artwork, visual galleries, and universe and story elements. The codebase also includes dynamic release and video feeds, artwork and metadata utilities, admin systems, and a visual-designer workspace. Alongside the site, its extensive Suno V6 knowledge base documents prompt design, lyric and arrangement workflows, editing, stems, production, testing, troubleshooting, and release preparation.",
    href: "https://github.com/LILSYNNOFFICIAL/LIL-SYNN-s-Complete-Suno-V6-Guide",
    label: "Explore the Suno V6 guide"
  },
  {
    name: "Synapse-UI",
    category: "AI INTERFACE RESEARCH",
    description: "An early modular AI-GUI framework scaffold exploring a layered interface, model and engine architecture, graph memory, and an extensible plugin ecosystem.",
    href: "https://github.com/LILSYNNOFFICIAL/Synapse-UI",
    label: "Explore Synapse-UI"
  }
];

const legacyProjects = [
  ["Neurosyn ÆON", "A machine-readable AI governance and orchestration specification, with structured rules for boot behavior, safety, continuity, audit, and trace.", "https://github.com/NeurosynLabs/Neurosyn-Aeon"],
  ["MARMalade", "A compact memory and context framework exploring persistent notes, structured recall, continuity, and token-aware response workflows.", "https://github.com/NeurosynLabs/MARMalade"],
  ["Memora", "An offline-first conversation archive explorer for importing, searching, merging, summarizing, and exporting ChatGPT histories.", "https://github.com/NeurosynLabs/Memora"],
  ["MergeSight Editor", "A privacy-first text and code comparison workspace with synchronized line-by-line editing, preview, merge, and export.", "https://github.com/NeurosynLabs/MergeSight-Editor"],
  ["Prompt Guru", "A prompt-building and teaching environment with model controls, validation concepts, conversational workflows, and transcript export.", "https://github.com/NeurosynLabs/Prompt-Guru"],
  ["AI Prompt Splitter", "A browser-based utility that divides large documents into AI-friendly sections with token estimates, natural breakpoints, and configurable overlap.", "https://github.com/NeurosynLabs/ai-prompt-splitter"]
];

function updateMeta(selector, attribute, value, tagName) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
  return element;
}

export default function AboutPage() {
  useEffect(() => {
    document.title = "The Creative Ecosystem Behind Syntient Records | Synova Media";
    updateMeta('meta[name="description"]', "content", "Independent music, original creative direction, artist development, visual production, marketing, and custom technology under one connected creative operation.", "meta");
    updateMeta('meta[property="og:title"]', "content", "The Creative Ecosystem Behind Syntient Records | Synova Media", "meta");
    updateMeta('meta[property="og:description"]', "content", "Independent artists, original creative direction, music releases, visual storytelling, marketing, and custom-built technology, connected under Synova Media.", "meta");
    updateMeta('link[rel="canonical"]', "href", "https://www.syntientrecords.com/About", "link");

    return () => {
      document.title = "Syntient Records | Independent Music, Artists & Creative Technology";
      updateMeta('meta[name="description"]', "content", "Syntient Records is an independent California record label within Synova Media, supporting distinctive artists through original creative direction, AI-assisted music workflows, visual storytelling, artist marketing, and custom technology.", "meta");
      updateMeta('meta[property="og:title"]', "content", "Syntient Records | Independent Music, Artists & Creative Technology", "meta");
      updateMeta('meta[property="og:description"]', "content", "Independent sound. Original creative direction. Artist support, visual storytelling, marketing, and custom technology within the Synova Media ecosystem.", "meta");
      updateMeta('link[rel="canonical"]', "href", "https://www.syntientrecords.com/", "link");
    };
  }, []);

  return (
    <Box className="page-shell">
      <SiteHeader />
      <main className="about-main">
        <Container maxW="7xl">
          <section className="about-intro">
            <div className="eyebrow">SYNOVA MEDIA CREATIVE ECOSYSTEM / CALIFORNIA</div>
            <Heading as="h1" className="about-title">ONE CREATIVE ENGINE.<br /><span>MANY WORLDS.</span></Heading>
            <Text className="about-lede">SYNTIENT RECORDS is the independent music label within SYNOVA MEDIA, a creator-led operation connecting music, writing, visual production, marketing, and custom technology. The artists are distinct. The infrastructure behind them is shared, deliberately built, and constantly evolving.</Text>
            <Text className="about-copy about-intro-copy">From the first concept and first line of writing to the finished song, visual identity, video, campaign, and digital tools around it, each part of the operation is designed to strengthen the others.</Text>
            <div className="about-proof-strip">
              <span>INDEPENDENT MUSIC</span><span>HUMAN-LED CREATION</span><span>AI-ASSISTED WORKFLOWS</span><span>CREATIVE TECHNOLOGY</span>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">01 / THE LEAD ORCHESTRATOR</div>
            <div className="about-section-content">
              <div className="eyebrow">THE UMBRELLA / THE DIRECTION / THE CONNECTIONS</div>
              <Heading as="h2">SYNOVA MEDIA.<br />The force connecting the work.</Heading>
              <Text className="about-copy">SYNOVA MEDIA is the lead orchestrator of the entire ecosystem. It provides the overarching creative direction, connects the individual divisions, and coordinates how ideas move from concept to finished work. It is where the wider strategy lives: brand development, business direction, digital presence, cross-project planning, and the marketing that brings the work to its audience.</Text>
              <Text className="about-copy">SYNOVA MEDIA also manages the broader video and visual direction across the operation. Its marketing work supports the portfolio as a whole, while SYNTIENT RECORDS carries out the artist-specific promotion and release marketing for the acts on its roster. That separation keeps the label focused on its artists while the parent operation maintains a consistent, connected identity.</Text>
              <a className="about-inline-link" href="https://synovamedia.com/" target="_blank" rel="noreferrer">VISIT SYNOVA MEDIA <ArrowUpRight size={15} /></a>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">02 / THE OPERATING STRUCTURE</div>
            <div className="about-section-content">
              <Heading as="h2">Distinct disciplines.<br />One connected ecosystem.</Heading>
              <div className="division-grid">
                <article className="division-card division-lead">
                  <div className="eyebrow">LEAD ORCHESTRATOR</div>
                  <Heading as="h3">SYNOVA MEDIA</Heading>
                  <Text>Overall direction, business and brand strategy, cross-project coordination, video oversight, digital presence, and ecosystem-wide marketing.</Text>
                  <a href="https://synovamedia.com/" target="_blank" rel="noreferrer">SYNOVAMEDIA.COM <ArrowUpRight size={14} /></a>
                </article>
                <article className="division-card">
                  <div className="eyebrow">MUSIC LABEL</div>
                  <Heading as="h3">SYNTIENT RECORDS</Heading>
                  <Text>Artist support, creative development, music projects, release planning, catalog presentation, and artist-specific promotion.</Text>
                  <a href="https://www.syntientrecords.com/" target="_blank" rel="noreferrer">EXPLORE THE LABEL <ArrowUpRight size={14} /></a>
                </article>
                <article className="division-card">
                  <div className="eyebrow">VISUAL DESIGN + MOTION</div>
                  <Heading as="h3">SYNCAPE STUDIOS</Heading>
                  <Text>Graphic design, visual identity systems, artwork, motion graphics, animation, and the visual assets that give each project its own recognizable world.</Text>
                </article>
                <article className="division-card">
                  <div className="eyebrow">WRITING + CONCEPT DEVELOPMENT</div>
                  <Heading as="h3">SYNOVASOUL</Heading>
                  <Text>Technical and spiritual exploration, AI prompt design, conceptual thinking, and creative writing beyond music. Ideas and written material developed here can also flow into projects under SYNTIENT RECORDS.</Text>
                </article>
                <article className="division-card">
                  <div className="eyebrow">RESEARCH + ENGINEERING</div>
                  <Heading as="h3">NEUROSYN LABS</Heading>
                  <Text>Software development, AI systems, prompt engineering, experimental research, and custom-built tools that expand what the creative operation can do.</Text>
                  <a href="https://github.com/orgs/Neurosyn-Dev/repositories" target="_blank" rel="noreferrer">EXPLORE THE ENGINEERING ORG <ArrowUpRight size={14} /></a>
                </article>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">03 / SYNTIENT RECORDS</div>
            <div className="about-section-content">
              <div className="eyebrow">INDEPENDENT RECORD LABEL / ARTIST DEVELOPMENT</div>
              <Heading as="h2">Different sounds.<br />Individual identities.<br />A shared creative backbone.</Heading>
              <Text className="about-copy">SYNTIENT RECORDS supports a growing roster of independent music projects that move across genres rather than follow one commercial formula. Each act has its own sound, identity, and creative world. The label brings those projects together through artist development, release planning, catalog presentation, and focused promotion, while the wider SYNOVA MEDIA ecosystem supplies visual, technical, and strategic support.</Text>
              <Text className="about-copy">The creative process is human-led and technology-enabled. Original concepts, writing, lyrical direction, and project identity come from JP Gainer. AI-assisted music tools help turn those ideas into new sounds and arrangements, while custom-built workflows, production tools, visual systems, and marketing infrastructure help carry each project further.</Text>
              <div className="about-roster-stats">
                <div><strong>60+</strong><span>RELEASED LIL SYNN TRACKS</span></div>
                <div><strong>4+ HRS</strong><span>OF LIL SYNN MUSIC</span></div>
                <div><strong>8</strong><span>ROSTER PROJECTS</span></div>
              </div>
              <div className="project-list">
                {roster.map((artist) => (
                  <article className="project-row" key={artist.name}>
                    <div className="project-number">{artist.number}</div>
                    <div>
                      <Heading as="h3">{artist.name}</Heading>
                      <div className="project-genre">{artist.descriptor}</div>
                      <Text>{artist.description}</Text>
                    </div>
                    {artist.href ? (
                      <a href={artist.href} target="_blank" rel="noreferrer" aria-label={"Visit " + artist.name}><ArrowUpRight size={19} /></a>
                    ) : (
                      <span className="project-pending" aria-label="Official link pending">LINK PENDING</span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">04 / THE CREATIVE ARCHITECT</div>
            <div className="about-section-content">
              <div className="eyebrow">ORIGINAL WRITING / CREATIVE DIRECTION / SYSTEMS THINKING</div>
              <Heading as="h2">JP Gainer.<br />The ideas, the words, and the tools.</Heading>
              <Text className="about-copy">At the center of the operation is JP Gainer, whose work spans creative writing, music concepts, artist identities, technology, and the systems that connect them. He develops the ideas behind projects, writes and shapes creative material, builds the prompt structures that guide AI-assisted work, and designs the technical workflows used to turn those ideas into finished releases and media.</Text>
              <Text className="about-copy">That combination matters. The same person shaping a song's emotional direction can also engineer a tool to solve a production problem, build a workflow to make a process repeatable, or develop a digital experience to present the finished work. The technology is not separate from the art. It is built around real creative needs and refined through actual use.</Text>
              <Text className="about-copy">LIL SYNN is the project that receives the greatest share of JP's ongoing creative and technical work, and the clearest example of that full cycle: more than 60 released tracks, representing over four hours of music, supported by a growing catalog, videos, artwork, visual storytelling, and an expanding digital universe. The music is developed through AI-assisted creation and then shaped through a deliberate production process, including FL Studio, iZotope Ozone, and additional VST tools for mastering.</Text>
              <Text className="about-copy">JP also builds the knowledge systems behind the workflow. The LIL SYNN Suno V6 guide is a substantial, continuously maintained creator reference covering prompt design, lyric and arrangement strategy, model behavior, editing, stems, production, testing, troubleshooting, and release preparation. It turns hard-won experimentation into repeatable knowledge that can improve the work across the roster.</Text>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">05 / NEUROSYN LABS</div>
            <div className="about-section-content">
              <div className="eyebrow">SOFTWARE / AI / AUDIO / VIDEO / CREATIVE SYSTEMS</div>
              <Heading as="h2">Build the tools.<br />Improve the creative process.</Heading>
              <Text className="about-copy">NEUROSYN LABS is the research and engineering arm of the ecosystem. Its work ranges from audio intelligence and AI-driven video systems to productivity software, prompt-engineering frameworks, document tools, and developer utilities. These projects demonstrate a practical approach to technology: identify a real problem, design a system around it, test the workflow, and improve it through use.</Text>
              <Text className="about-copy">The direct benefit to SYNTIENT RECORDS is a growing set of tools and technical capabilities that can be applied to music creation, audio analysis, visual production, content development, organization, and release operations. Instead of relying entirely on off-the-shelf workflows, the operation can build and adapt its own.</Text>
              <div className="tech-project-grid">
                {technologyProjects.map((project) => (
                  <article className="tech-project-card" key={project.name}>
                    <div className="eyebrow">{project.category}</div>
                    <Heading as="h3">{project.name}</Heading>
                    <Text>{project.description}</Text>
                    <a href={project.href} target="_blank" rel="noreferrer">{project.label} <ArrowUpRight size={14} /></a>
                  </article>
                ))}
              </div>
              <div className="about-github-links">
                <a href="https://github.com/LILSYNNOFFICIAL?tab=repositories" target="_blank" rel="noreferrer"><span>PERSONAL GITHUB REPOSITORIES</span><strong>GitHub Repo <ArrowUpRight size={15} /></strong></a>
                <a href="https://github.com/orgs/Neurosyn-Dev/repositories" target="_blank" rel="noreferrer"><span>ACTIVE ENGINEERING ORGANIZATION</span><strong>GitHub Org <ArrowUpRight size={15} /></strong></a>
                <a href="https://github.com/NeurosynLabs?tab=repositories" target="_blank" rel="noreferrer"><span>EARLIER RESEARCH + TOOLING ARCHIVE</span><strong>NeuroSyn Labs / Predecessor <ArrowUpRight size={15} /></strong></a>
              </div>
              <div className="legacy-projects">
                <div className="eyebrow">EARLIER NEUROSYN LABS PROJECTS</div>
                <div className="legacy-project-list">
                  {legacyProjects.map(([name, description, href]) => (
                    <article key={name}>
                      <div><Heading as="h3">{name}</Heading><Text>{description}</Text></div>
                      <a href={href} target="_blank" rel="noreferrer" aria-label={"Explore " + name}><ArrowUpRight size={17} /></a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-label">06 / VISUALS + MARKETING</div>
            <div className="about-section-content">
              <Heading as="h2">A project is more than its audio.</Heading>
              <Text className="about-copy">A release needs a world around it. SYNOVA MEDIA coordinates the larger marketing strategy, video direction, digital presentation, and cross-project visibility. SYNCAPE STUDIOS develops the graphic design, animation, and visual identity systems that make each project recognizable. SYNTIENT RECORDS then focuses that infrastructure into artist-specific campaigns, release promotion, and audience development.</Text>
              <Text className="about-copy">That means artwork, motion, video, messaging, web experiences, and music are not treated as disconnected deliverables. They are coordinated parts of a single creative presentation, built to give each artist a stronger identity and every release a more complete life beyond the streaming link.</Text>
            </div>
          </section>

          <section className="about-section recognition-section">
            <div className="about-section-label">07 / RECOGNITION</div>
            <div className="about-section-content">
              <div className="eyebrow">SIQA / 2026</div>
              <Heading as="h2">A meaningful milestone.</Heading>
              <Text className="about-copy">LIL SYNN is SIQA verified. In 2026, the album <em>HELLO GOODBYE</em> was shortlisted for Album of the Year nomination consideration at the SIQA awards event in Los Angeles. It did not advance into the final five, but being shortlisted was a meaningful honor and an important milestone for the project and for the wider conversation around AI-assisted music.</Text>
            </div>
          </section>

          <section className="about-closing">
            <div className="eyebrow">SYNOVA MEDIA / SYNTIENT RECORDS</div>
            <Heading as="h2">Original ideas.<br />Built into something real.</Heading>
            <Text className="about-copy">Independent artists, original writing, custom technology, visual storytelling, and connected marketing. One creative ecosystem with room to keep building.</Text>
            <a className="about-inline-link" href="https://synovamedia.com/" target="_blank" rel="noreferrer">CONNECT WITH SYNOVA MEDIA <ArrowUpRight size={15} /></a>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </Box>
  );
}
