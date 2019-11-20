exports.suma = function(req, res)
{
    var suma = (req.query.a + req.query.b);
    res.send('La suma es: ' + suma);
}