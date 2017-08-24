export default async function recentTabSuggestions () {
  const { tabHistory } = await browser.runtime.getBackgroundPage();
  const tabs = await browser.tabs.query({});
  return tabHistory
    .map((tabId) => {
      const { id, windowId, title, url } = tabs.find((tab) => tab.id === tabId);
      return {
        type: 'tab',
        tabId: id,
        windowId,
        score: undefined,
        title,
        url
      };
    });
}