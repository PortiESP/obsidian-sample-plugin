import { Plugin } from "obsidian";

export default function exampleKeybinds(main: Plugin) {
    main.addCommand({
        id: 'example-keybind-1',
        name: 'Example keybind 1',
        hotkeys: [
            {
                modifiers: ['Mod'], // 'Mod' is 'Ctrl' on Windows/Linux, 'Cmd' on macOS
                key: 'ñ'
            }
        ],
        callback: () => {
            console.log('Example keybind 1')
        }
    })

    main.addCommand({
        id: 'example-keybind-2',
        name: 'Example keybind 2',
        hotkeys: [
            {
                modifiers: ['Mod'], // 'Mod' is 'Ctrl' on Windows/Linux, 'Cmd' on macOS
                key: '.'
            }
        ],
        callback: () => {
            console.log('Example keybind 2')
        }
    })
}