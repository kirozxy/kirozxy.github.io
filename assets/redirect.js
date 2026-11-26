'use strict';

(() => {
    const destination = new URL('https://kirozxy.dev/');
    // Keep URLs on the official domain, including common old app deep links.
    const knownRoutes = new Set([
        '/kiroemu', '/kiroemu.html', '/kiroj2me', '/kiroj2me.html',
        '/retro-player', '/retro-player.html', '/mobile', '/mobile.html'
    ]);
    const route = window.location.pathname.replace(/\/+$/, '') || '/';
    if (knownRoutes.has(route)) destination.pathname = route;
    destination.search = window.location.search;
    destination.hash = window.location.hash;

    for (const link of document.querySelectorAll('[data-destination]')) {
        link.href = destination.href;
    }
    const label = document.getElementById('destination-label');
    if (label) label.textContent = destination.hostname + (destination.pathname === '/' ? '' : destination.pathname);
    const status = document.getElementById('redirect-status');
    if (status) status.textContent = 'Redirecting in 3 seconds…';

    // Replace the current history entry to avoid a redirect loop on Back.
    window.setTimeout(() => window.location.replace(destination.href), 3000);
})();
