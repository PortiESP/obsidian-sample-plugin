import { Plugin } from "obsidian";

export default function exampleCreateFilesAndFolders(main: Plugin): void {

    // Check if a folder exists
    const folderExists = main.app.vault.getAbstractFileByPath('example-folder')
    // Create a new folder
    if (!folderExists) main.app.vault.createFolder('example-folder')

    // Check if a file exists
    const fileExists = main.app.vault.getAbstractFileByPath('example-file.md')
    // Create a new file
    if (!fileExists) main.app.vault.create('example-file.md', 'This is an example file')

    // Check if a file in a folder exists
    const fileInFolderExists = main.app.vault.getAbstractFileByPath('example-folder/example-file-in-folder.md')
    // Create a new file in a folder
    if (!fileInFolderExists) main.app.vault.create('example-folder/example-file-in-folder.md', 'This is an example file in a folder')


    // Check if a folder in a folder exists
    const folderInFolderExists = main.app.vault.getAbstractFileByPath('example-folder/example-folder-in-folder')
    // Create a new folder in a folder
    if (!folderInFolderExists) main.app.vault.createFolder('example-folder/example-folder-in-folder')
}