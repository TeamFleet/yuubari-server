const printTitle = (title) => {
    console.log('')
    console.log(`\x1b[43m \x1b[0m` + `\x1b[33m ` + title + `\x1b[0m`)
    console.log('')
}

const spawn = async(...args) => {
    await new Promise(resolve => {
        const child = require('child_process').spawn(...args)
        child.on('close', () => {
            resolve()
        })
    })
}

const run = async () => {

    // npm install
    printTitle('Pulling changes')

    // npm install
    printTitle('Installing modules')
    await spawn(`npm`, ['install', '--no-package-lock'], {
        stdio: 'inherit',
        shell: true,
    })

    // pm2 restart using config json
    printTitle('Starting server')
    await spawn(`pm2`, ['restart', 'pm2.json'], {
        stdio: 'inherit',
        shell: true,
    })

}

run().catch(err => console.error(err))
