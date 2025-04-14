---
sidebar_label: "Webhooks"
title: Webhooks
sidebar_position: 6
---

Webhooks are an additional feature that can be enabled in the Vaunt config file to set up automated messages when events occur related to your Vaunt installation.
For example, you can set up notifications to be issued when a contributor earns an Achievement.

## Example

Below is the webhooks section of the VauntDev **[Example](https://github.com/VauntDev/example)** repository, which is configured to enable notifications for all achievements earned:


```Yaml
webhooks:
  - webhook:
      name: achievements
      type: github
      metadata:
        discussion:
          repository: VauntDev/example
          title: Vaunt Achievements
      events:
        - event:
            type: achievement
            value: Shooting Star
        - event:
            type: achievement
            value: Every Bit Counts
        - event:
            type: achievement
            value: Pull Request Hero
        - event:
            type: achievement
            value: Closer
```

## Webhooks Config Structure

### Webhooks

The root `webhooks` field contains a list of webhook objects, which each describe what events the webhook cares about, and what to do when the webhook event occurs.

### Webhook Object

The webhook object contains 4 fields: `name`, `type`, `metadata`, and `events`

#### Webhook Name

The `name` field is used for uniqueness. If you have more than one webhooks configured you should give them each a unique name.
At this time, the name is not used anywhere except for your own organization.

#### Webhook Type

The `type` field is how you configure what the webhook should do.

Types:

- github - Send a notification to a github repository when the event occurs.

Right now the only supported type is `github`, but we plan on adding additional types in the future.

#### Webhook Metadata

The `metadata` field stores an object that will vary depending on the type of webhook configured.
The various metadata objects will be defined below for each supported type.

#### GitHub Metadata

The GitHub metadata objects defines where webhook events are sent for the `github` webhook type.
Vaunt supports a discussion target that will be used to post comments when a webhook event occurs.

Example discussion object fields are explained below.

- discussion
  - repository - The repository owner/name to post the discussion comment on webhook events.
  - title - The repository discussion title in which to post the discussion comment

To enable discussion comment posting for notifications, you must make sure the repository listed is one that is withing your Vaunt installation
and that the repository has discussions enabled and a discussion with the listed title created.

#### Webhook Events

The `events` field contains a list of events that will trigger the webhook.
Each event object in the list contains two fields: a `type` and a `value`.
The `value` field describes how to match on the type of the event.

The possible types and their associated values are described below:

Types:

- achievements - The `achievement` event type is triggered when an achievement is awarded
  - value - The value for an `achievement` is the name of the configured achievement in this repository.
