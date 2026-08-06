import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden exacto que queremos para las secciones de Limes
const ordenSecciones = [
  "análisis",
  "investigación",
  "dossiers",
  "conceptos",
  "recursos",
  "equipo",
  "bibliografía",
]

ExternalPlugin.Explorer({
  // Oculta la propia portada (Limes / index.md de la raíz) del listado,
  // ya que se accede a ella desde el título de arriba ("Limes"), sin
  // necesidad de que aparezca también como si fuera una sección más.
  filterFn: (node) => {
    return node.slugSegment !== ""
  },
  sortFn: (a, b) => {
    const idxA = ordenSecciones.indexOf(a.slugSegment)
    const idxB = ordenSecciones.indexOf(b.slugSegment)

    if (idxA !== -1 && idxB !== -1) return idxA - idxB
    if (idxA !== -1) return -1
    if (idxB !== -1) return 1

    return a.displayName.localeCompare(b.displayName, "es")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
