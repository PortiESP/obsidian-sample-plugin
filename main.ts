import exampleAddCommand from 'examples/level1/add-command'
import exampleAddRibbonIcon from 'examples/level1/add-ribbon-icon'
import exampleAddStatusBarItem from 'examples/level1/add-status-bar-item'
import exampleCreateFilesAndFolders from 'examples/level2/create-files-ad-folders'
import exampleReadWriteData from 'examples/level2/read-and-write-files'
import exampleSettingsManagement from 'examples/level2/settings-management'
import exampleCustomViewsAndPanes from 'examples/level3/exampleCustomViewsAndPanes'
import exampleEditorEvents from 'examples/level3/exampleEditorEvents'
import exampleEditorManipulation from 'examples/level3/exampleEditorManipulation'
import exampleKeybinds from 'examples/level3/exampleKeybinds'
import exampleRegisterIntervals from 'examples/level3/exampleRegisterIntervals'
import exampleSuggestModal from 'examples/level3/exampleSuggestModal'
import exampleEditInterface from 'examples/level4/exampleEditInterface'
import exampleShellCommands from 'examples/level4/exampleShellCommands'
import { Plugin } from 'obsidian'

export default class Main extends Plugin {
	settings: any = {
		sett1: 'value1',
		sett2: 'value2'
	}

	async onload() {
		console.log('--------------- loading plugin ---------------', this)

		// ==================== Level 1: Basic interface ====================>>>
		// Example 1. Add a command
		exampleAddCommand(this)
		// Example 2. Add a ribbon icon
		exampleAddRibbonIcon(this)
		// Example 3. Add a status bar item
		exampleAddStatusBarItem(this)

		// ==================== Level 2: File management ====================>>>
		// Example 4. Read and write data
		exampleReadWriteData(this)
		// Example 5. Create files and folders
		exampleCreateFilesAndFolders(this)
		// Example 6. Create a settings file
		exampleSettingsManagement(this)

		// ==================== Level 3: Editor ====================>>>
		// Example 7. Editor manipulation
		exampleEditorManipulation(this)
		// Example 8. Editor events
		exampleEditorEvents(this)
		// Example 9. Custom views and panes
		exampleCustomViewsAndPanes(this)
		// Example 10. Suggest Modal
		exampleSuggestModal(this)
		// Example 11. Keybinds
		exampleKeybinds(this)
		// Example 12. Registering Intervals
		exampleRegisterIntervals(this)

		// ==================== Level 4: Advanced operations ====================>>>
		// Example 13. Shell commands
		exampleShellCommands(this)
		// Example 14. Edit the interface
		exampleEditInterface(this)
		
	}

	async onunload() {
		console.log('unloading plugin')
	}
}