var playlist = {} 
playlist.Queen = 'Innuendo' 
playlist['Led Zeppelin'] = 'Black Dog' 

 

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
}

updatePlaylist(playlist,'Metallica', 'Battery')
console.log(playlist)