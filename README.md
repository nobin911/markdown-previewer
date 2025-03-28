# Markdown Previewer

## Overview
This project is a **Markdown Previewer**, designed to let users enter Markdown syntax into a textarea and see the formatted preview in real time. It is built using **HTML**, **CSS**, and **JavaScript**, and requires no backend API calls. The purpose is to practice working with user input, text processing, and dynamic DOM updates based on user interactions.

## Features
### Core Functionality
- **Markdown Input**: A textarea where users can type Markdown syntax (displayed on the left-hand side).
- **Formatted Preview**: A preview section (on the right-hand side) that dynamically displays the formatted output based on user input.
- **Supported Markdown Syntax**:
  - **Headings**: `# H1`, `## H2`, etc.
  - **Bold & Italics**: `**bold**`, `*italic*`
  - **Links**: `[title](http://example.com)`
  - **Lists**: Ordered and unordered lists (`1. Item` and `- Item`).
- **Clear/Reset Button**: Allows users to clear the textarea.

### Bonus Features
- **Code Blocks**:
  - Inline code: Enclosed in backticks (\`code\`).
  - Multi-line code blocks: Enclosed in triple backticks (\`\`\`javascript ... \`\`\`).
  - Syntax highlighting for code blocks using libraries like [highlight.js](https://highlightjs.org/) or [Prism.js](https://prismjs.com/).

## Tech Stack
- **HTML**: Structuring the textarea and preview elements.
- **CSS**: Styling the UI for ease of use and aesthetics.
- **JavaScript**: Parsing Markdown input, rendering the formatted output, and handling user interactions.

## Getting Started
Follow these steps to set up and run the project:

1. Clone the repository.
   ```bash
   git clone <repository-url>
