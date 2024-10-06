self.addEventListener('install', (event) => {
  console.log('Service Worker installing.', event)
})

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.', event)
})
