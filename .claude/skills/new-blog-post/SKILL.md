---
name: new-blog-post
description: Add a new blog article card to blog.html
argument-hint: [title]
allowed-tools: Read, Edit, Grep
---

# Add New Blog Post

Add a new article card to `blog.html` for: **$ARGUMENTS**

## Steps

1. Read `blog.html` to understand the current card structure and grid layout
2. Create a new article card matching the existing pattern:
   - Title, description, tags, estimated read time, date
   - Proper dark mode classes
   - Hover effects consistent with other cards
   - Responsive grid placement
3. Insert the new card in the appropriate position (newest first)
4. Verify the grid layout still works with the new card count
