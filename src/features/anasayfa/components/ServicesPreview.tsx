"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/service";
import { Container } from "@/components/Container";
import Section from "@/components/Section";

export default function ServicesPreview() {
  return (
    <Section>
      <Container className="mx-auto w-full max-w-none">
        <div className="text-center mb-8">
          <Link href="/faaliyet-alanlarim">
            <Badge className="mb-4">Faaliyet Alanlarım</Badge>
          </Link>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Gayrimenkul Hukuku ve Miras Hukuku alanlarında karşılaştığınız her
            türlü hukuki soruna çözüm üretiyor, sürecin her türlü aşamasında
            yanınızda oluyoruz.
          </p>
        </div>

        <div className="-mx-4 mb-8 flex flex-wrap justify-center">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.title}
                href="/faaliyet-alanlarim"
                className="
                  px-4 mb-8
                  w-full
                  sm:w-1/2         /* 2 kolon */
                  lg:w-1/3         /* 3 kolon  */
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl
                  block
                "
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 leading-relaxed"></CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="
              group
              bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg
              transition-all duration-300 ease-out
              hover:bg-blue-700 hover:scale-105 hover:shadow-xl
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
          >
            <Link href="/faaliyet-alanlarim">
              Tüm Faaliyet Alanlarını Görüntüle
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
