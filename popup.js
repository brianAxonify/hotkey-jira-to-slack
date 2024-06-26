(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('openLinkButton');
    button.addEventListener('click', () => {
      // Send a message to the background script to execute the function in the content script
      chrome.runtime.sendMessage({
        action: "openSlackLink"
      });
    });
  });
})();
