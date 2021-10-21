const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// allow our app to access images and other content in the public folder
app.use(express.static(__dirname + '/public'))

// tell our app to render views from the views folder
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))

// use handlebars for views
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('got index page')
  res.render('index')
})

app.use((req, res) => {
  res.type('text/plain')
  res.status
(404)
  res.send('404 - not found')
})

app.use((err, req, res, next) => {
  console.log('error:', err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - server error')
})

app.listen(port, () => console.log(`Express started on http://localhost:${port} ` + `press Ctrl-C to terminate`))
