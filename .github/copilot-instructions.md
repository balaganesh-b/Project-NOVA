# Project NOVA - AI Development Instructions

## Project Overview

Project NOVA is a modular JavaScript 3D engine built on top of Three.js.

The long-term vision is to evolve it into a reusable engine capable of supporting interactive 3D worlds, simulations, games, virtual spaces, and future Spatial Internet applications.

The codebase should remain clean, scalable, modular, and easy to maintain.

---

## Development Principles

- Preserve the existing architecture.
- Never rewrite large portions of the project unless explicitly requested.
- Keep modules loosely coupled.
- Prefer composition over deep inheritance.
- Keep responsibilities separated.
- Minimize breaking changes.
- Make incremental improvements.

---

## Folder Responsibilities

### /js/core
Contains engine bootstrap, initialization, and engine lifecycle.

### /js/renderer
Rendering pipeline, cameras, lighting, renderer configuration.

### /js/world
World creation, maps, terrain, environments.

### /js/entities
Game objects, entity base classes, reusable objects.

### /js/managers
Managers responsible for one subsystem only.
Examples:
- EntityManager
- SceneManager
- AssetManager
- InputManager

Managers should not directly control unrelated systems.

### /js/systems
Independent engine systems such as:
- Physics
- Audio
- Animation
- Networking
- AI
- Saving

Systems should communicate through managers rather than tightly coupling together.

### /js/ui
User interface and debugging panels.

### /js/utils
Utility helpers, math helpers, constants, reusable functions.

---

# Coding Style

- Use modern ES Modules.
- Prefer classes where appropriate.
- Keep methods short and focused.
- Use descriptive variable names.
- Avoid duplicate code.
- Avoid unnecessary abstractions.
- Keep code beginner-friendly without sacrificing quality.

---

# Documentation

Every public class should include JSDoc comments.

Complex logic should include concise explanatory comments.

Example:

/**
 * Manages all active entities in the world.
 */

---

# Performance

Avoid unnecessary object creation inside render loops.

Reuse objects when practical.

Avoid expensive operations every frame.

---

# Error Handling

Fail gracefully.

Provide meaningful error messages.

Avoid silent failures.

---

# Before Making Large Changes

If a requested change affects multiple systems:

- Explain the proposed architecture.
- List affected files.
- Describe why the change is beneficial.

Then implement the change.

---

# When Generating Code

Always:

- Follow existing project style.
- Modify the smallest number of files possible.
- Keep backwards compatibility unless instructed otherwise.
- Keep implementations modular.
- Keep files organized.

---

# Long-Term Vision

Project NOVA should eventually support:

- Modular engine plugins
- Interactive 3D environments
- Asset pipeline
- Physics
- Animation
- Multiplayer networking
- AI-driven entities
- World streaming
- Editor tools
- Spatial Internet capabilities

Every implementation should move the engine toward this vision without overengineering the current codebase.