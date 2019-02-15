# Jujitsu Moves

Jujitsu moves documented in Graphiz.
The manual is
[here](https://www.graphviz.org/pdf/dotguide.pdf)
and website is
[here](https://www.graphviz.org/).
Developed the diagram below using VSCode to preview and export the image via an
[extension](https://marketplace.visualstudio.com/items?itemName=EFanZh.graphviz-preview).
Installed on Mac via `brew installl graphviz`.
Generate outputs are generated via:

- `npm run dev`, or
- `yarn dev`

Note to manually convert the dot file use
`dot -Tsvg ./src/jujitsu-moves.dot > ./docs/jujitsu-moves.svg`

![](./docs/jujitsu-moves.svg)
