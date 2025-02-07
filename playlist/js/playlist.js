/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const newPlaylist = {
      name: playlistName,
      songs: [],
    }
    playlists = [...playlists, newPlaylist];
    return newPlaylist;
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter( nameList => nameList.name !== playlistName )
      return playlists;
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    try {
      const playlist = playlists.find( ({ name }) => name === playlistName );
      if (!playlist) {
        throw new Error (`Playlist ${playlistName} not found.`);
      }
      
      // copio la playlist original, añado la propiedad favorite en false y añado la cancion.
      const updatePlaylist = {
        ...playlist,
        songs: [...playlist.songs, {...song, favorite: false}]
      };
      playlists = playlists.map( soundList => soundList.name === playlistName ? updatePlaylist : soundList )
      return updatePlaylist

    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null
    }
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {};

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {};

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;

// Prueba en consola
const myRockList = musicCatalog();

myRockList.createPlaylist('Rock');
myRockList.createPlaylist('Rock2');

// Muestra las playlists
console.log(myRockList.getAllPlaylists());

// Remove Playlist
console.log(myRockList.removePlaylist('Rock2'),'borrado');

// Add Song Playlist
try {
  
  const song = {title: 'Welcome to the jungle', artist: 'Guns N. Roses', genre: 'Rock', duration:  445};
  myRockList.addSongToPlaylist('Rock', song)

  myRockList.createPlaylist('Classic Rock');

  let newSong = {title: 'Thunderstruck', artist:'AC/DC', genre:'Rock', duration: 534};
  myRockList.addSongToPlaylist('Classic Rock', newSong);

  newSong = {title: 'Highwey to Hell', artist:'AC/DC', genre:'Rock', duration: 484} ;
  myRockList.addSongToPlaylist('Classic Rock', newSong);

  const otherSong = {title: 'Meteora', artist:'Linkin Park', genre:'Rock', duration: 434};
  myRockList.addSongToPlaylist('Gym', otherSong);
  
  console.log(myRockList.getAllPlaylists());
} catch (error) {
  console.error('Error:', error.message);
}
