import start from './src/server/server'

const port = process.env.PORT || 3001

start().listen(port, () => {
    console.log(`Timeline backend listening on port ${port}!`)
})
