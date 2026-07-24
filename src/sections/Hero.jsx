import Container from "../components/layout/Container";
import Logo from "../components/brand/Logo";
import Button from "../components/ui/Button";
import Avatar from "../components/ui/Avatar";
import IconButton from "../components/ui/IconButton";
import SupportMenu from "../components/ui/SupportMenu";
import WaveDivider from "../components/ui/WaveDivider";

import { brand } from "../config/brand";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-text)]">
      <Container>
        <section
          className="
            relative
            flex
            min-h-screen
            flex-col
            items-center
            pt-10
            md:pt-12
          "
        >
          <div className="absolute right-0 top-0">
            <SupportMenu />
          </div>

          <Logo />

          <Button
            href={brand.cta.href}
            className="mt-10 w-full max-w-sm"
          >
            {brand.cta.label}
          </Button>

          <nav
            aria-label="Social Links"
            className="mt-6 flex items-center justify-center gap-4"
          >
            {brand.socialLinks.map((link) => (
              <IconButton
                key={link.id}
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            ))}
          </nav>

          <Avatar
            src={heroImage}
            alt={brand.name}
            className="mt-12 w-full max-w-lg"
          />
        </section>
      </Container>

      <WaveDivider />
    </main>
  );
}

export default Hero;