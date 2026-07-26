import { motion } from "motion/react";

import Container from "../components/layout/Container";
import Logo from "../components/brand/Logo";
import Button from "../components/ui/Button";
import Avatar from "../components/ui/Avatar";
import IconButton from "../components/ui/IconButton";
import SupportMenu from "../components/ui/SupportMenu";
import WaveDivider from "../components/ui/WaveDivider";

import { brand } from "../config/brand";

import heroImage from "../assets/images/hero.jpg";

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

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
            pt-8
            pb-12
            md:pt-10
            lg:pt-12
          "
        >
          <div className="absolute right-0 top-0 md:right-2 lg:right-4">
            <SupportMenu />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <Logo />
          </motion.div>

          <motion.div
            className="mt-12 flex w-full justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: 0.12,
            }}
          >
            <Button
              href={brand.cta.href}
              className="w-full max-w-sm"
            >
              {brand.cta.label}
            </Button>
        </motion.div>

          <motion.nav
            aria-label="Social Links"
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: 0.24,
            }}
          >
            {brand.socialLinks.map((link) => (
              <IconButton
                key={link.id}
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            ))}
          </motion.nav>

          <motion.div
            className="mt-14 w-full max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: 0.36,
            }}
          >
            <Avatar
              src={heroImage}
              alt={brand.name}
            />
          </motion.div>
        </section>
      </Container>

      <WaveDivider />
    </main>
  );
}

export default Hero;