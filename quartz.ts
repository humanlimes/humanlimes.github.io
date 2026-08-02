import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden exacto que queremos para las secciones de Limes.
// Deben coincidir con el "slug" (nombre de carpeta en minúsculas, con
// espacios convertidos en guiones) tal como lo genera Quartz.
const ordenSecciones = [
  "investigación",
  "análisis",
  "dossiers",
  "conceptos",
  "bibliografía",
  "recursos",
  "equipo",
  "contacto",
]

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const idxA = ordenSecciones.indexOf(a.slugSegment)
    const idxB = ordenSecciones.indexOf(b.slugSegment)

    // Si ambas carpetas están en nuestra lista, respetamos ese orden
    if (idxA !== -1 && idxB !== -1) return idxA - idxB

    // Las que están en la lista van siempre antes que las que no
    if (idxA !== -1) return -1
    if (idxB !== -1) return 1

    // Cualquier otra cosa (notas sueltas dentro de cada carpeta, etc.)
    // se ordena alfabéticamente en español, como hacía por defecto
    return a.displayName.localeCompare(b.displayName, "es")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
