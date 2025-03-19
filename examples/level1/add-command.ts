import { Plugin } from "obsidian"


export default function exampleAddCommand(main: Plugin): void{
    main.addCommand({
        id: 'example-add-command',
        name: 'Example Add Command',
        callback: () => {
            console.log('Example Add Command')
        }
    })
}