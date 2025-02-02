import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$999",
    features: ["5 Pages Website", "Basic SEO", "Mobile Responsive", "1 Month Support"],
  },
  {
    name: "Professional",
    price: "$1,999",
    features: ["10 Pages Website", "Advanced SEO", "Mobile Responsive", "3 Months Support", "Custom Animations"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Pages", "Full SEO Suite", "Priority Support", "Custom Features", "Dedicated Manager"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
          <p className="mt-4 text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold">{plan.price}</p>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full">Get Started</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};