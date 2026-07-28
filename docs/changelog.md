# Changelog

v0.0.2

✅ config.js

• Added centralized engine configuration.
• Organized configuration into sections.
• Added version information.
• Added engine, renderer, camera, controls,
  physics, world and debug settings.
• Locked configuration using Object.freeze().

v0.0.2

✅ engine.js

• Created the core Engine object.
• Implemented the engine lifecycle.
• Added start(), initialize(), update(), render(), and stop() methods.
• Added engine running state management.
• Added lifecycle console messages.

v0.0.2

✅ events.js

• Added a generic event system.
• Implemented event registration.
• Implemented event removal.
• Implemented event emission.
• Implemented event clearing.
• Designed for loose coupling between systems.

v0.0.2

✅ time.js

• Added centralized time management.
• Tracks engine start time.
• Calculates delta time.
• Calculates elapsed time.
• Supports timer reset.
• Uses high-resolution performance.now().

v0.0.2

✅ registry.js

• Added centralized object registry.
• Implemented object registration.
• Added object retrieval by ID.
• Added existence checking.
• Added object removal.
• Added registry clearing.

v0.0.2

✅ debug.js

• Added centralized debugging system.
• Implemented log().
• Implemented warn().
• Implemented error().
• Integrated Config.debug.enabled.

v0.0.2

ENGINE CORE COMPLETED

Added:
• Config system
• Engine lifecycle
• Event system
• Time manager
• Object registry
• Debug system
• Engine bootstrap (main.js)
• Core script loading in index.html

Status:
✅ Engine Core completed successfully.