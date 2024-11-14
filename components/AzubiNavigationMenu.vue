<template>
    <header class="relative isolate z-10 bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Über Uns
              <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
              <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  <div v-for="item in products" :key="item.name" class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                    <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <a :href="item.href" class="mt-6 block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
                <div class="bg-gray-50">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <Popover>
            <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Guides & Tutorials
              <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
              <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  <div v-for="item in guidesAndTutorials" :key="item.name" class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                    <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <a :href="item.href" class="mt-6 block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
                <div class="bg-gray-50">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Was ist ein IT-Azubi?</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Grundlagen der IT</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Bewerbungstipps</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Guides & Tutorials</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Über Uns
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Guides und Tutorials
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...guidesAndTutorials, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Was ist ein IT-Azubi?</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Grundlagen der IT</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Guides & Tutorials</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/vue/20/solid'
import { CalendarIcon, ClipboardIcon, ListBulletIcon, DocumentTextIcon, InformationCircleIcon } from '@heroicons/vue/20/solid';

const products = [
  {
    name: 'Karriere starten',
    description: 'Finde den richtigen Einstieg in die IT-Welt.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Lernen & Entwickeln',
    description: 'Erkunde spannende Kurse und Tutorials.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Praktische Tipps',
    description: 'Bewerbungstipps und mehr für IT-Azubis.',
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Community',
    description: 'Vernetze dich mit anderen Azubis und Experten.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
]

const guidesAndTutorials = [
  {
    name: 'Einsteiger-Guide für IT-Azubis',
    description: 'Der perfekte Start für angehende IT-Azubis, um die Grundlagen zu verstehen.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Tutorial: Git & Versionskontrolle',
    description: 'Lerne, wie du Git und Versionskontrolle effektiv einsetzt.',
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Code-Editoren',
    description: 'Entdecke die besten Code-Editoren wie VS Code und Sublime Text.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Lernplattformen',
    description: 'Interaktive Lernressourcen für IT und Programmierung.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'IT-Zertifikate-Kalender',
    description: 'Verpasse keine wichtigen Termine für IT-Zertifizierungen.',
    href: '#',
    icon: CalendarIcon, // Replace with an appropriate icon
  },
  {
    name: 'Vorlagen für Bewerbungen',
    description: 'Professionelle Vorlagen für Lebenslauf und Anschreiben.',
    href: '#',
    icon: ClipboardIcon, // Replace with an appropriate icon
  },
  {
    name: 'Checklisten für den Ausbildungsstart',
    description: 'Alles, was du für einen erfolgreichen Ausbildungsstart brauchst.',
    href: '#',
    icon: ListBulletIcon, // Replace with an appropriate icon
  },
  {
    name: 'PDFs zu Grundlagenwissen',
    description: 'Lade hilfreiche PDFs zu wichtigen IT-Themen herunter.',
    href: '#',
    icon: DocumentTextIcon, // Replace with an appropriate icon
  }
];

const callsToAction = [
  { name: 'Guides & Tutorials', href: '#', icon: BookOpenIcon },
  { name: 'Kontakt aufnehmen', href: '#', icon: PhoneIcon },
  { name: 'Erfolgsgeschichten', href: '#', icon: RectangleGroupIcon },
]

const mobileMenuOpen = ref(false)
</script>
