const MENSAJES: string[] = [
    "El texto es muy corto ", "El texto es muy largo "
];

export function obtenerError(numError: number): string {
    if (numError > MENSAJES.length) {
        return "EL CODIGO de Error no existe";
    }
    return MENSAJES[numError];
}
