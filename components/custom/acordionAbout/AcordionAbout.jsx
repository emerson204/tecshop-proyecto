import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AcordionAbout() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is our mission?</AccordionTrigger>
        <AccordionContent>
          Our mission is to provide high-quality products that meet our
          customers' needs and exceed their expectations. We are committed to
          exceptional customer service and continuous improvement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do we ensure quality?</AccordionTrigger>
        <AccordionContent>
          We ensure quality by sourcing our products from trusted suppliers and
          conducting rigorous quality checks. Our team is dedicated to
          maintaining high standards and providing only the best to our
          customers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Where are we located?</AccordionTrigger>
        <AccordionContent>
          We are based in [Your City, Your Country], but we serve customers all
          over the world. Our central location allows us to efficiently manage
          shipping and customer service operations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How can you contact us?</AccordionTrigger>
        <AccordionContent>
          You can reach us through our contact page, via email at
          [your-email@example.com], or by phone at [your phone number]. We are
          always here to help with any questions or concerns you may have.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
