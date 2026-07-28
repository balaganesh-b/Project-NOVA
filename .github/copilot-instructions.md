# Project NOVA - Copilot Instructions

You are contributing to Project NOVA, a modular JavaScript 3D engine built with Three.js.

## Rules

- Preserve the current folder structure.
- Use ES Modules.
- Keep the engine modular.
- Do not rewrite existing systems unless requested.
- Keep code readable and well commented.
- Add JSDoc comments for public classes.
- Prefer reusable components.
- Keep performance in mind.

## Architecture

- Engine code lives under `/js`.
- Managers should only manage their own responsibility.
- Systems should remain independent.
- New features should integrate cleanly with the existing architecture.

## Coding Style

- Use descriptive variable names.
- Avoid duplicate code.
- Keep functions focused on one responsibility.
- Explain complex logic with comments.