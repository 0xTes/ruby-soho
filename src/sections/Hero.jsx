import Container from "../components/layout/Container";
import Logo from "../components/brand/Logo";
import Button from "../components/ui/Button";
import Avatar from "../components/ui/Avatar";
import WaveDivider from "../components/ui/WaveDivider";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <>
      <main
        className="
          bg-[var(--color-background)]
          text-[var(--color-text)]
        "
      >
        <Container>
          <section
            className="
              flex
              min-h-screen
              flex-col
              items-center
              justify-center
              py-20
            "
          >
            <Logo />

            <Button
              className="mt-10"
              href="#"
            >
              Subscribe
            </Button>

            <div
              className="
                mt-6
                flex
                items-center
                gap-4
              "
              aria-label="Social Links"
            >
              {/* IconButtons go here */}
            </div>

            <Avatar
              className="mt-12"
              src={heroImage}
              alt="Ruby Soho"
            />
          </section>
        </Container>

        <WaveDivider />
      </main>
    </>
  );
}

export default Hero;