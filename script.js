const video = document.getElementById('video');
const subtitle = document.getElementById('subtitle');

video.addEventListener('timeupdate', function() {
    const currentTime = Math.floor(video.currentTime);
    // Mapeie o tempo atual do vídeo para suas legendas em português.
    // Exemplo: const subtitles = {1: 'Texto da legenda em 1 segundo', 5: 'Texto da legenda em 5 segundos'};
    // Substitua "subtitles" pelo seu conjunto de legendas.
    const subtitles = {
        1: 'Texto da legenda em 1 segundo',
        5: 'Texto da legenda em 5 segundos'
    };
    
    if (subtitles[currentTime]) {
        subtitle.textContent = subtitles[currentTime];
    }
});