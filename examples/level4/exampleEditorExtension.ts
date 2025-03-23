import { Plugin } from "obsidian";
import { Decoration, DecorationSet, EditorView, WidgetType } from "@codemirror/view"
import { RangeSetBuilder } from '@codemirror/state';

export default function exampleEditorExtension(main: Plugin): void {
    // main.registerEditorExtension(testDecoration)
    // main.registerEditorExtension(testDecoration2)
    main.registerEditorExtension(testDecoration3)

}


// ============================== Decorations ==============================

// Example 1: Console logs
function testFunction(view: EditorView) {
    // console.log('test function', { view })

    const builder = new RangeSetBuilder<Decoration>()
    // console.log('builder', { builder })

    return builder.finish()
}

// Example 2
function testFunction2(view: EditorView) {
    const builder = new RangeSetBuilder<Decoration>()

    for (let { from, to } of view.visibleRanges) {
        const line = view.state.doc.lineAt(from)    // Line info such as: line.text, line.from, line.to, line.number
        const text = view.state.sliceDoc(from, to)  // Document content from 'from' to 'to'

        console.log("**********", view)
        // @ts-ignore
        console.log("**********", view.viewState)
        console.log(view.viewportLineBlocks)  // Position (pixels) of the lines in the editor [{from, to, height}, ...]
        console.log(view.contentHeight)
        // @ts-ignore
        console.log("**********", view.viewState.viewport) // Position (character index) of the lines in the editor { from, to }
        // @ts-ignore
        console.log("**********", view.viewState.visibleTop) // Position of the top (in pixels) of the editor (scroll position)
        // @ts-ignore
        console.log("**********", view.viewState.visibleBottom) // Position of the bottom (in pixels) of the editor (scroll position)

        // The elements will be wrapped in a span with the class 'test-decoration' until the `to` position, or the end of the line. In the next line, a new span will be created.
        builder.add(from, to, Decoration.mark({ class: 'test-decoration' }))
    }

    return builder.finish()
}

// Example 3
function testFunction3(view: EditorView) {
    const builder = new RangeSetBuilder<Decoration>();

    console.log('test function 3', { view });

    // Iterate through all visible ranges
    for (const { from, to } of view.visibleRanges) {
        // Get the text in the visible range
        const text = view.state.doc.sliceString(from, to);

        // Split the text into lines
        const lines = text.split('\n');
        let lineStart = from;

        for (const lineText of lines) {
            const lineEnd = lineStart + lineText.length;

            // Example: Highlight the entire line if it contains the word "TODO"
            if (lineText.startsWith("#")) {
                builder.add(
                    lineEnd,
                    lineEnd,
                    Decoration.widget({
                        widget: new EmojiWidget(' 🎉'),
                        side: 1,
                    })
                    // Decoration.mark({ class: 'emoji' }) // Apply the 'red' class
                );
            }

            // Move to the start of the next line
            lineStart = lineEnd + 1; // +1 to account for the newline character
        }
    }

    return builder.finish();
}

const testDecoration = EditorView.decorations.of((view: EditorView): DecorationSet => testFunction(view))
const testDecoration2 = EditorView.decorations.of((view: EditorView): DecorationSet => testFunction2(view))
class EmojiWidget extends WidgetType {
    constructor(private emoji: string) {
        super();
    }

    toDOM(): HTMLElement {
        const span = document.createElement('span');
        span.textContent = this.emoji;
        return span;
    }
}

const testDecoration3 = [
    EditorView.baseTheme({
        ".emoji": {
            color: "red",
        }
    }),
    EditorView.decorations.of((view: EditorView): DecorationSet => testFunction3(view))
]