/** @format */
//get Elements

let editor = document.querySelector("#textArea");
let preview = document.querySelector("#preview");
let resetBtn = document.querySelector("#resetBtn");

// Initialize markdown-it with highlight.js
const md = window.markdownit({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(code, { language: lang }).value +
          "</code></pre>"
        );
      } catch (_) {}
    }
    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(code) + "</code></pre>"
    );
  },
});

// Function to update preview
function updatePreview() {
  preview.innerHTML = md.render(editor.value);
}

// Listen for input changes
editor.addEventListener("input", updatePreview);

// Initialize preview
updatePreview();

//Reseting the editor

resetBtn.addEventListener("click", () => {
  editor.value = "";
  preview.innerHTML = "";
});
