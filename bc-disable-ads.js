window.addEventListener('load', () => {
  const players = videojs.getPlayers();
  const myPlayer = players[Object.keys(players)[0]];

  myPlayer.one('loadedmetadata', () => {
    myPlayer.ima3.settings.serverUrl = '';
    myPlayer.ima3.adsLoader.getSettings().setAutoPlayAdBreaks(false);
    myPlayer.ima3.adsManager.discardAdBreak();
  });
});
