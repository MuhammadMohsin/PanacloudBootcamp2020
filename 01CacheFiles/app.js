if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js") // service worker file location
    .then(function() {
      console.log("Service Worker Registered Successfully");
    })
    .catch(function(error) {
      console.error("Something goes wrong while registering service worker");
      console.log(error);
    });
} else {
  console.log("Service Worker is not available");
}
