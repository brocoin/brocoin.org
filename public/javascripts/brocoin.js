var song = new Audio('http://static.brocoin.org/sounds/getting-money-mayne.ogg');
song.volume = 0.3;
if (typeof song.loop == 'boolean') song.loop = true;
else song.addEventListener('ended', function() { this.currentTime = 0; this.play(); }, false);
song.play();