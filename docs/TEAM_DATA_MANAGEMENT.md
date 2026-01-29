# 📋 Team Data Management Guide

## Overview

Team member data has been refactored and moved to a centralized location for easier management.

## 📁 File Structure

```
data/
  └── team.ts          # All team member data
types/
  └── index.ts         # TypeScript interfaces
app/(default)/team/
  └── page.tsx         # Team page (imports from data/team.ts)
```

## 🎯 How to Manage Team Members

### Adding a New Team Member

Edit `data/team.ts` and add a new member to the appropriate array:

```typescript
// Add to leaders, personnel, or members array
{
  id: 15,                                    // Unique ID (increment from last)
  name: "John Doe",                          // Full name
  role: "Community Member",                  // Role/position
  image: "/images/member-new.jpg",           // Image path in public/images/
  bio: "Brief description of the member.",   // Optional bio
  linkedin: "https://linkedin.com/in/...",   // LinkedIn URL
  github: "https://github.com/...",          // GitHub URL (or Instagram for now)
  twitter: "https://twitter.com/...",        // Twitter/X URL
  email: "member@example.com",               // Optional email
}
```

### Updating Member Information

1. Open `data/team.ts`
2. Find the member by name or ID
3. Update any field(s)
4. Save the file

### Removing a Team Member

1. Open `data/team.ts`
2. Find and delete the member object
3. Save the file

## 📊 Data Structure

### Arrays Available:

1. **`leaders`** - Community Leaders (currently 4 members)
2. **`personnel`** - DevCorps Head, Mentors, Founders (currently 3 members)
3. **`members`** - General Community Members (currently 7 members)

### Member Object Properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | number | ✅ Yes | Unique identifier |
| `name` | string | ✅ Yes | Member's full name |
| `role` | string | ✅ Yes | Position/role in community |
| `image` | string | ✅ Yes | Path to profile image |
| `bio` | string | ❌ No | Short biography |
| `linkedin` | string | ❌ No | LinkedIn profile URL |
| `github` | string | ❌ No | GitHub profile URL (currently used for Instagram) |
| `twitter` | string | ❌ No | Twitter/X profile URL |
| `email` | string | ❌ No | Email address |

## 🛠️ Helper Functions

The `data/team.ts` file includes utility functions:

### Get All Team Members
```typescript
import { getAllTeamMembers } from "@/data/team";

const allMembers = getAllTeamMembers();
// Returns: [...leaders, ...personnel, ...members]
```

### Get Members by Role
```typescript
import { getTeamMembersByRole } from "@/data/team";

const communityLeaders = getTeamMembersByRole("Community Leader");
```

### Get Member by ID
```typescript
import { getTeamMemberById } from "@/data/team";

const member = getTeamMemberById(5);
// Returns the member object or undefined
```

## 🖼️ Adding Member Images

1. Save the image in `public/images/`
2. Use format: `member-XX.jpg` or `member-XX.png`
3. Reference in data: `"/images/member-XX.jpg"`

**Image Requirements:**
- Format: JPG or PNG
- Size: Recommended 400x400px (square)
- File size: Keep under 200KB for performance

## 🎨 Display on Website

The team page automatically displays members in 3 tabs:
- **Tab 1:** Community Leaders (4-column grid)
- **Tab 2:** Community Members (3-4 column grid)
- **Tab 3:** Personnel (3-column grid)

No changes needed to the page component when updating data!

## ✨ Future Enhancements

Consider these options for even better management:

### Option 1: JSON File (Simple)
Move data to `public/data/team.json` for non-technical editors.

### Option 2: Headless CMS (Professional)
Connect to Contentful, Sanity, or Strapi for:
- Visual editing interface
- Image upload management
- Content scheduling
- Multi-user editing

### Option 3: Admin Dashboard (Advanced)
Build a custom admin panel with:
- CRUD operations
- Image uploads
- Authentication
- Database storage (PostgreSQL/MongoDB)

### Option 4: Google Sheets Integration
Fetch data from Google Sheets for easy team editing.

## 📝 Example: Adding a New Leader

```typescript
// In data/team.ts, add to leaders array:
{
  id: 5,
  name: "Jane Smith",
  role: "Community Leader",
  image: "/images/leader-05.jpg",
  bio: "Cybersecurity expert with 10 years of experience in ethical hacking.",
  linkedin: "https://www.linkedin.com/in/janesmith/",
  github: "https://github.com/janesmith",
  twitter: "https://twitter.com/janesmith",
  email: "jane@ethicalhck.com",
}
```

## 🔍 Troubleshooting

### Member Not Showing Up?
- Check that you saved `data/team.ts`
- Verify the image path exists in `public/images/`
- Check browser console for errors
- Restart dev server: `npm run dev`

### Image Not Displaying?
- Verify file exists in `public/images/`
- Check file name matches exactly (case-sensitive)
- Try clearing browser cache (Ctrl+Shift+R)

### TypeScript Errors?
- Ensure all required fields are present (id, name, role, image)
- Check for syntax errors (missing commas, brackets)
- Run `npm run build` to see full error details

## 📞 Need Help?

If you need assistance with team data management, contact:
- Email: ethicalhck@heraldcollege.edu.np
- Or open an issue in the repository

---

**Last Updated:** January 29, 2026
