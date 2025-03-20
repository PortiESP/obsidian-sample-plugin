import { Plugin } from "obsidian";


export default function exampleRegisterIntervals(main: Plugin) {

    // DEBUG
    if (true) return

    console.log('Registering intervals')
    let interval = window.setInterval(() => {
        console.log('Interval is running')
    }, 1000)

    main.registerInterval(interval)
}