const printTitle = (title) => {
    console.log('')
    console.log(`\x1b[43m \x1b[0m` + `\x1b[33m ` + title + `\x1b[0m`)
    console.log('')
}

const spawn = async(cmd) => {
    const chunks = cmd.split(' ')
    await new Promise(resolve => {
        const child = require('child_process').spawn(
            chunks.shift(),
            chunks,
            {
                stdio: 'inherit',
                shell: true,
            }
        )
        child.on('close', () => {
            resolve()
        })
    })
}

const run = async () => {

    // npm install
    printTitle('Pulling changes')
    await spawn('git pull')

    // npm install
    printTitle('Installing modules')
    await spawn('npm install --no-package-lock')

    // pm2 restart using config json
    printTitle('Starting server')
    await spawn('pm2 restart pm2.json')

}

run().catch(err => console.error(err))
