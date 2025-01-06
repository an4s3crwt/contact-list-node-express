const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los contactos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM Contacts');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los contactos', error });
  }
});

// Obtener un contacto por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM Contacts WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el contacto', error });
  }
});

// Crear un nuevo contacto
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const [result] = await db.execute('INSERT INTO Contacts (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    res.status(201).json({ id: result.insertId, name, email, phone });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el contacto', error });
  }
});

// Actualizar un contacto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  try {
    const [result] = await db.execute('UPDATE Contacts SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.json({ id, name, email, phone });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el contacto', error });
  }
});

// Eliminar un contacto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute('DELETE FROM Contacts WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el contacto', error });
  }
});

module.exports = router;
