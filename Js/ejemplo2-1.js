 //1. Declara tus datos personales

        const nombre = "Brayan";
        const apellido = "villamizar";
        const edad = 19;
        const ciudad = 'cucuta';
        const programa = 'Analisis y Desarrollo de Software';
        const ficha = 3406234;
        const jornada = "mañana"
        let estudiante = true;

        //2. imprime una tarjeta personal en consola
        console.log("===TARJETA PERSONAL===");
        console.log(`Nombre: ${nombre}  ${apellido} `);
        console.log(`ciudad: ${ciudad}`);
        console.log(`¿Es estudiante?: ${estudiante}`);
        console.log(`Programa: ${programa} `);
        console.log(`Ficha: ${ficha} `);
        console.log(`Jornada: ${jornada} `);
        //3.Calcula el año de nacimiento aproximado
        const anioActual = 2026;
        const anioNacimiento = anioActual - edad;
        console.log (`Año aproximado de nacimiento: ${anioNacimiento}  `);