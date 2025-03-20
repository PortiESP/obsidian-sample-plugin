import { Plugin } from "obsidian";

export default function exampleEditorManipulation(main: Plugin) {
   
    // Add a command to run the commands
    main.addCommand({
        id: 'run-commands-6',
        name: 'Run commands example 6',
        callback: () => runCommands(main)
    })


}


function runCommands(main: Plugin) {
     // <Object> Editor object (cm: codemirror object), (editorEl: HTMLElement), (containerEl: HTMLElement), (editorComponent: Editor)
     const editor = main.app.workspace.activeEditor?.editor
     if (!editor) return

    //  <Object> File object (path: string), (basename: string), (extension: string), (name: string), (parent: TFolder), (vault: Vault)
     const file = main.app.workspace.getActiveFile()
     if (!file) return
     
     // <Object> {line: line index, ch: character index}
     const cursor = editor.getCursor()
     // <String> Text on the current line
     const text = editor.getLine(cursor.line)
     // <String> Selected text
     const selection = editor.getSelection()

     // Get the current cursor position
     console.log('[i] Editor:', editor)  
     console.log('[i] File:', file)                 
     console.log('[i] Cursor position:', cursor)          
     console.log('[i] Current line text:', text)          
     console.log('[i] Current selection:', selection)     
}