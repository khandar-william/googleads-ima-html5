window.addEventListener('load', () => {
  const players = videojs.getPlayers();
  const myPlayer = players[Object.keys(players)[0]];

  myPlayer.ready(() => {
    myPlayer.ima3.settings.serverUrl = '';
  });
});
