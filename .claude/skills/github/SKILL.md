---
name: github
description: Manage this repository with GitHub — commits, branches, PRs, issues, releases, and deployment. Use when the user wants to push code, create PRs, manage issues, tag releases, or deploy to GitHub Pages.
argument-hint: [action] [details]
allowed-tools: Bash, Read, Grep, Glob
---

# GitHub Repository Management

Perform GitHub action: **$ARGUMENTS**

---

## Commit Conventions

Use **Conventional Commits** format:

```
<type>(<scope>): <description>

<optional body>

<optional footer>
```

### Types

| Type | When to use | Example |
|------|-------------|---------|
| `feat` | New page, section, or feature | `feat(blog): add article listing page` |
| `fix` | Bug fix | `fix(nav): correct mobile menu z-index` |
| `style` | Formatting, whitespace (NOT CSS) | `style: fix indentation in index.html` |
| `refactor` | Restructure without behavior change | `refactor(components): extract hero into partial` |
| `perf` | Performance improvement | `perf(images): convert PNGs to WebP` |
| `docs` | Documentation only | `docs: update README with deploy steps` |
| `chore` | Maintenance, configs, deps | `chore: update .gitignore` |
| `build` | Build tools or CI changes | `build: add GitHub Pages deploy workflow` |

### Rules

- Imperative present tense: "add" not "added" or "adds"
- No capitalization of first letter
- No period at the end
- Subject line max 50 characters
- Body wrapped at 72 characters
- Reference issues in footer: `Closes #12`

---

## Branch Naming

Format: `<type>/<short-description>` — lowercase, hyphens only.

```
feature/blog-rss-feed
fix/mobile-nav-overlap
content/update-about-page
style/dark-mode-colors
chore/update-dependencies
```

If linked to an issue: `feature/42-blog-rss-feed`

### Commands

```bash
# Create and switch to branch
git checkout -b feature/blog-rss-feed

# Create branch linked to a GitHub issue
gh issue develop 12 -c
```

---

## Pull Request Workflow

Even for solo development, PRs provide: self-review, clean history, CI checks before merge, easy reverts, and a searchable task log.

### Standard Flow

```bash
# 1. Create issue
gh issue create --title "feat: add blog RSS feed" --label "type: feature"

# 2. Branch from issue
gh issue develop <issue-number> -c

# 3. Work, commit
git add blog.html
git commit -m "feat(blog): add RSS feed generation

Closes #<issue-number>"

# 4. Push and create PR
gh pr create --fill

# 5. Self-review the diff
gh pr diff

# 6. Check CI
gh pr checks

# 7. Merge (squash keeps history clean)
gh pr merge --squash --delete-branch
```

### PR Body Template

```markdown
## Summary
- What changed and why

## Test Plan
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] All links work
- [ ] No console errors
```

---

## Issue Management

### Recommended Labels

```bash
gh label create "type: feature" --color "0E8A16" --description "New feature or page"
gh label create "type: bug" --color "D73A4A" --description "Something broken"
gh label create "type: content" --color "0075CA" --description "Blog or content update"
gh label create "type: design" --color "BFD4F2" --description "Visual/UI changes"
gh label create "type: chore" --color "FEF2C0" --description "Maintenance and deps"
gh label create "priority: high" --color "B60205" --description "Urgent"
gh label create "priority: low" --color "C2E0C6" --description "Nice to have"
```

### Commands

```bash
gh issue create --title "Title" --label "type: bug,priority: high"
gh issue list
gh issue list --label "type: bug"
gh issue view 12
gh issue close 12
```

---

## Releases & Tags

Use **semantic versioning**: `vMAJOR.MINOR.PATCH`

- **MAJOR** (v2.0.0): Complete redesign, breaking URL changes
- **MINOR** (v1.1.0): New page/section, significant feature
- **PATCH** (v1.0.1): Bug fix, typo, small content update

```bash
# Tag and release
git tag -a v1.0.0 -m "Initial public launch"
git push origin v1.0.0
gh release create v1.0.0 --generate-notes --title "v1.0.0 - Initial Launch"

# List releases
gh release list
```

---

## GitHub Pages Deployment

### Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Custom Domain

```bash
# Set custom domain (after configuring DNS A records)
gh api repos/{owner}/{repo}/pages -X PUT -f cname="yourdomain.com"

# Enforce HTTPS
gh api repos/{owner}/{repo}/pages -X PUT -F https_enforced=true
```

---

## Repository Settings

```bash
# Auto-delete merged branches
gh api repos/{owner}/{repo} -X PATCH -F delete_branch_on_merge=true

# Set description and homepage
gh api repos/{owner}/{repo} -X PATCH \
  -f description="Personal portfolio and blog — Lev Kislyuk" \
  -f homepage="https://yourdomain.com"

# Add topics
gh api repos/{owner}/{repo}/topics -X PUT \
  -f names='["portfolio","personal-website","tailwindcss","threejs"]'

# Disable wiki (not needed)
gh api repos/{owner}/{repo} -X PATCH -F has_wiki=false
```

---

## .gitignore

Ensure the repo has this `.gitignore`:

```gitignore
node_modules/
dist/
.env
.env.local
.DS_Store
Thumbs.db
*.swp
*~
.claude/settings.local.json
CLAUDE.local.md
```

---

## Quick Reference — gh CLI

```bash
# Auth
gh auth login
gh auth status

# Repo
gh repo view
gh browse                    # Open in browser

# Issues
gh issue create --title "..." --label "..."
gh issue list
gh issue develop <num> -c    # Branch from issue

# PRs
gh pr create --fill
gh pr diff
gh pr checks
gh pr merge --squash --delete-branch

# Actions
gh run list
gh run watch --compact
gh workflow run deploy.yml

# Releases
gh release create v1.0.0 --generate-notes
gh release list
```

---

## Decision Guide

| User says | Action |
|-----------|--------|
| "push this" / "commit" | Stage, commit with conventional message, push |
| "create a PR" | Branch → commit → push → `gh pr create` |
| "deploy" | Ensure deploy workflow exists, push to main |
| "release" / "tag" | `git tag` + `gh release create --generate-notes` |
| "create an issue" | `gh issue create` with labels |
| "set up GitHub Pages" | Create deploy workflow + enable Pages |
| "init repo" | `gh repo create` + `.gitignore` + first commit |
