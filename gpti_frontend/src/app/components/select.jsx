import { Select, Option } from "./material_UI_tailwind.jsx";

const values_and_labels = {
    "Mantenimiento de armado de PC": 1,
    "Mantenimiento de armado de PC con instalación de Windows": 2,
    "Servicio de diagnóstico técnico de PC": 3,
    "Servicio de mantención básica de PC": 4,
    "Servicio de mantención básica PC con formateo": 5,
    "Servicio de mantención de tarjeta de video": 6,
    "Servicio de mantención de refrigeración": 7,
    "Servicio de instalación de procesador": 8,
    "Servicio de instalación de placa madre": 9,
    "Servicio de instalación de RAM": 10,
    "Servicio de instalación de unidad de almacenamiento": 11,
    "Servicio de instalación de cooler": 12,
    "Servicio de formateo": 13,
    "Servicio de cambio de gabinete": 14,
    "Servicio de mantención avanzada de PC": 15,
    "Servicio de mantención avanzada de PC con formateo": 16,
    "Servicio de respaldo de almacenamiento": 17,
};

export default function SelectOptions({ value, setValue }) {
    return (
        <Select label="Selecciona un tipo de servicio" 
                size="lg"
                value={value}
                onChange={(val) => setValue(val)}
        >
            {Object.entries(values_and_labels).map(([label, value]) => (
                <Option key={value} value={value}>
                    {label}
                </Option>
            ))}
        </Select>
    );
}
