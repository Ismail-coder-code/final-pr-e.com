const games = [
    { id: 1, title: 'Xbox Game Pass', image: 'https://play-lh.googleusercontent.com/IEfDtMttybHdnlOTB8MPCC0E3WNLpB6YR3xs4lsYvkamZd58F0HQMtMSIWS9kZ5Alg'},
    { id: 20, title: 'PlayStation Plus', image: 'https://i.ytimg.com/vi/5StHEUsIV3Q/maxresdefault.jpg'},
    { id: 1, title: 'Red Dead Redemption 2', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956' },
    { id: 2, title: 'GTA V', image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1695060909' },
    { id: 3, title: 'Call of Duty', image: 'https://cdn.akamai.steamstatic.com/steam/apps/2000950/header.jpg?t=1678294805' },
    { id: 4, title: 'Cricket 24', image: 'https://cdn.akamai.steamstatic.com/steam/apps/2358260/header.jpg?t=1696812737' },
    { id: 5, title: 'Mafia Definitive Edition', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1030840/header.jpg?t=1632420251' },
    { id: 6, title: 'Watch Dogs Legion', image: 'https://cdn.akamai.steamstatic.com/steam/apps/2239550/header.jpg?t=1692817793' },
    { id: 7, title: 'Assassins Creed Valhalla', image: 'https://c4.wallpaperflare.com/wallpaper/837/942/437/assassin-s-creed-valhalla-viking-video-games-video-game-art-digital-art-hd-wallpaper-preview.jpg' },
    { id: 8, title: 'Max Payne-3 ', image: 'https://c4.wallpaperflare.com/wallpaper/247/100/843/max-payne-rockstar-games-max-payne-3-movies-wallpaper-preview.jpg' },
    { id: 9, title: 'CyberPunk 2077', image: 'https://c4.wallpaperflare.com/wallpaper/410/716/989/cyberpunk-2077-video-games-gun-3d-yellow-background-hd-wallpaper-preview.jpg' },
    { id: 10, title: 'Forza Horizon', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1704822841' },
    { id: 11, title: 'Witcher III', image: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1693590732' },
    { id: 12, title: 'Assassins creed Syndicate', image: 'https://cdn.akamai.steamstatic.com/steam/apps/368500/header.jpg?t=1692034785' },
    { id: 11, title: 'Halo', image: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/header.jpg?t=1670458602' },
    { id: 12, title: 'Far Cry 6', image: 'https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg?t=1697654297' },
    { id: 13, title: 'WWE 2K24', image: 'https://assets.xboxservices.com/assets/be/2a/be2ace6d-304d-4094-9853-e8b0e97f8aad.jpg?n=242424_Large-tout-0_1083x1222_Alternate.jpg' },
    { id: 14, title: 'SIMS 24', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg?t=1705600873' },
    { id: 15, title: 'Hitman', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1698922867' },
    { id: 16, title: 'DRAGON BALL FighterZ', image: 'https://cdn.akamai.steamstatic.com/steam/apps/678950/header.jpg?t=1687902534' },
    { id: 17, title:'TEKKEN 7', image: 'https://cdn.akamai.steamstatic.com/steam/apps/389730/header.jpg?t=1703657219' },
    { id: 18, title: 'Street Fighter 5', image: 'https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1705467952' },
    { id: 19, title: 'Mortal Kombat 11', image: 'https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1699983920' },
    { id: 21, title: 'Assassins Creed Unity', image: 'https://cdn.akamai.steamstatic.com/steam/apps/289650/header.jpg?t=1692034779'},
    { id: 25, title: 'Sekiro: Shadows Die Twice', image: 'https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg?t=1678991267' },
    {id: 26, title: 'God of War', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1695758729'},
    { id: 27, title: 'Marvels Spider-Man Remastered', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1700663145'},
    { id: 29, title: 'STAR WARS Jedi: Survivor', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1701206599'},
    { id: 30, title: 'Horizon Zero Dawn™ Complete Edition', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1698159193'},
    { id: 31, title: 'Starfield', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg?t=1704299959'},
    { id: 32, title: 'The Elder Scrolls V', image: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1701807334'},
    { id: 33, title: 'Hogwarts Legacy', image: 'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1699983982'},
    { id: 35, title: 'World War Z', image: 'https://cdn.akamai.steamstatic.com/steam/apps/699130/header.jpg?t=1701782667'},
    { id: 55, title: 'Hell Let Loose', image: 'https://cdn.akamai.steamstatic.com/steam/apps/686810/header.jpg?t=1702288339'},
    { id: 56, title: 'Battlefield V', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg?t=1701356409'},
    { id: 57, title: 'Call of Duty: Black Ops Cold War', image: 'https://cdn.akamai.steamstatic.com/steam/apps/1985810/header.jpg?t=1686345977'}
];

  function renderGameItems() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach(game => {
      const gameItem = document.createElement('div');
      gameItem.classList.add('game-item');
      gameItem.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <span>${game.title}</span>
        <button class="buy-btn" onclick="checkout('${game.title}')">
            <i class="fab fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
        </button>
    `;
      gameList.appendChild(gameItem);
    });
  }

  function checkout(title, price) {
    const whatsappNumber = '+918076061578';
    const message = encodeURIComponent(`Hello\n I want to buy ${title}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappURL;
  }

  function filterGames() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach(game => {
      if (game.title.toLowerCase().includes(input)) {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <span>${game.title}</span>
        <button class="buy-btn" onclick="checkout('${game.title}')">
            <i class="fab fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
        </button>
    `;
        gameList.appendChild(gameItem);
      }
    });
  }

  renderGameItems();