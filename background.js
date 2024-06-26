
function findAndOpenLink() {
  const links = document.querySelectorAll('a[href*="axonify.slack.com"]');
  if (links.length > 0) {
    const firstLink = links[0].href;
    window.open(firstLink, '_blank');
  } else {
    alert("No Axonify Slack links found on this page.");
  }
}


chrome.commands.onCommand.addListener((command) => {
  if (command === "open_slack_link") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      if (tabs.length > 0) {
        console.log("Tabs found:", tabs);
        chrome.scripting.executeScript({
          target: {
            tabId: tabs[0].id
          },
          func: findAndOpenLink
        }).catch(error => {
          console.error("Error sending message to content script:", error);
        });
      }
    });
  }
});

