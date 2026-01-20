"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, BookIcon } from "@/components/icons";

export function EulogyTipsContent() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-light tracking-[0.2em] uppercase text-funeral-gold mb-4 block">
            Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Eulogy Tips
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Writing and delivering a eulogy is a noble gesture that is worthy of
            thought and effort. It is an opportunity to make a contribution to a
            memorial service that your friends and family will remember for a
            long time.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-md bg-funeral-gold/10 flex items-center justify-center">
              <BookIcon size={24} className="text-funeral-gold" />
            </div>
            <h2 className="text-xl font-medium">The Power of Writing</h2>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed">
            In general, writing a eulogy, a tribute, a letter, or keeping a
            journal presents another equally valuable opportunity for you - the
            ability to use the writing process as a therapeutic tool to help you
            deal with your grief. The power of writing is undeniable, and there
            is no better time than now to discover and take advantage of this.
          </p>
        </motion.div>
      </section>

      {/* What a Eulogy Should Accomplish */}
      <section className="bg-muted/30 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-8 text-center">
              What a Eulogy Should Accomplish
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                There are two common misconceptions about the purposes of a
                eulogy. Some people think 1) It should be an objective summation
                of the deceased&apos;s life, or 2) It should speak for everyone
                who is present at the memorial service. Both of these assumptions
                are unrealistic.
              </p>

              <p>
                A eulogy is much simpler. It should convey the feelings and
                experiences of the person giving the eulogy. The most touching
                and meaningful eulogies are written from a subjective point of
                view and from the heart. Don&apos;t feel compelled to write your
                loved one&apos;s life story. Instead, tell your story.
              </p>

              <p>
                Clearly, the burden of the eulogy does not have to be yours
                completely. If you have the time, ask friends or relatives for
                their recollections and stories. In a eulogy, it is perfectly
                acceptable to say, for example, &quot;I was talking to Uncle
                Lenny about Ron; he reminded me of the time Ron came to dinner
                with half of his face clean-shaven and the other half bearded. It
                was Ron&apos;s funny way of showing that he had mixed feelings
                about shaving off his beard.&quot;
              </p>

              <p>
                Honesty is very important. In most cases, there will be a lot of
                positive qualities to talk about. Once in a while, however, there
                is someone with more negative traits than positive qualities. If
                that is the case, remember, you don&apos;t have to say everything.
                Just be honest about the positive qualities and everyone will
                appreciate the eulogy.
              </p>

              <p>
                Remember, you do not have to write a perfect eulogy. Whatever you
                write and deliver will be appreciated by the people at the
                funeral. If you are inclined to be a perfectionist, lower your
                expectations and just do what you can, given the short time frame
                for preparation and your emotional state.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips for Delivering */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-center">
            Tips for Delivering a Eulogy
          </h2>

          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>
              If you decide to write and deliver a eulogy, realize that it may be
              the most difficult speech you will ever make; and it may be the
              most rewarding. It is important to realize that people are not
              going to judge you. They will be very supportive. No matter what
              happens, it will be okay. If you break down in the middle of the
              speech, everyone will understand. Take a moment to compose
              yourself, and then continue. There is no reason to be embarrassed.
              Remember, giving a eulogy is a noble gesture that people will
              appreciate and admire.
            </p>

            <p>
              If you can, make the eulogy easy to read. On a computer, print out
              the eulogy in a large type size. If you are using a typewriter, put
              extra carriage returns between the lines. If you are writing it by
              hand, print the final version in large letters and give the words
              room to breathe by writing on every second or third line.
            </p>

            <p>
              Before the service, consider getting a small bottle or cup of
              water. Keep it with you during the service. When you go to the
              podium to deliver the eulogy, take the water with you in case you
              need it. Sipping water before you start and during the speech if
              needed, will help relax you. If you are nervous before delivering
              the eulogy, breathe deeply and tell yourself that everything will
              be fine. It will be. Look around at your relatives and friends and
              realize that they are with you 100 percent. Realize that it is
              acceptable to read the eulogy without making eye contact with the
              audience, if that would be easier for you. Take your time. Do the
              best you can. No one expects you to have the delivery of a great
              orator or the stage presence of an actor. Just be you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quick Tips */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-muted/30 rounded-lg p-8"
        >
          <h3 className="text-xl font-medium mb-6">Quick Tips Summary</h3>
          <ul className="space-y-3">
            {[
              "Write from the heart - tell your personal story",
              "Gather stories from family and friends",
              "Focus on positive qualities and memorable moments",
              "Print in large font for easy reading",
              "Bring water to the podium",
              "Breathe deeply and take your time",
              "It's okay to show emotion",
              "You don't need to be perfect - just be sincere",
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-funeral-gold/10 text-funeral-gold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-muted-foreground font-light">{tip}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-funeral-navy rounded-lg p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Need Additional Support?
          </h2>
          <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
            Our caring staff is here to help you through every aspect of the
            memorial service. Don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18769520212">
              <Button className="bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90 rounded-md uppercase tracking-wider">
                <PhoneIcon size={18} />
                (876) 952-0212
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
              >
                Contact Us
                <ArrowRightIcon size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
