import { Menu, MenuItem, Notice, Plugin } from "obsidian"


export default function exampleContextMenu(main: Plugin) {
    const customMenu = new Menu()

    customMenu.addItem((item) => {
        item.setIcon('checkmark')
        item.setTitle('Checkmark')
        item.onClick(() => {
            console.log('Checkmark clicked')
        })
    })

    customMenu.addItem((item) => {
        item.setIcon('cross')
        item.setTitle('Cross')
        item.onClick(() => {
            console.log('Cross clicked')
        })
    })


    // ============= CONTEXT MENU ==============>>>

    // ------ Context Menu: Fixed Position ------
    main.addCommand({
        id: 'open-context-menu-fixed',
        name: 'Open Context Menu in a fixed position',
        callback: () => {
            customMenu.showAtPosition({ x: 500, y: 500 })
        }
    })

    // ------ Context Menu: File explorer ------
    // File explorer item context menu (opens when right-clicking a file in the file explorer)
    main.registerEvent(
        main.app.workspace.on('file-menu', (fileMenu, file) => {
            console.log('File menu opened:', fileMenu, file)
            fileMenu.addItem((item) => {
                item.setTitle('Open Custom Context Menu')
                    .setIcon('menu')
                    .onClick((a: PointerEvent) => {
                        console.log('Opening custom context menu', a)
                        customMenu.showAtPosition(a)
                    });
            });
        })
    );

    // ------ Context Menu: Editor ------
    // Editor context menu (opens when right-clicking in the editor)
    main.registerEvent(
        main.app.workspace.on('editor-menu', (menu, editor, view) => {
            console.log('Editor menu opened:', menu, editor, view)
            menu.addItem((item) => {
                item.setTitle('Open Custom Context Menu')
                    .setIcon('menu')
                    .onClick((a: PointerEvent) => {
                        console.log('Opening custom context menu', a)
                        customMenu.showAtPosition(a)
                    });
            });

            menu.addItem((item) => {
                item.setTitle('Nested Context Menu')
                    .setIcon('menu')
                    .setSection("nested")

                // @ts-ignore
                const m2 = item.setSubmenu()

                m2.addItem((item: any) => {
                    item.setTitle('Nested Item 1')
                        .setIcon('checkmark')
                })
            });
                
        })
    );


}

