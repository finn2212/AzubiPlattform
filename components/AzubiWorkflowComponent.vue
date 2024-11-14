<template>
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="azubi-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#azubi-pattern)"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <!-- Header Section -->
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold text-indigo-600">
                Dein Weg in die IT-Branche
              </p>
              <h1
                class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                Effizienter Lernen und Wachsen
              </h1>
              <p class="mt-6 text-xl text-gray-700">
                Entdecke ein verbessertes System für IT-Auszubildende, das dir hilft, deine Lernziele schneller zu erreichen – mit den richtigen Tools, Inhalten und Support.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Image Section -->
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzMyOXwwfDF8c2VhcmNofDN8fGNvbXB1dGVyJTIwdGVhbXxlbnwwfHx8fDE2ODk5MTU5NjY&ixlib=rb-1.2.1&q=80&w=1080"
            alt="IT-Azubi beim Lernen"
          />
        </div>
  
        <!-- Content Section -->
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="max-w-xl text-gray-700 lg:max-w-lg">
              <p>
                Unsere Plattform bietet dir alles, was du für eine erfolgreiche IT-Ausbildung brauchst. Von praxisnahen Tutorials bis hin zu einer aktiven Community – hier bist du richtig.
              </p>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <CloudArrowUpIcon
                    class="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong class="font-semibold text-gray-900">Zugang zu Kursmaterialien.</strong>
                    Nutze unsere umfangreiche Bibliothek, um deine Kenntnisse in IT und Programmierung auszubauen.
                  </span>
                </li>
                <li class="flex gap-x-3">
                  <LockClosedIcon
                    class="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong class="font-semibold text-gray-900">Sicheres Lernen.</strong>
                    Alle Daten und Fortschritte sind geschützt und jederzeit abrufbar.
                  </span>
                </li>
                <li class="flex gap-x-3">
                  <ServerIcon
                    class="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong class="font-semibold text-gray-900">Individuelle Lerndaten.</strong>
                    Greife auf personalisierte Analysen zu, um deinen Fortschritt zu messen.
                  </span>
                </li>
              </ul>
              <p class="mt-8">
                Egal, ob du gerade erst startest oder dich auf eine Zertifizierung vorbereitest – wir sind für dich da.
              </p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Für jeden Schritt der Ausbildung.
              </h2>
              <p class="mt-6">
                Vom ersten Einstieg bis hin zur Spezialisierung: Unsere Plattform wächst mit deinen Zielen. Bereite dich optimal auf die Anforderungen der IT-Branche vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
  </script>
  