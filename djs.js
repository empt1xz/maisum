const user1 = "http://localhost:3000/discord-avatar/1203142305494732853"
    fetch(user1)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.emp').src = data.avatarURL
        });

        const user2 = "http://localhost:3000/discord-avatar/929778158922772541"
    fetch(user2)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.best').src = data.avatarURL
        });

        const user3 = "http://localhost:3000/discord-avatar/852317704446541834"
    fetch(user3)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.borges').src = data.avatarURL
        });

        const user4 = "http://localhost:3000/discord-avatar/1006673602730545253"
    fetch(user4)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.gkn').src = data.avatarURL
        });

        const user5 = "http://localhost:3000/discord-avatar/1202716538503696418"
    fetch(user5)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.miguel').src = data.avatarURL
        });

        const user6 = "http://localhost:3000/discord-avatar/327456311069376512"
    fetch(user6)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.chunin').src = data.avatarURL
        });

        const user7 = "http://localhost:3000/discord-avatar/1174323275250270269"
    fetch(user7)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.luck').src = data.avatarURL
        });

        const user8 = "http://localhost:3000/discord-avatar/999130167597350942"
    fetch(user8)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.motta').src = data.avatarURL
        });

 