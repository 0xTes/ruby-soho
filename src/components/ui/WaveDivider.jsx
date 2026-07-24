/**
 * Decorative SVG wave used to separate the hero from the footer.
 *
 * This component is intentionally presentational and should not
 * convey any semantic meaning.
 */
function WaveDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={className}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block h-24 w-full md:h-32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--color-secondary)"
          d="
            M0,96
            C180,32
            360,160
            540,112
            C720,64
            900,0
            1080,48
            C1260,96
            1350,144
            1440,96
            L1440,160
            L0,160
            Z
          "
        />
      </svg>
    </div>
  );
}

export default WaveDivider;