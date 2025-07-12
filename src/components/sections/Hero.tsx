import Container from "../shared/Container";

const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {""}
      <Container>
        <div
          className="absolute -left-6 lg:top-28 w-24 h-24 router-90 skew-x-12
          rounded-3xl bg-gradient-to-r from-blue-600 to-violet-500"
        ></div>
      </Container>
    </section>
  );
};

export default Hero;
