// src/App.jsx
import React from 'react';
import Header from './Componentes/Header';
import MyCard from './Componentes/MyCard';
import Footer from './Componentes/Footer';


const App = () => {
  const title = 'Adopta un perrito';

  const cards = [
    {
      imageUrl: 'https://images.pexels.com/photos/3478875/pexels-photo-3478875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Bartolo',
      description: 'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!',
      breed: 'Husky',
      tags: { text: 'Activo', color: 'primary' },
    },
    {
      imageUrl: 'https://images.pexels.com/photos/191353/pexels-photo-191353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Messi',
      description: 'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!',
      breed: 'Chihuahua',
      tags: { text: 'Activo', color: 'primary' },
    },
    {
      imageUrl: 'https://images.pexels.com/photos/16881112/pexels-photo-16881112/free-photo-of-shar-pei-allonge-en-terrasse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Gohan',
      description: 'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!',
      breed: 'Shar Pei',
      tags: { text: 'Activo', color: 'primary' },
    },
    {
      imageUrl: 'https://images.pexels.com/photos/4410156/pexels-photo-4410156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Princesa',
      description: 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!',
      breed: 'Beagle',
      tags: { text: 'Activo', color: 'secundary' },
    },
    // Agrega más tarjetas según sea necesario
  ];

  return (
    <div>
      <Header title={title} />
      <div className="card-container">
        {cards.map((card, index) => (
          <MyCard key={index} {...card} />
        ))}
      </div>

      <div className="centered-text">
      <p>Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.</p>
      </div>
      <Footer />


    </div>
  );
};

export default App;
