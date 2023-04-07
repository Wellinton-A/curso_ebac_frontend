document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/Wellinton-A')
        .then(resp => resp.json())
        .then(data => {
            const photo = data.avatar_url
            const name = data.name;
            const userName = data.login
            const repo = data.public_repos
            const followers = data.followers
            const following = data.following
            const url = data.html_url

            document.getElementsByClassName('profile-avatar')[0].src = photo;
            document.getElementsByClassName('profile-name')[0].innerHTML = name;
            document.getElementsByClassName('profile-username')[0].innerHTML = `@${userName}`;
            document.getElementsByClassName('numbers-item')[0].childNodes[2].nodeValue = repo;
            document.getElementsByClassName('numbers-item')[1].childNodes[2].nodeValue = followers;
            document.getElementsByClassName('numbers-item')[2].childNodes[2].nodeValue = following;
            document.getElementsByClassName('profile-link')[0].href = url;
            console.log(url)
        });
});