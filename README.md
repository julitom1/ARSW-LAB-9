### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/en-us/free/search/?&ef_id=Cj0KCQiA2ITuBRDkARIsAMK9Q7MuvuTqIfK15LWfaM7bLL_QsBbC5XhJJezUbcfx-qAnfPjH568chTMaAkAsEALw_wcB:G:s&OCID=AID2000068_SEM_alOkB9ZE&MarinID=alOkB9ZE_368060503322_%2Bazure_b_c__79187603991_kwd-23159435208&lnkd=Google_Azure_Brand&dclid=CjgKEAiA2ITuBRDchty8lqPlzS4SJAC3x4k1mAxU7XNhWdOSESfffUnMNjLWcAIuikQnj3C4U8xRG_D_BwE). Al hacerlo usted contará con $200 USD para gastar durante 1 mes.

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?

   - Azure Functions es un servicio en la nube disponible bajo demanda que proporciona toda la infraestructura y los recursos que se actualizan continuamente y que se necesitan para ejecutar sus aplicaciones. Las funciones de Azure son escalables. Cuando aumenta la demanda de ejecución, se asignan más recursos automáticamente al servicio y cuando las solicitudes disminuyen, todos los recursos adicionales y las instancias de aplicación se eliminan automáticamente.

* ¿Qué es serverless?

  - Permite a los desarrolladores crear aplicaciones más rápidamente al eliminar la necesidad de administrar la infraestructura. Con las aplicaciones sin servidor, el proveedor de servicios en la nube aprovisiona, escala y administra automáticamente la infraestructura necesaria para ejecutar el código.  Es importante tener en cuenta que los servidores aún ejecutan el código. El nombre sin servidor proviene del hecho de que las tareas asociadas con el aprovisionamiento y la administración de la infraestructura son invisibles para el desarrollador. Este enfoque permite a los desarrolladores aumentar su enfoque en la lógica empresarial y ofrecer más valor al núcleo del negocio.
  
  
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
  
    - Es un sistema que se utiliza principalmente en el desarrollo de software para describir el período de tiempo durante el cual se ejecuta un programa. 
    - Se ejecuta un cargador que asigna memoria y vincula el programa con las bibliotecas necesarias, entonces comenzarla ejecución. Esto nos ayuda a ver en el momento exacto
en que la aplicación tuvo un error o finalizo.  
  
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?

  - Contiene todos sus objetos de datos de Azure Storage: blobs, archivos, colas, tablas y discos. La cuenta de almacenamiento proporciona un espacio de nombres único para sus datos de Azure Storage al que se puede acceder desde cualquier lugar del mundo a través de HTTP o HTTPS. Los datos de su cuenta de almacenamiento de Azure son duraderos y de alta disponibilidad, seguros y escalables de forma masiva.
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
