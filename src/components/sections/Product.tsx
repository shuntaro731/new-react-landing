import { productItems } from "../../utils/product-data";

interface ProductItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

function ProductCard({ id, title, description, image }: ProductItemProps) {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="text-2xl font-display font-bold text-heading-1">
          {title}
        </h3>
        <p className="text-base text-heading-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export const Product = () => {
  return (
    <section id="product" className="bg-body py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-heading-1">
            Our Works
          </h1>
          <p className="text-lg text-heading-3">
            革新的なAIソリューションで実現した、クライアントの成功事例をご紹介します
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {productItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
