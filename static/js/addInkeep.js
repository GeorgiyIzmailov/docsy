const nav = document.querySelector('nav');
const sidebar = document.getElementById('td-sidebar-menu');

const inkeepNavDiv = document.createElement('div');
inkeepNavDiv.id = 'navSearchBar';
nav.appendChild(inkeepNavDiv);

const inkeepSidebarDiv = document.createElement('div');
inkeepSidebarDiv.id = 'sideSearchBar'
sidebar && sidebar.prepend(inkeepSidebarDiv)

const addInkeepWidget = ({targetElement, stylesheetUrls, isShortcutKeyEnabled}) => {
  Inkeep().embed({
    componentType: "SearchBar",
    targetElement,
    properties: {
      stylesheetUrls,
      baseSettings: {
        apiKey: "YOUR_API_KEY", // required
        integrationId: "YOUR_INTEGRATION_ID", // required
        organizationId: "YOUR_ORGANIZATION_ID", // required
        primaryBrandColor: "#26D6FF", // your brand color, widget color scheme is derived from this
        organizationDisplayName: "Inkeep",
        // ...optional settings
      },
      modalSettings: {
        // optional settings
        isShortcutKeyEnabled,
      },
      searchSettings: {
        // optional settings
      },
      aiChatSettings: {
        // optional settings
        botAvatarSrcUrl: "/favicons/android-icon-36x36.png", // use your own bot avatar
        quickQuestions: [
          "Example question 1?",
          "Example question 2?",
          "Example question 3?",
        ],
      },
    },
  });
}


sidebar && addInkeepWidget({
  targetElement: document.getElementById('sideSearchBar'),
  stylesheetUrls: ['/css/sidebar-search-bar.css'], // optional
  isShortcutKeyEnabled: false
});

addInkeepWidget({
  targetElement: document.getElementById('navSearchBar'),
  stylesheetUrls: ['/css/nav-search-bar.css'], // optional
  isShortcutKeyEnabled: true,
});