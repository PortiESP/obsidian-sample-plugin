import { Notice, Plugin } from "obsidian"


export default function exampleAddRibbonIcon(main: Plugin): void {
    // icons: https://lucide.dev/icons/
    main.addRibbonIcon('dice-1', 'Example Add Ribbon Icon', () => {
        console.log('Example Add Ribbon Icon')
    })

    main.addRibbonIcon('dice-2', 'My Plugin', (): void => {
        new Notice('Ribbon clicked!');
    });
}