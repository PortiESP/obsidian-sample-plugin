import Main from 'main';
import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

/*
    This function adds a new setting tab to the plugin's settings.
*/
export default function exampleSettingsManagement(main: Main): void {
    main.addSettingTab(new MyPluginSettingTab(main.app, main));
}


/*
    This class defines the content of the setting tab.
*/
export class MyPluginSettingTab extends PluginSettingTab {
    plugin: Main;  // Reference to the main plugin class

    constructor(app: App, plugin: Main) {
        super(app, plugin);
        this.plugin = plugin;
    }

    // This function is called when the setting tab is displayed.
    display(): void {
        const { containerEl } = this;  // Get the container element
        containerEl.empty();  // Clear the container

        // Add a setting to the container (type: text input)
        new Setting(containerEl)
            .setName('My Setting')                                    // Set the name of the setting
            .setDesc('A description of my setting')                   // Set the description of the setting
            .addText(text => text                                     // Add a text input
                .setValue("HOLA")
                .onChange(async (value: string): Promise<void> => {
                    this.plugin.settings.sett1 = value;
                    await this.saveSettings(this.plugin);
                }));

        // Add a setting to the container (type: checkbox)
        new Setting(containerEl)
            .setName('My Checkbox Setting')                           // Set the name of the setting
            .setDesc('A description of my checkbox setting')          // Set the description of the setting
            .addToggle(toggle => toggle                               // Add a toggle input
                .setValue(this.plugin.settings.sett2)
                .onChange(async (value: boolean): Promise<void> => {
                    this.plugin.settings.sett2 = value;
                    await this.saveSettings(this.plugin);
                }));


        // Add a setting to the container (type: button)
        new Setting(containerEl)
            .setName('My Button Setting')                             // Set the name of the setting
            .setDesc('A description of my button setting')            // Set the description of the setting
            .addButton(button => button                               // Add a button
                .setButtonText('Reset Settings')                      // Set the button text
                .setCta()                                             // Set the button as a call to action
                .onClick(async () => {                                // Set the function to be called when the button is clicked
                    this.plugin.settings.sett1 = 'value1';
                    this.plugin.settings.sett2 = 'value2';
                    await this.saveSettings(this.plugin);
                    this.display();
                }));

        
        // Add a setting to the container (type: dropdown)
        new Setting(containerEl)
            .setName('My Dropdown Setting')                           // Set the name of the setting
            .setDesc('A description of my dropdown setting')          // Set the description of the setting
            .addDropdown(dropdown => dropdown                         // Add a dropdown
                .addOptions({                                       // Add the options to the dropdown
                    'option1': 'Option 1',
                    'option2': 'Option 2',
                    'option3': 'Option 3'
                })
                .setValue(this.plugin.settings.sett3)                // Set the value of the dropdown
                .onChange(async (value: string) => {                 // Set the function to be called when the dropdown value changes
                    this.plugin.settings.sett3 = value;
                    await this.saveSettings(this.plugin);
                }));


        // Add a setting to the container (type: slider)
        new Setting(containerEl)
            .setName('My Slider Setting')                             // Set the name of the setting
            .setDesc('A description of my slider setting')            // Set the description of the setting
            .addSlider(slider => slider                               // Add a slider
                .setLimits(0, 100, 1)                                 // Set the limits of the slider
                .setValue(this.plugin.settings.sett5)                 // Set the value of the slider
                .onChange(async (value: number) => {                  // Set the function to be called when the slider value changes
                    this.plugin.settings.sett5 = value;
                    await this.saveSettings(this.plugin);
                }));
    
    }


    /*
        This function saves the plugin settings.
    */
    saveSettings(main: Main): Promise<void> {
        console.log(`[i] Saving settings:`, main.settings);
        return main.saveData(main.settings);
    }

    /*
        This function loads the plugin settings.
    */
    loadSettings(main: Main): void {
        console.log(`[i] Loading settings:`, main.settings);
        main.loadData().then(data => {
            if (data) {
                main.settings = data;
            }
        });
    }


}

