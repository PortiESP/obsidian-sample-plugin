import { CachedMetadata, Plugin, TFile } from "obsidian";


export default function exampleExplorer(main: Plugin) {

    main.registerEvent(main.app.metadataCache.on("changed", (file, data, cache) => handleFrontmatterChanged(main, { file, data, cache })));

}

function handleFrontmatterChanged(main: Plugin, data: { file: TFile, data: String, cache: CachedMetadata }) {
    const explorer = main.app.workspace.getLeavesOfType("file-explorer")[0];

    console.log("Explorer", explorer, data.file, data.data, data.cache);

    const icon = data.cache.frontmatter?.icon
    
    // @ts-ignore
    const files = explorer.view.fileItems

    const file = files[data.file.path]

    const $file = file.innerEl

    const $icon = document.createElement("span");
    $icon.textContent = icon + " ";
    $icon.classList.add("plugin-icon");

    $file.querySelector(".plugin-icon")?.remove();

    if (icon)
        $file.prepend($icon);

}
