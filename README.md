# React, Tailwind, Flowbite, Typescript Template Project

### Description

By design, this is an out-of-the-box bare-minimum project that serves only to set up the folder structure and dependencies for a front-end web development project using:

- React

- Typescript

- Tailwind & Flowbite

- Jest

Its sole purpose is to circumvent the tedious task of remembering the dependencies needed and steps taken to integrate them together. And in doing so, speed up the initial parts of a new project.

### Recommended Usage

1. Create a new repository (only if you don't have a repo to push to yet)

Go to [create a new repo on github](https://github.com/new).

Create a new repo <NEW_REPO> without any README or gitignore.

2. Clone this repo locally

`git clone https://github.com/mwesterham/react-tailwind-flowbite-typescript-template <NEW_REPO>`

3. Install and run the project

`cd <NEW_REPO>`

`npm install`

`npm test`

`npm start`

4. Set the a new remote origin to your own remote (note you will no longer be able to pull from this original template)

`git remote set-url origin https://github.com/<USER_NAME>/<NEW_REPO>`

5. Verify the new remote

`git remote -v`

6. Push the template to your new repo

`git push`

# FAQ

### It asks for a password everytime I push, how can I push without a password?

This can be done with a personal access token, via the web browser, or via ssh. I will discuss the personal access token method here. 

1. Generate a new token [here](https://github.com/settings/tokens)

2. Set the remote url with this newly generated token

`git remote set-url origin https://<USER_NAME>:<NEW_TOKEN>@github.com/<USER_NAME>/<NEW_REPO>`

3. Example

`git remote set-url origin https://mwesterham:ghp_manylettersandnumbers@github.com/mwesterham/brand-new-flowbite-repo`

# License

[MIT License](LICENSE)