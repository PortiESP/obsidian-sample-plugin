import { App, Plugin, SuggestModal } from "obsidian";

export default function exampleSuggestModal(main: Plugin) {
    main.addCommand({
        id: 'open-suggest-modal',
        name: 'Open Suggest Modal',
        callback: () => {
            new CustomSuggestModal(main.app).open()
        }
    })
}



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