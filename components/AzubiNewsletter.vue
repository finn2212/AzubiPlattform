<template>
    <div class="bg-white py-16 sm:py-24 lg:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 class="max-w-xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          Bleib informiert! Melde dich für unseren Newsletter an.
        </h2>
        <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div class="flex gap-x-4">
            <label for="email-address" class="sr-only">E-Mail-Adresse</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
              placeholder="Gib deine E-Mail-Adresse ein" 
            />
            <button 
              type="submit" 
              class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Abonnieren
            </button>
          </div>
          <p class="mt-4 text-sm/6 text-gray-900">
            Wir kümmern uns um den Schutz deiner Daten. Lies unsere <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Datenschutzrichtlinien</a>.
          </p>
        </form>
      </div>
    </div>
  </template>
  