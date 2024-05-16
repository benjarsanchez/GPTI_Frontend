import { Button, Typography } from "./components/material_UI_tailwind.jsx"
import DataTable from "./components/data_table.jsx"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-20">
      <div className="mb-5 text-center">
        <Typography variant="h1">Cotizador de Precios</Typography>
        <Typography variant="h3">Servicio técnico de computadores</Typography>
      </div>
      <div className="mb-5">
        <DataTable />
      </div>
      <div className="flex items-center mt-3">
         <Button color="blue" ripple="light" size="small">Buscar servicios</Button>
      </div>
    </main>
  );
}
