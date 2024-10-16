# Zubi

A brief description of your project.

## Table of Contents

- [Introduction](#introduction)
- [Branches](#branches)
- [Committing](#committing)

## Introduction

This document serves as a comprehensive guide for the team to document new features, describe their functionality, and provide instructions for usage or implementation. It ensures consistency and clarity across the project, making it easier for team members to contribute, understand the purpose of changes, and collaborate effectively.

Each section of this document outlines important practices for:

- Writing clear and concise commit messages.
- Naming branches according to convention.
- Maintaining a standardized project file structure.

Following these guidelines will help streamline the development process, improve code quality, and ensure smooth integration of features.

## Branches

To keep the codebase organized and ensure clear understanding, we follow these branch naming conventions:

### Feature Branches:

- `feature/<short-description>` – Use this for adding new features.
  - Example: `feature/user-authentication`

### Bugfix Branches:

- `bugfix/<short-description>` – Use this for fixing bugs.
  - Example: `bugfix/fix-login-error`

### Hotfix Branches:

- `hotfix/<short-description>` – For urgent fixes that need to go directly into production.
  - Example: `hotfix/critical-security-patch`

### Other Branch Types:

- `chore/<short-description>` – For miscellaneous tasks that don't fit into features or bugfixes, such as updating dependencies or cleanup.
  - Example: `chore/update-dependencies`
- `test/<short-description>` – For branches specifically focused on testing.
  - Example: `test/integration-testing`

### Guidelines:

- Branch names should be all lowercase.
- Use hyphens (`-`) to separate words, not spaces or underscores.
- Keep branch names descriptive but concise.

## Committing

1. **feat**: A new feature for the user.

   - Example: `feat: add login functionality`

2. **fix**: A bug fix for the user.

   - Example: `fix: correct hover state color`

3. **docs**: Documentation only changes.

   - Example: `docs: update setup instructions`

4. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).

   - Example: `style: fix spacing issues`

5. **refactor**: Code changes that neither fix a bug nor add a feature.

   - Example: `refactor: optimize profile picture loading`

6. **perf**: A code change that improves performance.

   - Example: `perf: improve query performance for large datasets`

7. **test**: Adding missing tests or correcting existing tests.

   - Example: `test: add unit tests for profile component`

8. **build**: Changes that affect the build system or external dependencies (e.g., `gulp`, `webpack`, `npm`).

   - Example: `build: update webpack to v5`

9. **ci**: Changes to our CI configuration files and scripts (e.g., GitHub Actions, CircleCI, Travis).

   - Example: `ci: add Node.js version matrix for testing`

10. **chore**: Other changes that don't modify `src` or `test` files, such as tooling, package updates, etc.

    - Example: `chore: bump eslint version`

11. **revert**: Reverts a previous commit.

### Colour Palette

- **Logo**: #FFD166 (yellow)
- **Hero and cards background colour**: #629677 (green)
- **Secondary background colour**: #495D63 (dark green)
- **Font colour (h1, h2, p)**: #FFFFFF (white)
- **Buttons**: Backgorund colour: #FFFFFF | Text colour: #1B2D2A (gunmetal)
- **Backup colour**: #6F2DBD (purple)

### React Components

All of our components are inside `src/components` folder.

1. **Logo**: Our Logo.tsx renders the svg: a distorted circle shape icon, colour #FFD166 (Jack's Favourite), saved in src/assets.
2. **Navbar**:

- Mobile First, and responsive for larger screen sizes
- it displayes the logo on the top left followed by the name of our project: zubi (all lowercase)
- When on smaller screens we are using an hamburger menu placed on the right (`FaBars` from React Icons)
- When on larger screen the menu items are displayed inline using `hidden md:flex`.

3. **Footer**:

- 4 sub components to make each file more concise
- FooterSection.tsx is the base component used to create the sections of our Footer.tsx
- The 3 sub components using FooterSection as their base are: UsefulInformation.tsx, Legal.tsx and Socials.tsx
- We can use FooterSection.tsx to create other footer sub sections in the future
- Footer.tsx includes an "All rights reserved" div
- The social icons are using React Icons
- Accessibility: maximised readability and colour contrast. Hoover effects applied to our links: `hover:underline`, and socials icons:`hover:text-[#FFD166 ]`.

4. **Button**: to be created
5. **TutorCard**: to be created
