# Vaunt Documentation

Welcome to the Vaunt documentation. This readme will guide you through the setup and usage of the Vaunt platform.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Development Setup](#development-setup)
5. [Commands](#commands)
   - [Install Dependencies](#install-dependencies)
   - [Local Development](#local-development)
   - [Build](#build)
   - [Deployment](#deployment)

---

## Introduction

Vaunt is a platform designed to help developers showcase their work and connect with others. It also provides tools for organizations and repository owners to enhance developer relations (DevRel), fostering meaningful relationships between developers and their products.

> **Note**: This documentation is built using [Docusaurus 2](https://docusaurus.io/).

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) v16.13.0 or higher
- A package manager:
  - [Yarn](https://yarnpkg.com/) (recommended)
  - [npm](https://www.npmjs.com/)

---

## Getting Started

To begin, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/VauntDev/docs.git
cd docs
```

---

## Development Setup

After cloning the repository, install the required dependencies using either **Yarn** or **npm**:

### Install Dependencies

Using Yarn:

```bash
yarn
```

Using npm:

```bash
npm install
```

---

## Commands

### Local Development

Start a local development server:

Using Yarn:

```bash
yarn start
```

Using npm:

```bash
npx docusaurus start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

---

### Build

Generate static content for deployment:

Using Yarn:

```bash
yarn build
```

Using npm:

```bash
npm run build
```

The static content will be generated in the `build` directory, which can be served using any static content hosting service.

---

### Deployment

Deploy the site to GitHub Pages:

#### Using SSH:

Using Yarn:

```bash
USE_SSH=true yarn deploy
```

Using npm:

```bash
USE_SSH=true npm run deploy
```

#### Not Using SSH:

Using Yarn:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

Using npm:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are hosting on GitHub Pages, this command builds the website and pushes it to the `gh-pages` branch.

---

## Notes

- For more information about Docusaurus, visit the [official documentation](https://docusaurus.io/).
- Ensure you have the correct permissions to deploy to the repository if using the deployment commands.

---
