(function () {
  try {
    const currentHref = window.location.href;
    const currentHostname = window.location.hostname;
    const isHttps = window.location.protocol === 'https:';

    if (!isHttps || currentHostname.includes('freedium.cfd')) return;

    if (!currentHostname.endsWith('medium.com')) return;

    const newUrl = currentHref.replace('https://', 'https://freedium.cfd/');

    if (newUrl !== currentHref) {
      window.location.href = newUrl;
    }
  } catch (err) {
    console.error('Medium to Freedium Redirect error:', err);
  }
})();
