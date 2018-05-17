import app from './app/index'
const port = process.env.PORT || 3002

app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`server is listening on ${port}...`)
})
