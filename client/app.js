// URL del servidor (ajusta si el servidor está en otro puerto)
const apiUrl = 'http://localhost:5000/api/contacts';

// Función para obtener los contactos y mostrarlos
async function loadContacts() {
    try {
        const response = await fetch(apiUrl);
        const contacts = await response.json();
        const contactsList = document.getElementById('contacts-list');
        contactsList.innerHTML = ''; // Limpiar lista antes de agregar
        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
            contactsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
    }
}

// Función para manejar el formulario de agregar contacto
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone })
        });
        
        if (response.ok) {
            loadContacts(); // Recargar los contactos después de agregar uno nuevo
        } else {
            console.error('Error al agregar el contacto');
        }
    } catch (error) {
        console.error('Error al realizar la petición:', error);
    }
}

// Configurar el formulario
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Cargar los contactos al inicio
loadContacts();
