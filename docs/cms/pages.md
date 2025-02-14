---
sidebar_position: 10
---

# Pages and chapters

Each URL you are opening in swark's frontend is a *__Page__*. A *page* can contain any type of content, like texts, tables or generated diagrams.
To make it easier to structure your page's content into chapters. There is no need that you have to do it. But having chapters makes it much easier to scim through the relevant content. Each chapter can have multiple sub-chapters.
When a page has chapters, its outline appears on the right side.

## Layouts
Behind a page is always exactly _one_ layout file named `page-layout.blade.php`. It contains the structure - __not__ the content - of a page. Even if 