"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">
        <ScrollReveal className="lg:col-span-5">
          <span className="text-[11px] uppercase tracking-[0.35em] text-brass-soft">
            Inquire
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl">
            A limited few homes remain.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <p className="font-display text-2xl text-paper">
              Thank you — we&rsquo;ll be in touch shortly.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name" className="text-paper/70">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="border-paper/20 bg-transparent text-paper placeholder:text-paper/30 focus-visible:border-brass"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-paper/70">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-paper/20 bg-transparent text-paper placeholder:text-paper/30 focus-visible:border-brass"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message" className="text-paper/70">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="border-paper/20 bg-transparent text-paper placeholder:text-paper/30 focus-visible:border-brass"
                />
              </div>
              <Button
                type="submit"
                className="mt-2 w-fit bg-brass text-ink hover:bg-brass-soft"
              >
                Request the brochure
              </Button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
