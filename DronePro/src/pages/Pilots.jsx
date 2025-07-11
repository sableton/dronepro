import React, { useState, useEffect } from 'react'
import { getPilots } from '../services/api'

const Pilots = () => {
  const [pilots, setPilots] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPilots = async () => {
      try {
        const data = await getPilots()
        setPilots(data)
      } catch (err) {
        setError('Errore nel caricamento dei piloti')
      } finally {
        setLoading(false)
      }
    }

    fetchPilots()
  }, [])

  const handleQuoteRequest = (pilotId) => {
    alert(`Richiesta di preventivo inviata al pilota ${pilotId}`)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Caricamento piloti...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Piloti di Droni Professionisti</h1>
        <p className="text-xl text-gray-600">Trova il pilota giusto per le tue esigenze</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pilots.map((pilot) => (
          <div key={pilot.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{pilot.name}</h3>
                  <p className="text-gray-600">{pilot.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{pilot.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Servizi offerti:</h4>
                <div className="flex flex-wrap gap-2">
                  {pilot.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">{pilot.rating}</span>
                </div>
                <button
                  onClick={() => handleQuoteRequest(pilot.id)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Richiedi preventivo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pilots
