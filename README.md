# FITB Host

[Live demo](https://www.halfgray.xyz/fitbhost/)

FITB Host is a Web-based presentation tool for "fill in the blank" stories. The presenter loads a story from a text file and then asks the audience to provide items for the blanks.

## Usage

Stories are written as text files with blanks represented using double braces (`{{ }}`). The double braces contain a description of what to fill in, often a part of speech.

For example:

```
This is an {{ adjective }} example of a {{ noun }}.
```

(Refer to the [StoryFillup](https://github.com/jack126guy/storyfillup) page for technical information on the format.)

Stories can also contain Markdown:

```
This is a *very* {{ adjective }} story. **I hope you enjoy {{ -ing verb }} it.**
```

**Note**: Both `.md` and `.txt` files are treated as Markdown.

## Building

This application is built with [Vite](https://vitejs.dev/).

To start a local development server, run `npm run dev`.

To build the application for production, run `npm run build`. The output is placed in the `dist` directory and can be uploaded directly to a Web server. (To preview the production build with a local Web server, run `npm run preview`.)

To lint and format the code, run `npm run lint`.

## Requirements

(Refer to `package.json` for full list of dependencies.)

* [Marked](https://marked.js.org/) (Markdown parser)
* [Reveal.js](https://revealjs.com/) (presentation framework)
* [StoryFillup](https://github.com/jack126guy/storyfillup) (markup parser)
* [DOMPurify](https://github.com/cure53/DOMPurify) (markup sanitizer)
* [Vue](https://vuejs.org/) (component framework)

## License

FITB Host is available under the MIT License. Refer to `LICENSE.txt` for details.