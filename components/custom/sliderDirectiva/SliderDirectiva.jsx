import AboutDirectiva from "../aboutDirectiva/AboutDirectiva";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function SliderDirectiva() {
  return (
    <Carousel className="mx-auto max-w-[70%]" data-aos="zoom-in">
      <CarouselContent>
        <CarouselItem>
          <AboutDirectiva
            src="/sergio.png"
            nombre="Sergio Cruise"
            cargo="Founder & Chairman"
          />
        </CarouselItem>
        <CarouselItem>
          <AboutDirectiva
            src="/miriam.png"
            nombre="Miriam Watsone"
            cargo="Managing Director"
            className="w-[10.7rem]"
          />
        </CarouselItem>
        <CarouselItem>
          <AboutDirectiva
            src="/will.png"
            nombre="Will Monrer"
            cargo="Product Designer"
            className="w-[12rem]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
