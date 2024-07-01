"use client"
import { useState, useEffect } from 'react'
import { Button, Typography, Spinner } from "./components/material_UI_tailwind.jsx"
import DataTable from "./components/data_table.jsx"
import SelectOptions from './components/select.jsx'
import axios from "axios"

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState(1)
  const url = "https://todosolo.e0tomasgbailon.me"

  const fetchData = async (type_id) => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/services/?type=${type_id}`)
      setData(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(type)
    console.log("Type", type)
    console.log("Data", data)
  }, [type])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-20">
      <div className="mb-10 text-center">
        <Typography variant="h1">Cotizador de Precios</Typography>
        <Typography variant="h3">Servicio técnico de computadores</Typography>
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <div>
            <Spinner color="blue" className="h-20 w-20" />
          </div>
          <div className='mt-4'>
            <Typography variant="h5">Cargando...</Typography>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-10 mt-5 flex w-96">
            <SelectOptions value={type} setValue={setType} />
          </div>
          <div className="mb-5 w-full overflow-auto">
            {data && data.length > 0 ? (
              <DataTable data={data} />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Typography variant="h5" className="text-center">Lo siento, no hay información para este tipo de servicio</Typography>
                <Typography variant="small" className="text-center">Vuelve a intentar más tarde</Typography>
              </div>
            )}
          </div>
          
          <div className="flex items-center mt-3">
            <Button color="blue" ripple="light" size="small" onClick={() => fetchData(type)}>Actualizar</Button>
          </div>
        </>
      )}
    </main>
  )
};
