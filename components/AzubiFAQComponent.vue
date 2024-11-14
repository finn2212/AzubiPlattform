<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Häufig gestellte Fragen
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="pt-6"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="text-base font-semibold">
                    {{ faq.question }}
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                    <MinusSmallIcon
                      v-else
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
    {
      question: "Wie finde ich einen passenden Ausbildungsplatz?",
      answer:
        "Nutze unsere Plattform, um Unternehmen in deiner Nähe zu entdecken. Wir bieten auch Tipps für Bewerbungen und Vorstellungsgespräche.",
    },
    {
      question: "Welche Kurse bietet die Plattform an?",
      answer:
        "Unser Angebot reicht von Grundlagen in IT und Programmierung bis hin zu fortgeschrittenen Themen wie Netzwerksicherheit und Datenbanken.",
    },
    {
      question: "Gibt es Unterstützung bei Prüfungen?",
      answer:
        "Ja, wir haben spezielle Module zur Vorbereitung auf IT-Prüfungen und Zertifikate. Zusätzlich kannst du dich mit anderen Azubis in unserer Community austauschen.",
    },
    {
      question: "Kann ich mein Lerntempo selbst bestimmen?",
      answer:
        "Natürlich! Unsere Plattform ermöglicht es dir, in deinem eigenen Tempo zu lernen und Fortschritte flexibel zu gestalten.",
    },
    {
      question: "Wie funktioniert die Anmeldung für Unternehmen?",
      answer:
        "Unternehmen können sich registrieren, um Stellenangebote zu veröffentlichen und mit motivierten Azubis in Kontakt zu treten.",
    },
  ]
  </script>
  