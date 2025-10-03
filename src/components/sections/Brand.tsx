import Container from "../shared/Container";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

const Brand = () => {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <Container className="mb-24">
        <div className="text-sm sm:text-base text-heading-1 font-medium text-left">
          (OUR PARTNERS)
        </div>
      </Container>
      <div className="flex gap-8 sm:gap-24 animate-scroll">
        {[...logos, ...logos].map((logo, key) => (
          <div
            key={key}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
          >
            <img
              src={`/src/assets/logos/${logo}.png`}
              width="140"
              height="60"
              alt={logo}
              className="h-8 sm:h-12 w-auto opacity-60 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
