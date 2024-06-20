import { Card, Typography } from "./material_UI_tailwind.jsx";
 
const TABLE_HEAD = ["Precio", "Nombre", "Teléfono", "Correo Electrónico", "Ubicación", "Sitio Web", "Servicio"];
 
const TABLE_ROWS = [
  // Nuevos datos de servicios técnicos
  {
    name: "Técnico Informático Santiago",
    phone: "+56 9 1234 5678",
    email: "info@tecnicoinformaticosantiago.cl",
    location: "Av. Apoquindo 1234, Las Condes, Santiago, Región Metropolitana, Chile",
    price: "$50",
    site_url: "https://tecnicoinformaticosantiago.cl"
  },
  {
    name: "Soluciones PC Providencia",
    phone: "+56 9 2345 6789",
    email: "contacto@solucionespcprovidencia.cl",
    location: "Av. Providencia 567, Providencia, Santiago, Región Metropolitana, Chile",
    price: "$60",
    site_url: "https://solucionespcprovidencia.cl"
  },
  {
    name: "Masters de IT Santiago",
    phone: "+56 9 3456 7890",
    email: "info@mastersdeitsantiago.cl",
    location: "Av. Libertador Bernardo O'Higgins 890, Santiago, Región Metropolitana, Chile",
    price: "$70",
    site_url: "https://mastersdeitsantiago.cl"
  },
  {
    name: "Reparaciones Informáticas La Florida",
    phone: "+56 9 4567 8901",
    email: "soporte@reparacionesinformaticaslaflorida.cl",
    location: "Av. La Florida 123, La Florida, Santiago, Región Metropolitana, Chile",
    price: "$55",
    site_url: "https://reparacionesinformaticaslaflorida.cl"
  },
  {
    name: "Consultores de Computación Ñuñoa",
    phone: "+56 9 5678 9012",
    email: "contacto@consultoresdecomputacionnunoa.cl",
    location: "Av. Irarrázaval 456, Ñuñoa, Santiago, Región Metropolitana, Chile",
    price: "$65",
    site_url: "https://consultoresdecomputacionnunoa.cl"
  },
  {
    name: "Técnicos en Informática Maipú",
    phone: "+56 9 6789 0123",
    email: "info@tecnicosinformaticamaipu.cl",
    location: "Av. Pajaritos 789, Maipú, Santiago, Región Metropolitana, Chile",
    price: "$75",
    site_url: "https://tecnicosinformaticamaipu.cl"
  }
];
 
export default function DataTable({ data }) {
  return (
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, phone, email, location, price, url, service }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {price || "-"}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name || "-"}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {phone || "-"}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email || "-"}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {location || "-"}
                  </Typography>
                </td>
                <td className={classes}>
                  {url ? (
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{url}</a>
                    </Typography>
                  ) : (
                    <Typography variant="small" color="blue-gray" className="font-normal">-</Typography>
                  )}
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {service || "-"}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
