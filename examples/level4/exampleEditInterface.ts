import { Plugin } from "obsidian";

export default function exampleEditInterface(main: Plugin) {
    const $button = createEl('button', { text: 'Click me', cls: 'custom-btn' })
    $button.onclick = () => { console.log('Btn') }

    main.app.workspace.containerEl.appendChild($button)


    main.register(() => {
        // Detaches the $button element from the DOM when this function is executed.
        // This means the element is removed from its parent but still exists in memory,
        // allowing it to be reattached later if needed.
        $button.detach()
    })
}