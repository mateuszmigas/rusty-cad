// import opencascade from "opencascade.js/dist/opencascade.full.js";
// import opencascadeWasm from "opencascade.js/dist/opencascade.full.wasm?url";
import opencascadeWasm from "../rocketExample.wasm?url";
import opencascade from "../rocketExample.js";

type Occt = Awaited<ReturnType<typeof opencascade>>;

export const loadOcct = async (): Promise<Occt> => {
    const oc = await (opencascade as any)({ locateFile: () => opencascadeWasm });
    return oc;
};