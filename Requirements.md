### Fulfilled:
*   **Basic HTML page:** The website uses HTML files like `index.html` and others.
*   **External CSS file:** The project uses multiple external CSS files for styling (e.g., `css/style.css`, `css/index/style.css`).
*   **Use of CSS Grid or Flexbox:** The CSS files show usage of `display: flex` for layout, which is part of the requirements for "Note 1".
*   **Use of Media Queries:** The CSS contains `@media` queries to adapt the layout for different screen sizes.
*   **Alternative text for images:** The images on the `index.html` page have `alt` attributes.
*   **Informational Pages:** The website includes pages like `Konzept.html` (Concept), `gruppen.html` (Groups), `about-us.html` (About Us), and `Kontakt.html` (Contact), which likely cover the facility and team. There is no explicit "Opening Hours" page, but this information might be on the contact page.

### Not Fulfilled or Partially Fulfilled:
*   **Clear HTML5 Structure (`main`, `article`, `section`, `footer`):** The `index.html` page uses `<div>` tags for its main structure instead of semantic HTML5 elements like `<main>`, `<section>`, or `<footer>`.
*   **Understandable without CSS:** The structure relies heavily on CSS for layout. Without it, the content order might not be logical, but this would require manual testing in a browser.
*   **ARIA Landmarks:** The HTML does not include ARIA landmark roles (e.g., `role="main"`, `role="navigation"`) to improve semantic meaning for assistive technologies.
*   **Image Gallery:** There is no page that contains a gallery of images. The `gruppen.html` page, which might be a candidate, is empty.
*   **Keyboard Navigation Optimization:** There are no specific optimizations for keyboard users visible in the code (like `:focus` styles for all interactive elements).
*   **Barrier-Free Video:** The website does not contain any `<video>` element.
*   **Video with Captions/Description:** Since there is no video, there are no captions or descriptions.
*   **Video understandable without sound:** No video is present.