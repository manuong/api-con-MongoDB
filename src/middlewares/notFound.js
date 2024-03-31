const notFound = (req, res) => {
  res.status(404).json({ error: 'Rute not Found' });
};

module.exports = notFound;
