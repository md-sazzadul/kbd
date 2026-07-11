# KBD - Project Overview

**Version:** 1.0 (MVP)  
**Project Name:** KBD  
**Project Type:** MERN Stack Web Application  
**Language:** TypeScript  
**Status:** Planning

# 1\. Introduction

KBD is a modern web-based tournament management platform built with the **MERN Stack** (MongoDB, Express.js, React, and Node.js) using **TypeScript** throughout the application.

The platform enables administrators to create and manage tournaments while allowing participants to join tournaments, build squads from configurable player databases, and compete within a structured tournament environment.

The application is designed with scalability, maintainability, and extensibility in mind. Rather than hardcoding tournament formats or player databases, KBD stores them as configurable resources, allowing new game modes and player datasets to be added without modifying the core application.

# 2\. Project Goals

The primary objective of KBD is to provide a centralized platform for organizing football gaming tournaments with an intuitive user experience and a scalable backend architecture.

The project aims to:

- Provide secure authentication for both Admins and Participants.
- Allow Admins to create and manage tournaments.
- Allow Participants to join tournaments through multiple methods.
- Enable team creation from configurable player databases.
- Provide public squad visibility for tournament participants.
- Build a modular architecture that supports future expansion.

# 3\. Vision

KBD is intended to become a complete tournament ecosystem rather than a simple tournament registration website.

Future versions will support:

- Match Fixtures
- Live Scores
- League Tables
- Knockout Brackets
- Player Statistics
- Tournament Analytics
- Notifications
- Multiple Tournament Formats
- Multiple Player Databases
- Mobile Application
- Progressive Web App (PWA)

Version 1 focuses on delivering a stable, production-ready MVP while laying a strong architectural foundation for future development.

# 4\. Target Users

KBD supports two user roles.

## Admin

Administrators are responsible for organizing tournaments.

They can:

- Register as an Admin.
- Create tournaments.
- Configure tournament settings.
- Publish tournaments.
- Invite participants.
- Create or edit participant teams.
- Manage Tournament Types.
- Manage Player Categories.
- Manage Players.

## Participant

Participants compete in tournaments.

They can:

- Register as a Participant.
- Join available tournaments.
- Join using tournament codes.
- Accept tournament invitations.
- Create their own team.
- Edit their team before the tournament starts.
- View all tournament squads.

# 5\. Core Features (Version 1)

## Authentication

- User Registration
- User Login
- JWT Authentication
- Role-Based Authorization
- Password Hashing
- Protected Routes

## Tournament Management

- Create Tournament
- Edit Tournament
- Delete Tournament
- Publish Tournament
- Draft Workflow
- Tournament Status Management
- Tournament Settings
- Tournament Codes

## Tournament Participation

Participants can join tournaments by:

- Browsing published tournaments.
- Entering a tournament code.
- Accepting an invitation.

## Invitations

Admins can invite participants using:

- Username
- Email Address
- User ID

Participants can:

- Accept invitations.
- Reject invitations.

## Team Builder

Participants can:

- Build a squad.
- Select players.
- Choose formations.
- Save teams.

Admins can:

- Create participant teams.
- Modify participant teams.

## Player Database

The application provides:

- Player Categories
- Search
- Filtering
- Pagination
- Configurable Player Databases

## Squad Visibility

All participants within a tournament can view every submitted squad.

# 6\. Configurable System

One of the key architectural decisions of KBD is avoiding hardcoded values.

Instead, configurable resources are stored in dedicated collections.

## Tournament Types

Examples:

- RTG
- Draft
- Career Mode
- Ultimate Team

## Player Categories

Examples:

- FC25 Current Players
- FC25 Icons
- FC25 Heroes
- FC26 Current Players
- Custom Database

Because these are stored in MongoDB and referenced by ID, new categories can be added without changing application code.

# 7\. Tournament Lifecycle

Every tournament follows the same lifecycle.

Draft  
│  
▼  
Open  
│  
▼  
Started  
│  
▼  
Completed

### Draft

- Default state after creation.
- Only visible to the tournament owner.
- Participants cannot join.

### Open

- Visible to participants.
- Participants may join.
- Invitations may be accepted.

### Started

- No further participants can join.
- Teams become locked.
- Tournament begins.

### Completed

- Tournament becomes read-only.

# 8\. Technology Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Router
- Redux Toolkit
- RTK Query
- Tailwind CSS
- Axios
- React Hook Form
- Zod

## Backend

- Node.js (LTS)
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcrypt
- Zod
- Helmet
- CORS
- Morgan
- Compression

## Development Tools

- Git
- GitHub
- VS Code
- Postman
- MongoDB Compass
- ESLint
- Prettier
- Husky
- lint-staged

# 9\. Architectural Principles

KBD is designed using the following principles:

- Feature-based architecture.
- Separation of concerns.
- Strong TypeScript typing.
- Modular and reusable components.
- RESTful API design.
- API versioning (/api/v1).
- Centralized error handling.
- Configurable application settings.
- Scalable folder structure.
- Maintainable codebase.

# 10\. Zero-Cost Production Strategy

The project is intentionally designed to launch without recurring infrastructure costs.

| Service                    | Provider           | Cost |
| -------------------------- | ------------------ | ---- |
| Source Code                | GitHub             | Free |
| Frontend Hosting           | Vercel             | Free |
| Backend Hosting            | Render             | Free |
| Database                   | MongoDB Atlas (M0) | Free |
| Image Storage _(Optional)_ | Cloudinary         | Free |

**Estimated Monthly Cost:** **\$0 USD**

**Note:** Free hosting providers may impose limits such as cold starts, monthly usage quotas, or sleep modes. These are acceptable for the MVP and can be upgraded later if required.

# 11\. Version 1 Scope

Version 1 includes:

- User Authentication
- Admin & Participant Roles
- Tournament Management
- Tournament Types
- Player Categories
- Player Database
- Tournament Invitations
- Team Builder
- Squad Viewer
- Tournament Codes
- Draft/Publish Workflow
- Responsive User Interface
- Production Deployment

# 12\. Out of Scope (Version 1)

The following features are planned for future releases:

- Fixtures
- Match Results
- Leaderboards
- Knockout Brackets
- Round Robin Scheduling
- Live Notifications
- Email Notifications
- Player Statistics
- Transfer Window
- Admin Analytics Dashboard
- Progressive Web App (PWA)
- Mobile Application
- Multi-language Support

# 13\. Success Criteria

Version 1 will be considered successful when:

- Users can register as either an Admin or Participant.
- Admins can create and publish tournaments.
- Participants can join tournaments through browsing, invitations, or tournament codes.
- Tournament Types and Player Categories are fully configurable.
- Teams can be created from configurable player databases.
- Squads are visible to all tournament participants.
- Teams become locked when tournaments start.
- The application is deployed using only free-tier services.
- The codebase follows TypeScript best practices and is fully documented.

# 14\. Next Document

The next document in this series is:

**02-requirements.md**

This document will define all functional requirements, non-functional requirements, business rules, user stories, and acceptance criteria for Version 1.
