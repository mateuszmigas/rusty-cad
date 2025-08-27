import opencascade from "opencascade.js/dist/opencascade.full.js";
import opencascadeWasm from "opencascade.js/dist/opencascade.full.wasm?url";

export const loadOcct = async () => {
    const oc = await (opencascade as any)({ locateFile: () => opencascadeWasm });
    return oc;
};