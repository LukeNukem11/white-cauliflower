const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // To store the deferred prompt event

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button or take any other appropriate action
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Prompt the user to install the app
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    // Check the user's choice
    if (result.outcome === 'accepted') {
      console.log('App installed successfully!');
    } else {
      console.log('App installation declined.');
    }
    // Clear the deferred prompt variable
    deferredPrompt = null;
    // Hide the install button or take any other appropriate action
    butInstall.style.display = 'none';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed.');
  // Perform any necessary post-installation tasks
});

