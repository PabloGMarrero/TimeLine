import start from './src/server/server'

const port = process.env.PORT || 5000

start().listen(port, () => {
    console.log(`TODO list backend listening on port ${port}!`)
})
