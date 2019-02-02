var playlist = {} 
playlist.Beyonce = 'fear' 
playlist['BTS'] = 'fire' 

 

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
}

updatePlaylist(playlist,'Taylor', 'red')
console.log(playlist)