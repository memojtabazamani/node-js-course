const handeler404 = (req, res) => {
  res.status(404).send('Not Found')
}

const handelerServerErrors = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

module.exports = {
  handeler404,
  handelerServerErrors,
}
