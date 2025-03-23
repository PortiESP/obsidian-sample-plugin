import { Plugin } from "obsidian";

export default function exampleMarkdownPostProcessing(main: Plugin) {
    main.registerMarkdownPostProcessor((el, ctx) => {
        // console.log('post processor', { el, ctx })
    })

    main.registerMarkdownCodeBlockProcessor('example', (source, el, ctx) => {
        el.innerHTML = `AAAAAAAAAAAAAAAAA`
        console.log('example code block', { source, el, ctx })

        const info = {
            source,  // The source of the code block
            // @ts-ignore
            containerEl: ctx.containerEl,  // The container element of the editor (the one with the scrollbars)
            // @ts-ignore
            el: ctx.el,  // The element being iterated over (the code block)
            sourcePath: ctx.sourcePath,  // The path of the file being edited
            frontmatter: ctx.frontmatter,  // The frontmatter of the file being edited
        }
    })
}