import { exec } from "child_process";
import { Plugin } from "obsidian";


export default function exampleShellCommands(main: Plugin): void {
    main.addRibbonIcon('dice-3', 'Example shell commands', () => {
        exec('ipconfig', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    })
}