import { Plugin } from "obsidian";

export default function exampleAddStatusBarItem(plugin: Plugin) {
  const statusBar = plugin.addStatusBarItem();
  statusBar.setText("Hello, status bar!");
  statusBar.show();
}