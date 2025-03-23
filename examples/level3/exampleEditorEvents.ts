// WE MUST USE THE `registerEvent()` METHOD TO REGISTER EVENTS
/*
    The events that can be registered are managed by
        - `this.app.workspace.on('event', callback)`
        - `this.app.vault.on('event', callback)`
            
*/

import { Plugin } from "obsidian";

export default function exampleEditorEvents(main: Plugin): void {

    // DEBUG
    if (true) return

    // ==================== Workspace events ====================>>>
    // When the active leaf changes (i.e. the user switches between panes)
    main.registerEvent(main.app.workspace.on('active-leaf-change', () => {
        console.log('Active leaf has changed')
    }))

    // When the layout changes (i.e. the user changes the layout of the panes)
    main.registerEvent(main.app.workspace.on('layout-change', () => {
        console.log('Layout has changed')
    }))

    // When the active file changes (i.e. the user switches between files)
    main.registerEvent(main.app.workspace.on('file-open', (file) => {
        console.log('File opened:', file)

    }))

    // When obsidian quits
    main.registerEvent(main.app.workspace.on('quit', () => {
        console.log('Obsidian is quitting')
    }))

    // When the workspace is ready
    main.registerEvent(main.app.workspace.on('resize', () => {
        console.log('Workspace resized')
    }))

    // ==================== Vault events ====================>>>
    // When a file is created
    main.registerEvent(main.app.vault.on('create', (file) => {
        console.log('File created:', file)
    }))

    // When a file is deleted
    main.registerEvent(main.app.vault.on('delete', (file) => {
        console.log('File deleted:', file)
    }))

    // When a file is renamed
    main.registerEvent(main.app.vault.on('rename', (file, oldPath) => {
        console.log('File renamed:', file, oldPath)
    }))

    // When a file is modified
    main.registerEvent(main.app.vault.on('modify', (file) => {
        console.log('File modified:', file)
    })) 

    // ==================== Editor events ====================>>>
    // When the editor is scrolled
    main.registerEvent(main.app.workspace.on('editor-change', (editor) => {
        console.log('Editor change:', editor)
        // console.log('Editor scroll:', editor.getScrollInfo())
        // console.log('Editor cursor:', editor.getCursor())
        // console.log('Editor selection:', editor.getSelection())
        // console.log('Editor value:', editor.getValue())
    }))

    // When the editor is focused
    main.registerEvent(main.app.workspace.on('editor-paste', (editor) => {
        console.log('Editor paste:', editor)
    }))

    // When the editor menu is triggered (e.g., right-clicking in the editor)
    main.registerEvent(main.app.workspace.on('editor-menu', (editor) => {
        console.log('Editor menu triggered:', editor)
    }))

    // ==================== File explorer events ====================>>>
    const explorer = main.app.workspace.getLeavesOfType("file-explorer")[0];
    explorer.view

}