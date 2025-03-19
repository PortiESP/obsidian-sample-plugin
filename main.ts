import exampleAddCommand from 'examples/level1/add-command'
import exampleAddRibbonIcon from 'examples/level1/add-ribbon-icon'
import exampleAddStatusBarItem from 'examples/level1/add-status-bar-item'
import exampleCreateFilesAndFolders from 'examples/level2/create-files-ad-folders'
import exampleReadWriteData from 'examples/level2/read-and-write-files'
import exampleSettingsManagement from 'examples/level2/settings-management'
import { Plugin } from 'obsidian'

export default class Main extends Plugin {
	settings: any = {
		sett1: 'value1',
		sett2: 'value2'
	}

	async onload() {
		console.log('loading plugin', this)

		// ------ Level 1 ------
		// Example 1. Add a command
		exampleAddCommand(this)
		// Example 2. Add a ribbon icon
		exampleAddRibbonIcon(this)
		// Example 3. Add a status bar item
		exampleAddStatusBarItem(this)

		// ------ Level 2 ------
		// Example 4. Read and write data
		exampleReadWriteData(this)
		// Example 5. Create files and folders
		exampleCreateFilesAndFolders(this)
		// Example 6. Create a settings file
		exampleSettingsManagement(this)
		
	}

	async onunload() {
		console.log('unloading plugin')
	}
}