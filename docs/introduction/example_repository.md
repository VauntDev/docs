---
sidebar_label: "Example Repository"
sidebar_position: 3
---

# Achievement Configuration in Example and TQLA Repositories

At Vaunt, we've configured achievements in the [Example](https://github.com/VauntDev/example?tab=readme-ov-file#available-awards) and [TQLA](https://github.com/VauntDev/example) repositories to demonstrate how Vaunt supports open-source discovery. These pages showcase practical implementations to guide you through the process.

In the Example repo, we offer a basic set of achievements that are freely available, making it easy to get started with testing. 

```yaml
version: 0.0.1
achievements:
  - achievement:
      name: Shooting Star
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/shooting_star.png
      description: Awarded for starring our repository, make a wish!
      triggers:
        - trigger:
            actor: author
            action: star
            condition: starred = true
  - achievement:
      name: Every Bit Counts
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/every_bit_counts.png
      description: No commit is too small!
      triggers:
        - trigger:
            actor: author
            action: commit
            condition: count() >= 1
  - achievement:
      name: Pull Request Hero
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/pull_request_hero.png
      description: You're a PR hero, rock on!
      triggers:
        - trigger:
            actor: author
            action: pull_request
            condition: merged = true
  - achievement:
      name: Closer
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/closer.png
      description: Only closers get coffee!
      triggers:
        - trigger:
            actor: author
            action: issue
            condition: closed = true
```    

Additionally, the TQLA repository includes more advanced achievements designed to boost engagement and interaction within your community.
