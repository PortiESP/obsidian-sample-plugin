import { Notice, Plugin } from "obsidian";

export default function exampleFileExplorer(main: Plugin) {

    // Read hidden files from data and hide them
    main.loadData().then(data => {
        if (data?.hiddenFiles) {
            console.log("HIDING FILES", data.hiddenFiles)
            updateHiddenFiles(data.hiddenFiles);
        }
    })

    // Add a command to hide a file
    main.registerEvent(main.app.workspace.on('file-menu', (menu, file) => {
        menu.addItem(item => {
            item.setTitle('Hide file')
            item.setIcon('eye-off')
            item.onClick(() => addToHiddenFiles(main, file))
        })
    }))
    
    // Clear hidden files
    main.addCommand({
        id: 'clear-hidden-files',
        name: 'Clear hidden files',
        callback: () => clearHiddenFiles(main)
    })
}


async function addToHiddenFiles(main: Plugin, file: any) {
        const data = await main.loadData() || {};
        
        data.hiddenFiles = data.hiddenFiles || [];
        data.hiddenFiles.push(file.path);

        await main.saveData(data);
        updateHiddenFiles(data.hiddenFiles);
        new Notice('File hidden');
}



function clearHiddenFiles(main: Plugin) {
    main.saveData({ hiddenFiles: [] });
    updateHiddenFiles([]);
    new Notice('Hidden files cleared');
}

function updateHiddenFiles(hiddenFiles: string[]) {
    const selectors = hiddenFiles.map(path => `[data-path="${path}"]`).join(', ');

    const styleElement = document.createElement('style');
    styleElement.id = 'hidden-files-style';
    styleElement.appendChild(document.createTextNode(`
        ${selectors} { display: none; }
    `));

    if (document.getElementById('hidden-files-style')) {
        document.getElementById('hidden-files-style')?.remove();
    }

    document.body.appendChild(styleElement);
}
