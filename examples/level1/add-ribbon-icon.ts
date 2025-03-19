import { Plugin } from "obsidian"


export default function exampleAddRibbonIcon(main: Plugin): void {
    // icons: https://lucide.dev/icons/
    main.addRibbonIcon('dice', 'Example Add Ribbon Icon', () => {
        console.log('Example Add Ribbon Icon')
    })
}