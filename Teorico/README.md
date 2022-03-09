# Desafio Teorico!

## HeadingProcesos, hilos y corrutinas

1.  Un caso en el que usarías procesos para resolver un problema y por qué.
2.  Un caso en el que usarías threads para resolver un problema y por qué.
3.  Un caso en el que usarías corrutinas para resolver un problema y por qué

### APOYO TEORICO

1. El proceso es la unidad de asignación de recursos
2. Thread es la unidad de programación del sistema operativo.
3. El cambio de proceso requiere la mayor cantidad de recursos y es muy ineficiente
4. Los recursos necesarios para el cambio de hilo son promedio y la eficiencia es promedio (por supuesto, sin considerar el GIL)
5. Los recursos de las tareas de conmutación de corrutinas son pequeños y eficientes
6. El multiproceso y el multiproceso pueden ser paralelos según la cantidad de núcleos de CPU, pero la co-rutina está en un solo subproceso, por lo que es concurrente.

# Respuesta

1.  **procesos** Un proceso informático consiste en la realización de una serie de tareas e instrucciones que conllevan a un resultado final. un caso de uso de un proceso pueden ser en los cuales todos los usuarios de PC, móvil u otros dispositivos hemos realizado alguna vez. En definitiva, en todo proceso existe una entrada de datos que permite el comienzo del proceso, para después mostrar una salida de datos que nos dará el resultado final.
2.  **threads** Si tenemos un dispositivo móvil al que le damos click en el icono de una aplicación para que se abra, entonces el dispositivo seguramente ya tiene varias aplicaciones abiertas, así que podríamos decir que cada aplicación es un hilo. Queda claro que los hilos son independientes, es decir las aplicaciones, lo que haga una no debería de afectar a la otra, ahora entonces cuando estamos en una aplicación vemos que tenemos cosas como descarga de imágenes, accesos a las bases de datos, etc. Estas tareas normalmente tienen un problema: no sabemos cuanto tiempo van a tardar, de hecho corremos siempre el riesgo de que la tarea no se complete
3.  **Las corrutinas** y/o los generadores se pueden utilizar para implementar funciones cooperativas. En lugar de ejecutarse en subprocesos del núcleo y programados por el sistema operativo, se ejecutan en un solo subproceso hasta que ceden o terminan, cediendo a otras funciones determinadas por el programador. Los lenguajes con generadores , como Python y ECMAScript 6, se pueden usar para construir corrutinas. Async / await (visto en C#, Python, ECMAScript 7, Rust) es una abstracción construida sobre funciones generadoras que producen futuros / promesas.

## Optimización de recursos del sistema operativo

Para eso primero se debe plantear que se debe conocer el **rate-limit** de la api que va a llamar 1 millón de veces, para saber cuántos llamados soporta por minuto. Ya con ese valor se plantea tener un pool de hilos para llamar en paralelo el **api** y que no vaya a pasar la cantidad de llamados soportados.
