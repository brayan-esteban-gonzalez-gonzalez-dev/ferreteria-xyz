const express = require('express');
const cors = require('cors');
const proveedorRoutes = require('./src/modules/proveedor/proveedor.routes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api/proveedores', proveedorRoutes);


app.use((req, res) => {
    res.status(404).json({ ok: false, mensaje: 'Endpoint no encontrado.' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});