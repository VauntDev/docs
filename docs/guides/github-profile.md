---
sidebar_label: "Github Profile"
title: Github Profile
sidebar_position: 1
---

GitHub provides users with the ability to customize their profile pages by creating a profile readme file. You can learn more about managing your GitHub readme here.

In short, the readme file is a simple markdown file that can be used to describe yourself. GitHub has a wide range of support for markdown features and if you are new to markdown, you can find an introduction from GitHub here.

We have taken advantage of this awesome Github feature by leveraging the basic HTML support provided to embed our Developer Cards.

Once you have created a user repository with a readme file, simply add the following lines and replace github_username with your username.

```html
<p>
    <a href="https://vaunt.dev">
        <img src="https://api.vaunt.dev/entities/{{github_username}}/contributions?format=svg" width="350" />
    </a>
</p>
```

That's it!

You can find a complete readme example [here](https://github.com/jeff1010322/jeff1010322/blob/main/README.md).