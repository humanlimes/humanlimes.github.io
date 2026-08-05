import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// PRUEBA TEMPORAL: orden alfabético INVERTIDO (Z-A).
// Si esto se aplica, el menú debería verse al revés de como está ahora.
// Es solo para confirmar que quartz.ts se está ejecutando de verdad.
ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    return b.displayName.localeCompare(a.displayName, "es")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
