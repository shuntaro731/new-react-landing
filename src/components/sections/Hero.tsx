import mainImage from "../../assets/main.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col px-4 pt-60 overflow-hidden bg-body">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-center font-black leading-none tracking-tighter">
          <span className="block text-[clamp(3rem,9vw,12rem)] text-heading-1">
            Portfolio of Hata Shuntarou.
          </span>
        </h1>
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-[0.625rem] md:text-xs uppercase tracking-wider leading-relaxed mb-6 text-heading-1">
            WITH THE POWER TO CREATE TECHNOLOGY AND MECHANISMS,
            <br />
            WE WILL CREATE A NEW IMPACT ON CONSUMPTION AND DISTRIBUTION IN JAPAN
            AND,
            <br />
            BY EXTENSION, THE WORLD.
          </p>

          <div className="mb-6">
            <div className="w-1.5 h-1 md:w-2 md:h-1.5 mx-auto rouded-f bg-heading-1"></div>
          </div>

          <p className="text-base md:text-lg lg:text-xl font-sans font-normal text-heading-1">
            アイデアを形にする。
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <img
          src={mainImage}
          alt="Portfolio hero"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};
