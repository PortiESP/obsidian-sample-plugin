import { Plugin, TFile } from "obsidian";

export default async function exampleReadWriteData(main: Plugin): Promise<void> {
    const filename = 'read-and-write-example-file.md'
    const file = main.app.vault.getAbstractFileByPath(filename)

    if (!file) {
        // Create the file if it doesn't exist
        console.log('[i] File does not exist, creating it...')
        main.app.vault.create(filename, '')
    }

    // Read the file
    if (!(file instanceof TFile)) {
        console.error('[!!!] File is not a TFile', file)
        return
    }

    const content = await main.app.vault.read(file)
    console.log(`[i] File content: ${content}`)

    // Write to the file
    const newContent = 'Hello, world!\n'
    await main.app.vault.modify(file, newContent)  // Overwrites the file content
    await main.app.vault.append(file, "This was appended")  // Appends to the file content
    console.log(`[i] File content: ${newContent}`)

    // Read the file again
    const newContentRead = await main.app.vault.read(file)
    console.log(`[i] File content: ${newContentRead}`)
    
}