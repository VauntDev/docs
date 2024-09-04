---
sidebar_label: "Achievement Card"
title: Achievement Card
sidebar_position: 2
---

Simply add the following lines and replace {{github_username}} with your username.

```html
<p>
    <a href="https://community.vaunt.dev/board/{{github_username}}/achievements">
        <img src="https://api.vaunt.dev/v1/github/entities/{{github_username}}/achievements?format=svg&limit=3" width="350" />
    </a>
</p>
```

You can find a complete readme example [here](https://github.com/jeff1010322/jeff1010322/blob/main/README.md).
