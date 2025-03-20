import { App, Modal, Plugin, SuggestModal } from "obsidian";



export default function exampleSuggestModal(main: Plugin) {
    // ============= MODALS ==============>>>

    // ------ Modal ------
    
    main.addCommand({
        id: 'open-center-view',
        name: 'Open Center View',
        callback: () => {
            new ExampleCenterView(main.app).open()
        }
    })

    // ------ Suggest Modal ------

    main.addCommand({
        id: 'open-suggest-modal',
        name: 'Open Suggest Modal',
        callback: () => {
            new CustomSuggestModal(main.app).open()
        }
    })
}


// ============= CLASSES ==============>>>

// ------------------ Modal ------------------

export class ExampleCenterView extends Modal {
    constructor(app: App) {
        super(app);
    }

    onOpen(): void {
        this.contentEl.createEl('h2', { text: 'Center View' })
    }
}


// ------------------ Suggest Modal ------------------

class CustomSuggestModal extends SuggestModal<string> {
    constructor(app: App) {
        super(app);
    }

    getSuggestions(query: string): string[] {
        return ['apple', 'banana', 'cherry', 'date', 'elderberry']
            .filter(item => item.startsWith(query))
    }

    renderSuggestion(item: string, el: HTMLElement): void {
        el.setText(item + "*")
    }

    onChooseSuggestion(item: string, evt: MouseEvent | KeyboardEvent): void {
        console.log('Chose suggestion:', item)
    }
}