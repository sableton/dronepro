import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DroneMarket</h3>
            <p className="text-gray-300">
              Il marketplace leader per servizi di droni professionali in Italia.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monitoraggio Tetti</li>
              <li>Fotogrammetria</li>
              <li>Agricoltura di Precisione</li>
              <li>Rilievi LIDAR 3D</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <p className="text-gray-300">
              Email: info@dronemarket.it<br/>
              Tel: +39 02 1234567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 DroneMarket. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
