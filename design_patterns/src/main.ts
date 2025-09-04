//Ejercicio 1: patron singleton
class Inventario {
    private static instancia: Inventario;
    private equipo: { [nombre: string]: { tipo: string; estado: string } } = {};

    private constructor() { }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipo[nombre] = { tipo, estado }
    }

    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return Object.entries(this.equipo).map(([nombre, datos]) => ({
            nombre,
            ...datos,
        }));
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
