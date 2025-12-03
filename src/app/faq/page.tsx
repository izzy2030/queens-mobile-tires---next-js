import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold text-brand-dark mb-6 text-center">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                Got questions about our mobile tire service? We've got answers.
            </p>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium text-brand-dark">How does mobile tire installation work?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            We bring our fully equipped mobile tire shop to your location—whether it's your home, office, or driveway. Our technicians will mount and balance your new tires on-site, saving you a trip to the tire shop.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium text-brand-dark">Do you balance the tires?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Yes! Our mobile vans are equipped with state-of-the-art computer balancers to ensure your tires are perfectly balanced for a smooth ride.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium text-brand-dark">What areas do you serve?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            We primarily serve Queens and the surrounding areas. Please check our service area map or contact us to confirm if we can come to your specific location.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium text-brand-dark">Can I buy tires from you?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            Absolutely. We offer a wide selection of tires from all major brands. You can purchase them directly through our website and schedule your installation in one go.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium text-brand-dark">What if I already have my own tires?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            No problem! We are happy to install tires that you've purchased elsewhere. Just select the "Installation Only" option when booking your appointment.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
