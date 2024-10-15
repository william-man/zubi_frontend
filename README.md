### Commit Types

1. **feat**: A new feature for the user.
   - Example: `feat(auth): add login functionality`

2. **fix**: A bug fix for the user.
   - Example: `fix(button): correct hover state color`

3. **docs**: Documentation only changes.
   - Example: `docs(README): update setup instructions`

4. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).
   - Example: `style(app): fix spacing issues`

5. **refactor**: Code changes that neither fix a bug nor add a feature.
   - Example: `refactor(user): optimize profile picture loading`

6. **perf**: A code change that improves performance.
   - Example: `perf(db): improve query performance for large datasets`

7. **test**: Adding missing tests or correcting existing tests.
   - Example: `test(profile): add unit tests for profile component`

8. **build**: Changes that affect the build system or external dependencies (e.g., `gulp`, `webpack`, `npm`).
   - Example: `build(deps): update webpack to v5`

9. **ci**: Changes to our CI configuration files and scripts (e.g., GitHub Actions, CircleCI, Travis).
   - Example: `ci(actions): add Node.js version matrix for testing`

10. **chore**: Other changes that don't modify `src` or `test` files, such as tooling, package updates, etc.
    - Example: `chore(deps): bump eslint version`

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
3. **Footer**: to be created
4. **Button**: to be created
5. **TutorCard**: to be created