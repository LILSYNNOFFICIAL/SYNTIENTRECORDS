import { useState } from "react";
import { Box, Button, Flex, Link, Menu, Portal } from "@chakra-ui/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { roster, merchUrl } from "../data/roster.js";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box as="header" className="site-header">
      <Flex className="nav-shell" align="center" justify="space-between">
        <Link as={RouterLink} to="/" className="wordmark" aria-label="Syntient Records home">
          SYNTIENT<span>RECORDS</span>
        </Link>

        <Flex className="desktop-nav" align="center" gap={2}>
          <Link href="/masteringservices.html" className="nav-link">Mastering Services</Link>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button className="nav-link roster-trigger" variant="ghost">
                Roster <ChevronDown size={14} />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content className="roster-menu">
                  {roster.map((artist) => artist.href ? (
                    <Menu.Item key={artist.name} value={artist.name} asChild>
                      <a href={artist.href} target="_blank" rel="noreferrer">
                        <span>{artist.name}</span><span className="menu-arrow">↗</span>
                      </a>
                    </Menu.Item>
                  ) : (
                    <Menu.Item key={artist.name} value={artist.name} disabled>
                      <span className="roster-pending-item"><span>{artist.name}</span><small>LINK PENDING</small></span>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
          <Link href={merchUrl} target="_blank" rel="noreferrer" className="nav-link">Merch <span className="external-mark">↗</span></Link>
          <Link as={RouterLink} to="/About" className="nav-link">About</Link>
        </Flex>

        <Button
          className="mobile-menu-toggle"
          variant="ghost"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} /> : <MenuIcon size={21} />}
        </Button>
      </Flex>

      {mobileOpen && (
        <Box className="mobile-nav">
          <a href="/masteringservices.html" onClick={() => setMobileOpen(false)}>MASTERING SERVICES</a>
          <div className="mobile-nav-label">ROSTER</div>
          {roster.map((artist) => artist.href ? (
            <a key={artist.name} href={artist.href} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
              {artist.name}<span>↗</span>
            </a>
          ) : (
            <div key={artist.name} className="mobile-nav-pending" aria-disabled="true">
              {artist.name}<span>LINK PENDING</span>
            </div>
          ))}
          <a href={merchUrl} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>MERCH<span>↗</span></a>
          <Link as={RouterLink} to="/About" onClick={() => setMobileOpen(false)}>ABOUT</Link>
        </Box>
      )}
    </Box>
  );
}
