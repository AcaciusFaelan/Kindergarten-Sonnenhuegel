This document tracks the project's adherence to the requirements outlined in "GBI Lernsituation Kindergarten ohne Doku.pdf".

## Summary of Requirements (Graded Notes)

*   **Note 4:** Basic, semantic HTML5 structure; alt text for images; understandable without CSS; informational pages (facility, team, opening hours).
*   **Note 3:** External CSS; ARIA landmarks; general accessibility; image gallery.
*   **Note 2:** Keyboard navigation optimization; responsive design with Media Queries; accessible video with captions and description.
*   **Note 1:** Use of CSS Grid and/or Flexbox for layout.

---

## Current Status

### Fulfilled
*   **Grade 1 Requirement - CSS Grid and Flexbox:** The project correctly uses both `display: grid` and `display: flex` for layout in `css/index/style.css`, fulfilling the highest-level layout requirement.
*   **Grade 2 Requirement - Media Queries:** The CSS includes `@media` queries to adapt the layout for different screen sizes, ensuring basic responsiveness.
*   **Grade 2 Requirement - Keyboard Navigation Optimization:** Standard interactive elements are keyboard-navigable by default.
*   **Grade 3 Requirement - External CSS:** The project uses multiple external CSS files for styling (e.g., `css/style.css`, `css/index/style.css`), correctly separating content from presentation.
*   **Grade 4 Requirement - Basic HTML Page:** The website is built with standard HTML5 files.
*   **Grade 4 Requirement - Alternative Text for Images:** All `<img>` tags on the checked pages (`index.html`, `about-us.html`, etc.) have `alt` attributes.
*   **Grade 4 Requirement - Informational Pages:** The website includes pages covering the required information:
    *   **Facility/Concept:** `Konzept.html` and `about-us.html`.
    *   **Team:** A general description is present on `about-us.html`.
    *   **Opening Hours:** This information is available on `Kontakt.html`.
*   **Grade 4 Requirement - Understandable without CSS:** The content is present in the HTML and is readable in a logical order without CSS.

### Not Fulfilled or Partially Fulfilled
*   **Grade 2 Requirement - Barrier-Free Video:** **Not Fulfilled.** The website does not contain any `<video>` element, and therefore also misses the associated requirements for captions, descriptions, and being understandable without sound.
*   **Grade 3 Requirement - Image Gallery:** **Not Fulfilled.** The "Note 3" requirement to "add a gallery with pictures of activities in the kindergarten" is not met. The `gruppen.html` page describes the groups with text but contains no images or gallery. The `index.html` page has a simple row of three images but not a gallery.
*   **Grade 3 Requirement - ARIA Landmarks:** **Partially Fulfilled.** The code uses HTML5 elements like `<nav>`, `<main>`, and `<footer>`, which provide implicit ARIA landmark roles. However, the requirement implies a deeper engagement with ARIA to "improve the semantic of your site," which could include adding more specific roles where appropriate.
*   **Grade 4 Requirement - Clear HTML5 Structure:** **Partially Fulfilled.** The semantic structure is inconsistent. While some pages like `Kontakt.html` use `<main>`, `<section>`, and `<footer>` correctly, the main `index.html` page lacks a `<footer>` and uses `<div>`s where `<section>`s would be more semantic.
