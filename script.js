document.addEventListener('DOMContentLoaded', function() {
 const apiKey = 'UNSPLASH_ACCESS_KEY';
 const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
 const imageElement = document.getElementById('unsplashImage');
 const photographerNameElement = document.getElementById('photographerName');
 const likeButton = document.getElementById('likeButton');
 const likeCountElement = document.getElementById('likeCount');
 let likeCount = 0;

 function fetchImage() {
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             imageElement.src = data.urls.regular;
             photographerNameElement.textContent = `Photo by ${data.user.name}`;
             imageElement.alt = `Photo by ${data.user.name}`;
         })
         .catch(error => {
             console.error('Error fetching image:', error);
             photographerNameElement.textContent = 'Failed to load image from Unsplash.';
         });
 }

 likeButton.addEventListener('click', () => {
     likeCount++;
     likeCountElement.textContent = likeCount;
 });

 fetchImage();
});
