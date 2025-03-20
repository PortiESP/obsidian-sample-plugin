import { ItemView, Plugin, WorkspaceLeaf } from "obsidian";

export default function exampleCustomViewsAndPanes(main: Plugin) {
    // Register a new view type
    main.registerView(VIEW_TYPE_EXAMPLE, (leaf: WorkspaceLeaf) => new ExampleView(leaf))

    // Add a command to open the view
    main.addCommand({
        id: 'open-example-view',
        name: 'Open Example View',
        callback: () => {
            const leaf = main.app.workspace.getRightLeaf(false)  // Get the rightmost leaf
            if (leaf) leaf.setViewState({ type: VIEW_TYPE_EXAMPLE, active: true })
        }
    })
}

export const VIEW_TYPE_EXAMPLE = 'example-view'
class ExampleView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf)
    }

    getViewType(): string {
        return VIEW_TYPE_EXAMPLE
    }

    getDisplayText(): string {
        return 'Example View'
    }

    getIcon(): string {
        return 'pencil'
    }

    async onOpen(): Promise<void> {
        this.contentEl.createEl('h2', { text: 'Example View' })
    }

    onClose(): Promise<void> {
        this.contentEl.empty();
        return Promise.resolve();
    }

}
