import Card from "@/components/layouts/features-section/Card";
import Typography from "@/components/ui/Typography";

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-12 md:py-20 w-full scroll-mt-20">
      <div className="relative w-full max-w-[1536px] mx-auto flex flex-col px-4 gap-y-8 md:gap-y-20 items-center justify-center">
        <div className="relative flex flex-col gap-y-2 md:gap-y-4 text-center">
          <Typography
            variant={"subtitle"}
            className="font-light text-primary font-lexend uppercase"
          >
            Features
          </Typography>
          <Typography
            as="h2"
            variant={"h2"}
            className="text-font font-medium font-lora"
          >
            Everything you need
          </Typography>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
          <Card
            image="/card-1.svg"
            subImage="/card-chart.svg"
            title="Energy Balance"
            caption="Monitor your energy availability in real-time to prevent burnout."
          />
          <Card
            image="/card-2.png"
            subImage="/card-curve.svg"
            title="Pattern Recognition"
            caption="Observe trends in your data so you can predict your next optimum performance window."
          />
          <Card
            image="/card-3.png"
            subImage="/card-table.svg"
            title="Nutrition Scanner"
            caption="Track essential nutrients for overall wellness at every stage of your life."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
