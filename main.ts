import exampleAddCommand from 'examples/level1/add-command'
import exampleAddRibbonIcon from 'examples/level1/add-ribbon-icon'
import exampleAddStatusBarItem from 'examples/level1/add-status-bar-item'
import exampleCreateFilesAndFolders from 'examples/level2/create-files-ad-folders'
import exampleReadWriteData from 'examples/level2/read-and-write-files'
import exampleSettingsManagement from 'examples/level2/settings-management'
import exampleContextMenu from 'examples/level3/exampleContextMenu'
import exampleCustomViewsAndPanes from 'examples/level3/exampleCustomViewsAndPanes'
import exampleEditorEvents from 'examples/level3/exampleEditorEvents'
import exampleEditorManipulation from 'examples/level3/exampleEditorManipulation'
import exampleKeybinds from 'examples/level3/exampleKeybinds'
import exampleRegisterIntervals from 'examples/level3/exampleRegisterIntervals'
import exampleSuggestModal from 'examples/level3/exampleSuggestModal'
import exampleEditInterface from 'examples/level4/exampleEditInterface'
import exampleEditorExtension from 'examples/level4/exampleEditorExtension'
import exampleFileExplorer from 'examples/level4/exampleFileExplorer'
import exampleMarkdownPostProcessing from 'examples/level4/exampleMarkdownPostProcessing'
import exampleShellCommands from 'examples/level4/exampleShellCommands'
import exampleStateManagement from 'examples/level4/exampleStateManagement'
import exampleExplorer from 'examples/level5/exampleExplorer'
import test from 'examples/test/test'
import { Plugin } from 'obsidian'


export default class Main extends Plugin {
	settings: any = {
		sett1: 'value1',
		sett2: 'value2'
	}

	async onload() {
		// @ts-ignore
		window.main = this
		
		console.log('--------------- loading plugin ---------------', this)
		test(this)

		// ==================== Level 1: Basic interface ====================>>>
		// Example 1. Add a command
		// exampleAddCommand(this)
		// Example 2. Add a ribbon icon
		// exampleAddRibbonIcon(this)
		// Example 3. Add a status bar item
		// exampleAddStatusBarItem(this)

		// ==================== Level 2: File management ====================>>>
		// Example 1. Read and write data
		// exampleReadWriteData(this)
		// Example 2. Create files and folders
		// exampleCreateFilesAndFolders(this)
		// Example 3. Create a settings file
		// exampleSettingsManagement(this)

		// ==================== Level 3: Editor ====================>>>
		// Example 1. Editor manipulation
		// exampleEditorManipulation(this)
		// Example 2. Editor events
		// exampleEditorEvents(this)
		// Example 3. Custom views and panes
		// exampleCustomViewsAndPanes(this)
		// Example 4. Suggest Modal
		// exampleSuggestModal(this)
		// Example 5. Keybinds
		// exampleKeybinds(this)
		// Example 6. Registering Intervals
		// exampleRegisterIntervals(this)
		// Example 7. Context Menu
		// exampleContextMenu(this)	

		// ==================== Level 4: Advanced operations ====================>>>
		// Example 1. Shell commands
		// exampleShellCommands(this)
		// Example 2. Edit the interface
		// exampleEditInterface(this)
		// Example 3. File explorer
		// exampleFileExplorer(this)
		// Example 4. Markdown post-processing
		// exampleMarkdownPostProcessing(this)
		// Example 5. State management
		// exampleStateManagement(this)
		// Example 6. Editor Extension
		// exampleEditorExtension(this)

		// ==================== Level 5: Advanced functionalities ====================>>>
		// Example 1. Explorer
		exampleExplorer(this)
	}

	async onunload() {
		console.log('unloading plugin')
	}
}