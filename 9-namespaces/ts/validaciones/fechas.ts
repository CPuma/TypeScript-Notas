namespace Validaciones {
    export function fechasValidas(fecha: Date): boolean {
        if (isNaN(fecha.valueOf())) {
            return false;
        } else {
            return true;
        }
    }
}