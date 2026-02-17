---
name: new-project
description: Add a new project card to projects.html
argument-hint: [project-name]
allowed-tools: Read, Edit, Grep
---

# Add New Project

Add a new project card to `projects.html` for: **$ARGUMENTS**

## Steps

1. Read `projects.html` to match the existing card structure
2. Ask for project details if not provided:
   - Short description
   - Key achievements/metrics
   - Tech stack tags
   - Accent color theme (blue, emerald, purple, orange)
   - Link (optional)
3. Create the project card following the established pattern:
   - Logo/icon area
   - Title and description
   - Achievement badges
   - Tech stack tags
   - Dark mode support
   - Hover animation
4. Insert in the correct position within the grid
5. Update `index.html` project preview section if needed
