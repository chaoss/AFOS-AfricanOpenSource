# Contributing.md
Welcome to our project repository! We're thrilled that you're interested in contributing to our project, which utilizes the powerful capabilities of GitHub Copilot. This document provides guidelines and instructions on how you can contribute effectively to the project.


## Introduction

We use the following tools and frameworks in this project:

- Frontend Library: ReactJS
- CSS Framework: Tailwind CSS
- Bundler/Build Tool: Vite
- Test Runner: Vitest
- Routing Implementation: React Router
- Component Library: Flowbite
- Icon Pack: Material Symbols by Google
- Using GitHub Copilot
    - We are using GitHub Copilot to assist with the development process. Please ensure that you have the GitHub Copilot extension installed in your code editor for improved coding assistance.
## Installation

To run the project in a local environment, ensure the following are installed:

- Nodejs
- Npm
## Setup Github Copilot

GitHub Copilot is available as an extension for popular code editors such as Visual Studio Code. To install GitHub Copilot, follow these steps:

- Open Visual Studio Code.
- Go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (Mac).
- Search for "GitHub Copilot" in the search bar.
- Click on the "Install" button next to the GitHub Copilot extension.
- Wait for the installation to complete, and then click on the "Reload" button to activate the extension.
- Usage: Once GitHub Copilot is installed, it automatically starts providing code suggestions as you type in your code editor. It learns from millions of lines of public code and your own code to generate accurate and context-aware suggestions.
## How to contribute to the project 
- **Fix an Issue**

If you want to fix an open issue, leave a comment on it to show. This is done to avoid having multiple people working on the same issue unknowingly.

- **Open an Issue**

In the event that you're encountering an issue or have an inquiry you'd like assistance responding to, kindly go ahead and open an issue. To prevent duplicates, momentarily look through open issues. When opening an issue, ensure you provide a concise description with all relevant information.
Source Code

- Fork and clone this project repository
```
$ git clone https://github.com/<YOUR_USERNAME>/GitHub-Copilot-Hackathon-Project.git
```
- Change to the project directory
```
$ cd GitHub-Copilot-Hackathon-Project
```
- Install the project dependencies
```
$ npm install
```
- Create a branch for your changes.
```
$ git checkout -b my-new-branch
```
- Make your changes
- Run the project locally to test your changes
```
$ npm run dev
```
- Commit the change(s) using a [descriptive commit message](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) and [signing off the commit](https://github.com/chaoss/chaoss-slack-bot/blob/main/CONTRIBUTING.md#signing-off-on-commits)
```
$ git add .
$ git commit -s -m "descriptive commit message w/signoff"
$ git push -u origin my-new-branch
```
- Submit a pull request

Upon submitting a pull request, one of the maintainers will review your pull request and give feedback on changes or merge your pull requested.
> Keep in mind to regularly synchronize your fork with the main branch. To do this, make sure you are in the project's root folder, and the branch should be the main branch. Run the command:
```
$ git remote add upstream https://github.com/chaoss/GitHub-Copilot-Hackathon-Project.git
```

Now that your upstream is set up on your local machine, whenever you need to create a new branch to make changes, make sure your main branch is in sync with the main repository by typing:
```
$ git pull upstream main
$ git push origin main
```

Thank you for your contributions! We appreciate your time and effort in making this project better.

## Resources
- [Project Design - Figma](https://www.figma.com/file/mALWb4e0vqfBbtRwop3g16/Afos?type=design&node-id=44-930&mode=design&t=XHbTvPKU9rzZ0NZU-0)

  
- [Code of Conduct](https://github.com/chaoss/.github/blob/main/CODE_OF_CONDUCT.md)



