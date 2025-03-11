---
sidebar_label: "Achievement Card"
title: Achievement Card
sidebar_position: 3
---

Simply add the following lines and replace \{github_username\} with your username.

<p>
    <a href="https://community.vaunt.dev/board/jeff1010322/achievements">
        <img src="https://api.vaunt.dev/v1/github/entities/jeff1010322/achievements?format=svg&limit=3" width="350" />
    </a>
</p>

```html
<p>
    <a href="https://community.vaunt.dev/board/{github_username}/achievements">
        <img src="https://api.vaunt.dev/v1/github/entities/{github_username}/achievements?format=svg&limit=3" width="350" />
    </a>
</p>
```

Here is another style for the achievement card.
<p>
  <a href="https://community.vaunt.dev/board/jeff1010322/achievements">
    <img decoding="async" loading="lazy" src="https://api.vaunt.dev/v1/github/entities/jeff1010322/achievements?format=svg&limit=8&raw=true" width="350" />
  </a>
</p>

```html
<p>
  <a href="https://community.vaunt.dev/board/{github_username}/achievements">
    <img decoding="async" loading="lazy" src="https://api.vaunt.dev/v1/github/entities/jeff1010322/achievements?format=svg&limit=8&raw=true" width="350" />
  </a>
</p>
```


By changing the limit, you can display more than 3 achievements. The maximum value is 50. 

