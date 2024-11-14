<template>
    <div class="relative bg-white">
      <!-- Hintergrundbild -->
      <img
        class="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        alt="Ein Azubi bei der Arbeit"
      />
      <div class="mx-auto grid max-w-7xl lg:grid-cols-2">
        <!-- Textbereich -->
        <div class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 class="text-base font-semibold text-indigo-600">Unsere Erfolge</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Vertraut von Azubis und Unternehmen deutschlandweit
            </p>
            <p class="mt-6 text-lg text-gray-600">
              Unterstütze deine IT-Ausbildung mit einer Plattform, die von Tausenden von Azubis und
              Unternehmen geschätzt wird. Hier findest du alle Ressourcen für deinen Erfolg.
            </p>
            <!-- Statistiken -->
            <dl
              class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16"
            >
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
              >
                <dt class="text-sm text-gray-600">{{ stat.name }}</dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { id: 1, name: 'Azubis auf der Plattform', value: '10,000+' },
    { id: 2, name: 'Unternehmen, die uns nutzen', value: '500+' },
    { id: 3, name: 'Erfolgreich abgeschlossene Kurse', value: '25,000+' },
    { id: 4, name: 'Zufriedenheit der Nutzer', value: '98%' },
  ]
  </script>
  